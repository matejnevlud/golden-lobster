import { XMLParser } from "fast-xml-parser";
import { parseBasic } from "@/utils/xmlParser";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DataGrid, getGridDateOperators, GridFilterOperator, GridRenderCellParams, useGridApiRef } from "@mui/x-data-grid";
import {Alert, Box, Button, ButtonGroup, CardHeader, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, LinearProgress, MenuItem, Modal, Select, TextField, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {
    ALL_DATA,
    changeOrderItemVariant,
    createNewOrder,
    createNewOrderItem,
    DB_bindOrderItemToPayment, DB_bindPaymentToCustomerPayment,
    DB_bindTaxToPayment,
    DB_cancelOrder,
    DB_cancelOrderItem,
    DB_changeOrderItemNote,
    DB_changeOrderItemVariant,
    DB_changeOrderNote,
    DB_closeOrder, DB_createCustomerPayment,
    DB_createPayment, DB_deliverOrderItem, DB_editPayment, DB_getNextPaymentPrintNumber, DB_prepareOrderItem,
    DB_printPayment, DB_removePayment, DB_reopenOrder, DB_unbindAllTaxesFromPayment, DB_unbindOrderItemsFromPayment,
    getAllData,
    getWaiterData, WAITER_DATA,
} from "@/db";
import { DBT_OrderItems, DBT_Meals } from "@prisma/client";
import { useReactToPrint } from "react-to-print";
import {base64DataUri, convertDate} from "@/utils/utils";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TableBarIcon from '@mui/icons-material/TableBar';
import RefreshIcon from '@mui/icons-material/Refresh';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useIdleTimer } from 'react-idle-timer/legacy'
import { Snackbar } from "@mui/base";
import { GridFilterInputDate } from "@mui/x-data-grid/components/panel/filterPanel/GridFilterInputDate";
import KitchenView from "@/components/KitchenView";
import { LayoutDataGrid, LayoutFooter } from "@/components/LayoutFooter";
import { DataGridPro } from "@mui/x-data-grid-pro";
import dynamic from "next/dynamic";
import {NewOrderModal} from "@/components/subcomp/NewOrderModal";
import {md5} from "@mui/x-license/encoding/md5";
import OrderDetail from "@/components/subcomp/OrderDetail";
import {useWaiterStore} from "@/store";


const todayFilterOperator: GridFilterOperator<any, Date, any>[] = [
    {
        label: 'Today',
        value: 'today',
        getApplyFilterFn: (filterItem) => {

            return (value) => {
                const today = new Date();
                return value.toDateString() === today.toDateString();
            };
        },
        getValueAsString: (value: number) => `${value}`,
    },
    ...getGridDateOperators()
];




