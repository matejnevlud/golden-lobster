'use client';

import AddToOrderStrip from "@/components/AddToOrderStrip";
import { XMLParser } from "fast-xml-parser";
import { parseBasic } from "@/utils/xmlParser";
import Workspace from "@/components/Workspace";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, CardHeader, Checkbox, FormControlLabel, FormGroup, Modal, Typography } from "@mui/material";
import { changeOrderItemVariant, createNewOrder, createNewOrderItem, DB_cancelOrderItem, DB_changeOrderItemVariant } from "@/db";

export default function WaiterView(props) {

    const { languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp } = props;
    const { customers, paymentMethods, tables, users, taxes } = props;
    const headLayout = layouts.find((layout) => layout.Type === "Head" && layout.Active);
    const parser = new XMLParser({ ignoreAttributes : false });
    let jsonObj = parser.parse(headLayout?.Xml ?? "");


    const [orders, setOrders] = useState(props.orders);
    const [orderItems, setOrderItems] = useState(props.orderItems);

    const [currentMealGroupID, setCurrentMealGroupID] = useState<bigint>(BigInt(localStorage.getItem('mealGroup') ?? '1'));
    const [selectedOrderId, setSelectedOrderId] = useState<bigint | null>(null);


    const [openTableModal, setOpenTableModal] = useState(false);

    const [openOrderItemActionsModal, setOpenOrderItemActionsModal] = useState(false);
    const [selectedOrderItemId, setSelectedOrderItemId] = useState<bigint | null>(null);

    const [openPayModal, setOpenPayModal] = useState(false);
    const [checkboxes, setCheckboxes] = useState({ });
    const [orderCost, setOrderCost] = useState(0);
    const [orderTaxes, setOrderTaxes] = useState(0);
    const [orderTotal, setOrderTotal] = useState(0);


    useEffect(() => {
        if (!selectedOrderId) return;

        var newCheckboxes = {};

        const ois = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId);
        for (const orderItem of ois) {
            newCheckboxes[orderItem.ID.toString()] = true;
        }

        for (const paymentMethod of paymentMethods) {
            newCheckboxes[paymentMethod.PaymentMethod] = false;
        }

        for (const tax of taxes) {
            newCheckboxes[tax.TaxName] = tax.ByDefault;
        }

        setCheckboxes(newCheckboxes);

    }, [selectedOrderId, orderItems]);


    const onCheckboxChange = (e) => {
        // set all payment methods to false and then set the clicked one to true
        if (paymentMethods.some((paymentMethod) => paymentMethod.PaymentMethod == e.target.name)) {
            const newCheckboxes = {...checkboxes};
            for (const paymentMethod of paymentMethods) {
                newCheckboxes[paymentMethod.PaymentMethod] = false;
            }
            newCheckboxes[e.target.name] = true;
            setCheckboxes(newCheckboxes);
            return;
        }



        setCheckboxes({ ...checkboxes, [e.target.name]: e.target.checked });
    }

    useEffect(() => {
        if (!selectedOrderId) return;
        if (Object.keys(checkboxes).length === 0) return;

        console.log(checkboxes)

        const ois = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && checkboxes[orderItem.ID.toString()] && !orderItem.Canceled);
        console.log(ois)
        const ts = taxes.filter((tax) => checkboxes[tax.TaxName]);


        const cost = ois.reduce((acc, oi) => acc + parseFloat(oi.Price), 0);
        const tax = ts.reduce((acc, t) => acc + (t.Percentage ? cost * parseFloat(t.Percentage) / 100 : parseFloat(t.Value)), 0);
        const total = cost + tax;

        console.log('cost', cost, 'tax', tax, 'total', total)

        setOrderCost(cost);
        setOrderTaxes(tax);
        setOrderTotal(total);

    }, [checkboxes, orderItems]);

    window.addEventListener('storage', function(event) {
        console.log('storage event', event)
        if (event.key === 'mealGroup') {
            setCurrentMealGroupID(BigInt(event.newValue));
        }

        if (event.key === 'language') {
            window.location.reload();
        }
    });

    const addMealToOrder = async (mealId: bigint) => {
        console.log('addMealToOrder', mealId)
        if (!selectedOrderId) return;
        const newOrderItem = await createNewOrderItem(selectedOrderId, mealId);
        console.log('newOrderItem', newOrderItem)
        setOrderItems([...orderItems, newOrderItem]);
    }
    const renderAddToOrderButton = (meal: any) => {
        // get y position from local storage
        const y = localStorage.getItem(`mg_${currentMealGroupID}_m_${meal.ID}`) ?? null;
        if (y == null) return null;

        const style = {
            position: 'absolute',
            top: y + 'px',
            left: '0px',
            width: '100%',
            height: '2.5vh',
            backgroundColor: 'green',
            color: 'white',
            textAlign: 'center',
            lineHeight: '0.9vh',
            fontWeight: 'bold',
            zIndex: 1000,
            cursor: 'pointer',
            border: '2px solid lime',
        }
        return (
            <button style={style} key={meal.ID} onClick={() => addMealToOrder(meal.ID)}>
                {'>'}
            </button>
        )
    }

    const renderAddStrip = (o: any) => {
        const container = parseBasic(o);


        const mealGroup = mealGroups.find((mg) => (mg.ID == currentMealGroupID));
        const mealsInGroup = mealsInGroups.filter((mig) => (mig.ID_Group == currentMealGroupID)) ?? [];
        const mealsFilter = meals.filter((m) => (mealsInGroup.some((mig) => mig.ID_Meal == m.ID)));



        return (
            <div style={{ position: 'relative'}} key='w'>
                {mealsFilter.map((meal) => {
                    return renderAddToOrderButton(meal)
                })}
            </div>
        );
    }



    const createOrder = async (tableId: number) => {
        console.log('createOrder', tableId)
        const newOrder = await createNewOrder(tableId);
        console.log('newOrder', newOrder)

        setOrders([...orders, newOrder]);
        setOpenTableModal(false)
    }

    const renderOrdersList = () => {
        const cols = [
            { field: 'id', headerName: 'ID', width: 40 },
            { field: 'ID_Table', headerName: 'Table', width: 60 },
            { field: 'Table', headerName: 'Table', flex: 1 },
            { field: 'DateTime', headerName: 'Created At', flex: 1},
            { field: 'Price', headerName: 'Price', flex: 1 },
            { field: 'Canceled', headerName: 'Canceled', renderCell: (params) => params.value ? 'Canceled' : '' },
            { field: 'OrderClosed', headerName: 'Closed', renderCell: (params) => params.value ? 'Closed' : '' },
        ]

        const rows = orders.map((order) =>  ({
            id: parseInt(order.ID),
            ID_Table: parseInt(order.ID_Table),
            Table: tables.find((table) => table.ID == order.ID_Table)?.TableName,
            ID_Customer: parseInt(order.ID_Customer),
            DateTime: order.DateTime?.toLocaleTimeString(),
            Canceled: order.Canceled,
            Price: order.Price,
            OrderClosed: order.OrderClosed,
        }));

        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                <div className="flex justify-items-center me-4">
                    <CardHeader title="Orders" className="flex-1" />
                    <div className="mt-3.5">
                        <Button variant={"contained"} className="p-4" onClick={() => setOpenTableModal(true)}>Create New Order</Button>
                    </div>
                </div>
                <DataGrid
                    style={{flex:1}}
                    initialState={{
                        sorting: {
                            sortModel: [
                                { field: 'OrderClosed', sort: 'asc' },
                                { field: 'DateTime', sort: 'desc' },
                            ],
                        },
                        columns: {
                            columnVisibilityModel: {
                                ID_Table: false,
                            }
                        }
                    }}
                    rows={rows} columns={cols} onRowClick={({ id, row }) => {setSelectedOrderId(id)}}
                    getRowClassName={(params) => params.row.Canceled ? 'bg-red-200' : params.row.OrderClosed ? 'bg-gray-200' : '' }
                />
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
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Create new order for table :
                        </Typography>
                        <div className="flex flex-col">
                            {tables.map((table) => (
                                <Button key={table.ID} disabled={!table.Active} onClick={() => createOrder(table.ID)}>{table.TableName}</Button>
                            ))}
                        </div>
                    </Box>
                </Modal>
            </div>
        )
    }




    const cancelOrderItem = async (orderItemId: number) => {
        const orderItem = orderItems.find((orderItem) => orderItem.ID == orderItemId);
        if (!orderItem) return;
        const canceledOrderItem = await DB_cancelOrderItem(orderItemId);
        setOrderItems(orderItems.map((orderItem) => orderItem.ID == orderItemId ? canceledOrderItem : orderItem));
    }
    const changeOrderItemVariant = async (orderItemId: number, variantId: number) => {
        const orderItem = orderItems.find((orderItem) => orderItem.ID == orderItemId);
        if (!orderItem) return;
        const changedOrderItem = await DB_changeOrderItemVariant(orderItemId, variantId);
        setOrderItems(orderItems.map((orderItem) => orderItem.ID == orderItemId ? changedOrderItem : orderItem));

    }
    const renderOrderDetail = () => {
        const currentOrderItem = orderItems.find((orderItem) => orderItem.ID == selectedOrderItemId);

        const orderItemCols = [
            { field: 'id', headerName: 'ID', width: 40 },
            { field: 'ID_Order', headerName: 'ID_Order', width: 60 },
            { field: 'ID_Meal', headerName: 'ID_Meal', flex: 1 },
            { field: 'Meal', headerName: 'Meal', flex: 1},
            { field: 'ID_Variant', headerName: 'ID_Variant', flex: 1},
            { field: 'Variant', headerName: 'Variant', flex: 1},
            { field: 'TimeOfOrder', headerName: 'TimeOfOrder', flex: 1},
            { field: 'Price', headerName: 'Price', flex: 1 },
            { field: 'Canceled', headerName: 'Canceled', renderCell: (params) => params.value ? 'Canceled' : '' },
        ]

        const rows = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId).map((orderItem) =>  ({
            id: parseInt(orderItem.ID),
            ID_Order: parseInt(orderItem.ID_Order),
            ID_Meal: parseInt(orderItem.ID_Meal),
            Meal: meals.find((meal) => meal.ID == orderItem.ID_Meal)?.Meal,
            ID_Variant: parseInt(orderItem.ID_Variant),
            Variant: variants.find((variant) => variant.ID == orderItem.ID_Variant)?.MealVariant,
            TimeOfOrder: orderItem.TimeOfOrder?.toLocaleTimeString(),
            Canceled: orderItem.Canceled,
            Price: orderItem.Price,
            OrderClosed: orderItem.OrderClosed,
        }));


        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

                <div className="flex justify-items-center me-4">
                    <div className="mt-3.5 ms-4">
                        <Button variant={"contained"} className="p-4" onClick={() => setSelectedOrderId(null)}>Back</Button>
                    </div>
                    <CardHeader title={"Order no. " + selectedOrderId} className="flex-1"/>
                </div>
                <DataGrid
                    style={{ flex: 1 }}
                    initialState={{
                        sorting: {
                            sortModel: [
                                { field: 'OrderClosed', sort: 'asc' },
                                { field: 'DateTime', sort: 'desc' },
                            ],
                        },
                        columns: {
                            columnVisibilityModel: {
                                ID_Meal: false,
                                ID_Variant: false,
                            }
                        }
                    }}
                    rows={rows} columns={orderItemCols} onRowClick={({ id, row }) => {
                    setSelectedOrderItemId(id);
                    setOpenOrderItemActionsModal(true);
                }}
                    getRowClassName={(params) => params.row.Canceled ? 'bg-red-200' : ''}
                />
                <div className="flex justify-items-center me-4">
                    <div className="mt-3.5 ms-4 mb-3.5">

                    </div>
                    <div className="mt-3.5 ms-4 mb-3.5">

                    </div>
                    <div className="mt-3.5 ms-4 mb-3.5">

                    </div>
                    <div className="flex-1"></div>
                    <div className="mt-3.5 ms-4 mb-3.5">
                        <Button variant={"contained"} className="p-4" color={"success"} onClick={() => setOpenPayModal(true)}>Pay Order</Button>
                    </div>
                </div>
                <Modal
                    open={openOrderItemActionsModal}
                    onClose={() => setOpenOrderItemActionsModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Order item {selectedOrderItemId} actions
                        </Typography>
                        <div className="flex flex-col">
                            <Button size={'large'} color={'error'} variant={'outlined'} onClick={() => cancelOrderItem(selectedOrderItemId)}>Remove from order</Button>

                        </div>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Choose variant
                        </Typography>
                        <div className="flex flex-col">
                            {variants.filter((variant) => variant.ID_Meal == orderItems.find((orderItem) => orderItem.ID == selectedOrderItemId)?.ID_Meal).map((variant) => (
                                <Button key={variant.ID} disabled={currentOrderItem.ID_Variant == variant.ID || !variant.Available} onClick={() => changeOrderItemVariant(selectedOrderItemId, variant.ID)}>{variant.MealVariant}</Button>
                            ))}
                        </div>
                    </Box>
                </Modal>

                <Modal
                    open={openPayModal}
                    onClose={() => setOpenPayModal(false)}
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
                        overflow: 'scroll',
                    }}>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Items to pay
                        </Typography>
                        <div className="flex flex-col">
                            <FormGroup>
                            {orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId).map((orderItem) => (
                                <FormControlLabel control={<Checkbox disabled checked={checkboxes[orderItem.ID.toString()]} onChange={onCheckboxChange} name={orderItem.ID.toString()}/>} label={`${meals.find((meal) => meal.ID == orderItem.ID_Meal)?.Meal} ${variants.find((variant) => variant.ID == orderItem.ID_Variant)?.MealVariant ?? ''}`} />
                            ))}
                            </FormGroup>
                        </div>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Taxes
                        </Typography>
                        <div className="flex">
                            {taxes.map((tax) => (
                                <FormControlLabel control={<Checkbox name={tax.TaxName} checked={checkboxes[tax.TaxName]} onChange={onCheckboxChange} />} label={`${tax.TaxName} - ${tax.Percentage ? tax.Percentage + '%' : tax.Value}`} />
                            ))}
                        </div>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Payment type
                        </Typography>
                        <div className="flex">
                            {paymentMethods.map((paymentMethod) => (
                                <FormControlLabel control={<Checkbox name={paymentMethod.PaymentMethod} checked={checkboxes[paymentMethod.PaymentMethod]} onChange={onCheckboxChange} />} label={`${paymentMethod.PaymentMethod}`} />
                            ))}
                        </div>

                        <div id="horizontal-line" style={{borderTop: '1px solid black', width: '100%', margin: '10px 0'}}></div>
                        <Typography variant="h6" component="h6" className="pt-2 pb-2">
                            Cost: OMR {orderCost.toFixed(3)}
                        </Typography>
                        <Typography variant="h6" component="h6" className="pt-2 pb-2">
                            Taxes: OMR {orderTaxes.toFixed(3)}
                        </Typography>
                        <Typography variant="h4" component="h6" className="pt-2 pb-2">
                            Total: OMR {orderTotal.toFixed(3)}
                        </Typography>
                    </Box>
                </Modal>
            </div>
        )
    }

    return (
        <>
            <div style={{ width: "6vh", backgroundColor: 'black', paddingLeft: "10px", paddingRight: "10px" }}>
                {renderAddStrip(jsonObj.Head?.Workspace)}

            </div>
            <div style={{ flex: 1, backgroundColor: 'white' }}>
                {!selectedOrderId && renderOrdersList()}
                {selectedOrderId && renderOrderDetail()}
            </div>
        </>
    )
}
