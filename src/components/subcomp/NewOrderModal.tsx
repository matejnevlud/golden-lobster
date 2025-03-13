import { XMLParser } from "fast-xml-parser";
import { parseBasic } from "@/utils/xmlParser";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { DataGrid, getGridDateOperators, GridFilterOperator, GridRenderCellParams, useGridApiRef } from "@mui/x-data-grid";
import {Alert, Box, Button, ButtonGroup, CardHeader, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, LinearProgress, MenuItem, Modal, Select, TextField, ToggleButton, ToggleButtonGroup, Typography} from "@mui/material";
import {
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
    getWaiterData,
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
import {useWaiterStore} from "@/store";



export const NewOrderModal = (props) => {

    const tables = props.tables;
    const currentUser = props.currentUser;

    const openTableModal = props.openTableModal;
    const setOpenTableModal = props.setOpenTableModal;


    const orders = useWaiterStore(state => state.orders);
    const setOrders = useWaiterStore(state => state.setOrders);
    const setSelectedOrderId = useWaiterStore(state => state.setSelectedOrderId);


    const [newOrderTableID, setNewOrderTableID] = useState(-1);
    const [newOrderOrderName, setNewOrderOrderName] = useState(null);
    const createOrder = async () => {
        if (newOrderTableID == -1) {
            alert('Please select a table');
            return;
        }

        console.log('createOrder', newOrderTableID, newOrderOrderName)
        const newOrder = await createNewOrder(newOrderTableID, currentUser.ID, newOrderOrderName);
        console.log('newOrder', newOrder)

        setOrders([...orders, newOrder]);
        setOpenTableModal(false)

        setSelectedOrderId(newOrder.ID);
        setNewOrderTableID(-1);
        setNewOrderOrderName(null);
    }


    console.log('render NewOrderModal')
    return (
        <Modal
            open={openTableModal}
            onClose={() => setOpenTableModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    1. Select table
                </Typography>
                <div className="flex flex-row justify-between mt-4 mb-4">
                    <div className="flex flex-col">
                        {tables.filter(t => t.Col == 1).map((table) => (
                            <Button key={table.ID} style={{ marginBottom: 5 }} variant={newOrderTableID == table.ID ? 'contained' : 'outlined'} disabled={!table.Active} onClick={() => setNewOrderTableID(table.ID)}>{table.TableName}</Button>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {tables.filter(t => t.Col == 2).map((table) => (
                            <Button key={table.ID} style={{ marginBottom: 5 }} variant={newOrderTableID == table.ID ? 'contained' : 'outlined'} disabled={!table.Active} onClick={() => setNewOrderTableID(table.ID)}>{table.TableName}</Button>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {tables.filter(t => t.Col == 3).map((table) => (
                            <Button key={table.ID} style={{ marginBottom: 5 }} variant={newOrderTableID == table.ID ? 'contained' : 'outlined'} disabled={!table.Active} onClick={() => setNewOrderTableID(table.ID)}>{table.TableName}</Button>
                        ))}
                    </div>
                    <div className="flex flex-col">
                        {tables.filter(t => t.Col == 4).map((table) => (
                            <Button key={table.ID} style={{ marginBottom: 5 }} variant={newOrderTableID == table.ID ? 'contained' : 'outlined'} disabled={!table.Active} onClick={() => setNewOrderTableID(table.ID)}>{table.TableName}</Button>
                        ))}
                    </div>
                </div>

                <Typography id="modal-modal-title" variant="h6" component="h2">
                    2. Set order name
                </Typography>
                <div className="flex flex-row justify-between mt-4 mb-4">
                    <div className="flex flex-col">
                        <TextField label="Order name" onChange={(e) => setNewOrderOrderName(e.target.value)} />
                    </div>
                    <div className="flex flex-col">
                        <Button onClick={() => createOrder(newOrderTableID)} disabled={newOrderTableID == -1} size={"large"} variant={"contained"} color={"success"}>Create Order</Button>
                    </div>
                </div>



            </Box>
        </Modal>


    )
}