export const OrdersList = (props) => {

    const waiterData : WAITER_DATA = props.waiterData;
    const { tables, ordersCalculated } = waiterData;

    const orders = useWaiterStore(state => state.orders);
    const setOrders = useWaiterStore(state => state.setOrders);

    const selectedOrderId = useWaiterStore(state => state.selectedOrderId);
    const setSelectedOrderId = useWaiterStore(state => state.setSelectedOrderId);

    //const [selectedOrderId, setSelectedOrderId] = useState<bigint | null>(null);


    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser') ?? 'null'));
    const [openTableModal, setOpenTableModal] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);



    const [lastStateHash, setLastStateHash] = useState(null);
    const [ordersSum, setOrdersSum] = useState(0);
    const [orderItemsCostSum, setOrderItemsCostSum] = useState(0);
    const [orderTaxesSum, setOrderTaxesSum] = useState(0);
    const [orderTotalSum, setOrderTotalSum] = useState(0);
    const [orderRealPaymentSum, setOrderRealPaymentSum] = useState(0);

    const orderInitialState = {
        sorting: {
            sortModel: [
                { field: 'OrderClosed', sort: 'asc' },
                { field: 'DateTime', sort: 'desc' },
            ],
        },
        filter: {
            filterModel: {
                items: [
                    { field: 'Status', operator: 'is', value: 'Active' },
                ],
            }
        },
        columns: {
            columnVisibilityModel: {
                id: false,
                OrderName: false,
                ID_Table: false,
                Canceled: false,
                OrderClosed: false,
            }
        }
    };

    const ordergridRef = useGridApiRef()
    const [randomKey, setRandomKey] = React.useState(Math.random());
    const [activeStatusState, setActiveStatusState] = React.useState(undefined);



    const cols = useMemo(() => [
        { field: 'id', headerName: 'ID' },
        { field: 'OrderName', headerName: 'Order Name' },
        {
            field: 'ID_Order', headerName: 'Order', type: 'number',
            renderCell: (params) => (
                <div>
                    <b>{params.row.id}</b>
                    <br />
                    <span>{params.row.OrderName ?? '-'}</span>
                </div>
            ),
        },

        { field: 'ID_Table', headerName: 'ID_Table' },
        { field: 'Table', headerName: 'Table', type: 'singleSelect', valueOptions: tables.map((table) => table.TableName) },
        { field: 'Note', headerName: 'Note', type: 'text' },
        {
            field: 'DateTime',
            headerName: 'Created At',
            type: 'date',
            valueFormatter: convertDate,
            filterOperators: todayFilterOperator,
        },
        { field: 'ItemsCost', headerName: 'ItemsCost', type: 'number', valueFormatter: val => val.toFixed(3) },
        { field: 'Taxes', headerName: 'Taxes', type: 'number', valueFormatter: val => val.toFixed(3) },
        { field: 'Total', headerName: 'Total', type: 'number', valueFormatter: val => val.toFixed(3) },
        { field: 'RealPayment', headerName: 'RealPayment', type: 'number', valueFormatter: val => val.toFixed(3) },
        { field: 'Status', headerName: 'Status', type: 'singleSelect', valueOptions: ['Active', 'Closed', 'Canceled'] },
    ], [tables]);
    const rows = useMemo(() => {
        // First, create a lookup map for ordersCalculated by OrderID for O(1) access
        const calculatedMap = {};
        ordersCalculated.forEach(calc => {
            calculatedMap[calc.OrderID] = calc;
        });

        // Create a lookup map for tables by ID
        const tablesMap = {};
        tables.forEach(table => {
            tablesMap[table.ID] = table;
        });

        // Now map the orders with much more efficient lookups
        return orders.map(order => {
            const orderID = parseInt(order.ID);
            const calculated = calculatedMap[orderID] || {};

            return {
                OrderName: order.OrderName,
                id: orderID,
                ID_Order: orderID,
                ID_Table: parseInt(order.ID_Table),
                Table: tablesMap[order.ID_Table]?.TableName,
                ID_Customer: parseInt(order.ID_Customer),
                DateTime: order.DateTime,
                Canceled: order.Canceled,
                Price: order.Price,
                OrderClosed: order.OrderClosed,
                Status: order.OrderClosed ? 'Closed' : order.Canceled ? 'Canceled' : 'Active',

                ItemsCost: parseFloat(calculated.ItemsCost ?? 0),
                Taxes: parseFloat(calculated.Taxes ?? 0),
                Total: parseFloat(calculated.Cost ?? 0),
                RealPayment: parseFloat(calculated.RealPayment ?? 0),
                Note: order.Note,
            };
        });
    }, [orders, tables, ordersCalculated]);






    console.log('render OrdersList')

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>


            <div className="flex items-center me-4 p-4">
                <FormControl sx={{marginLeft: 2, minWidth: 120}}>
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select
                        native
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={activeStatusState}
                        label="State"
                        onChange={(e) => {
                            if (e.target.value === 'All')
                                ordergridRef.current?.setFilterModel({
                                    items: []
                                })
                            else
                                ordergridRef.current?.setFilterModel({
                                    items: [
                                        {field: 'Status', operator: 'is', value: e.target.value}
                                    ]
                                })
                        }}
                    >
                        <option value="Active">Active</option>
                        <option value="Closed">Closed</option>
                        <option value="Canceled">Canceled</option>
                        <option value="All">All</option>
                    </Select>
                </FormControl>


                <div className="flex-1"></div>

                <Button variant={"contained"} className="p-4" onClick={() => setOpenTableModal(true)}>New Order</Button>

            </div>

            {isRefreshing && <LinearProgress/>}
            <DataGridPro
                pagination
                apiRef={ordergridRef}
                key={'ordergrid' + randomKey}
                viewName={'ordergrid'}
                slots={{footer: LayoutFooter}}
                slotProps={{footer: {viewName: 'ordergrid', refresh: () => setRandomKey(Math.random()), ref: ordergridRef}}}
                isRowSelectable={() => false}
                getRowHeight={() => 'auto'}
                getEstimatedRowHeight={() => 72}
                sx={{
                    '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {py: '8px'},
                    '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {py: '15px'},
                    '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {py: '22px'},
                    overflowX: 'scroll'
                }}
                initialState={orderInitialState}
                onFilterModelChange={(model) => {
                    // detect if changed state
                    const statusFilter = model.items?.find((item) => item.field === 'Status');
                    if (!statusFilter) setActiveStatusState("All");
                    else setActiveStatusState(statusFilter.value);

                    console.log('model', statusFilter)
                }}
                onStateChange={(state) => {
                    const visibleRowsLookup = state.filter.filteredRowsLookup
                    if (!visibleRowsLookup) return;

                    const visibleItems = [];
                    for (const [id, value] of Object.entries(visibleRowsLookup)) {
                        if (value === true) {
                            visibleItems.push(parseInt(id));
                        }
                    }
                    // Create an fast hash for visibleRowsLookup so it can be used for memoized calculations later
                    const visibleItemsHash = md5(JSON.stringify(visibleItems));
                    setLastStateHash(visibleItemsHash); // store the hash for later comparison, wont matter in next line
                    if (visibleItemsHash === lastStateHash) return;


                    const rowsFiltered = rows.filter((row) => visibleItems.includes(row.id));


                    const sum = rowsFiltered.reduce((acc, order) => acc + parseFloat(order.Price ?? 0), 0);

                    setOrdersSum(sum);

                    const orderItemsCostSum = rowsFiltered.reduce((acc, row) => acc + row.ItemsCost, 0);

                    setOrderItemsCostSum(orderItemsCostSum);

                    const orderTaxesSum = rowsFiltered.reduce((acc, row) => acc + row.Taxes, 0);
                    setOrderTaxesSum(orderTaxesSum);

                    const orderTotalSum = rowsFiltered.reduce((acc, row) => acc + row.Total, 0);
                    setOrderTotalSum(orderTotalSum);

                    const orderRealPaymentSum = rowsFiltered.reduce((acc, row) => acc + row.RealPayment, 0);
                    setOrderRealPaymentSum(orderRealPaymentSum);


                }}
                rows={rows}
                columns={cols}
                onRowClick={({id, row}) => {
                    setSelectedOrderId(id)
                }}
                getRowClassName={(params) => params.row.Canceled ? 'bg-red-200' : params.row.OrderClosed ? 'bg-gray-200' : ''}
            />
            <div className="flex items-center me-4">

                <div className="flex-1 mt-3.5 me-4 mb-3.5">
                    Items Cost Sum<br/> OMR {orderItemsCostSum.toFixed(3)}
                </div>
                <div className="flex-1 mt-3.5 me-4 mb-3.5">
                    Taxes Sum<br/> OMR {orderTaxesSum.toFixed(3)}
                </div>
                <div className="flex-1 mt-3.5 me-4 mb-3.5">
                    Total Sum<br/> OMR {orderTotalSum.toFixed(3)}
                </div>
                <div className="flex-1 mt-3.5 me-4 mb-3.5">
                    Real Payment Sum<br/> OMR {orderRealPaymentSum.toFixed(3)}
                </div>
            </div>

            <NewOrderModal orders={orders} tables={tables} setOrders={setOrders} setSelectedOrderId={setSelectedOrderId} openTableModal={openTableModal} setOpenTableModal={setOpenTableModal} currentUser={currentUser}/>


            <div style={{display: selectedOrderId ? 'flex' : 'none',  backgroundColor: 'white', position: 'absolute', width: "calc(100vw - 62.5vh - 12vh", zIndex: 999}}>
                <OrderDetail {...props}/>
            </div>
        </div>
    )
}