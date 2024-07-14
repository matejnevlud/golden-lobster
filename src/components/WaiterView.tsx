'use client';

import AddToOrderStrip from "@/components/AddToOrderStrip";
import { XMLParser } from "fast-xml-parser";
import { parseBasic } from "@/utils/xmlParser";
import Workspace from "@/components/Workspace";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, ButtonGroup, CardHeader, Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, InputLabel, MenuItem, Modal, Select, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { changeOrderItemVariant, createNewOrder, createNewOrderItem, DB_bindOrderItemToPayment, DB_bindTaxToPayment, DB_cancelOrder, DB_cancelOrderItem, DB_changeOrderItemNote, DB_changeOrderItemVariant, DB_changeOrderNote, DB_closeOrder, DB_createPayment } from "@/db";
import { DBT_Meals } from "../../generated/prisma-client";
import { DBT_OrderItems } from "@prisma/client";


BigInt.prototype.toJSON = function() { return parseInt(this.toString()) }
export default function WaiterView(props) {

    const { languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp } = props;
    const { customers, paymentMethods, tables, users, taxes } = props;
    const headLayout = layouts.find((layout) => layout.Type === "Head" && layout.Active);
    const parser = new XMLParser({ ignoreAttributes : false });
    let jsonObj = parser.parse(headLayout?.Xml ?? "");

    const [ordersFilterToggle, setOrdersFilterToggle] = useState('active');
    const [orders, setOrders] = useState(props.orders);
    const [orderItems, setOrderItems] = useState(props.orderItems);
    const [payments, setPayments] = useState(props.payments);
    const [paymentTaxes, setPaymentTaxes] = useState(props.paymentTaxes);


    const [isFullscreen, setIsFullscreen] = useState(false);

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser') ?? 'null'));
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [currentMealGroupID, setCurrentMealGroupID] = useState<bigint>(BigInt(localStorage.getItem('mealGroup') ?? '1'));
    const [selectedOrderId, setSelectedOrderId] = useState<bigint | null>(null);


    const [openTableModal, setOpenTableModal] = useState(false);

    const [openOrderItemActionsModal, setOpenOrderItemActionsModal] = useState(false);
    const [selectedOrderItemId, setSelectedOrderItemId] = useState<bigint | null>(null);
    const [newOrderItemNote, setNewOrderItemNote] = useState('');

    const [newOrderNote, setNewOrderNote] = useState('');
    const [showOrderNoteModal, setShowOrderNoteModal] = useState(false);

    const [openPayModal, setOpenPayModal] = useState(false);
    const [checkboxes, setCheckboxes] = useState({ });
    const [newPaymentCost, setNewPaymentCost] = useState(0);
    const [newPaymentDiscount, setNewPaymentDiscount] = useState(0);
    const [newPaymentSubtotal, setNewPaymentSubtotal] = useState(0);
    const [newPaymentTaxes, setNewPaymentTaxes] = useState(0);
    const [newPaymentTotal, setNewPaymentTotal] = useState(0);
    const [discountPercent, setDiscountPercent] = useState(0);


    const [orderSum, setOrderSum] = useState(0);
    const [orderSumToPay, setOrderSumToPay] = useState(0);


    const [selectedPaymentId, setSelectedPaymentId] = useState<bigint | null>(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [selectedPaymentTaxes, setSelectedPaymentTaxes] = useState([]);
    const [selectedPaymentItems, setSelectedPaymentItems] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    useEffect(() => {
        if (!selectedOrderId) return;

        var newCheckboxes = {};



        setOrderSum(orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled).reduce((acc, oi) => acc + parseFloat(oi.Price ?? '0'), 0));
        setOrderSumToPay(orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled && !orderItem.ID_Payment).reduce((acc, oi) => acc + parseFloat(oi.Price ?? '0'), 0));
        const ois = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled && !orderItem.ID_Payment);
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
        setDiscountPercent(0);

    }, [selectedOrderId, orderItems]);


    useEffect(() => {

        if (!selectedPaymentId) return;
        const payment = payments.find((payment) => payment.ID == selectedPaymentId);
        if (!payment) return;


        setSelectedPaymentItems(
            orderItems
            .filter((orderItem) => orderItem.ID_Payment == selectedPaymentId)
            // use reduce to group by meal and variant in array of objects {key, count, orderItem)
            .reduce((acc, orderItem) => {
                console.log('orderItem', orderItem)
                const key = `${orderItem.ID_Meal}_${orderItem.ID_Variant}`;
                // try to find the key in the accumulator
                const found = acc.find((item) => item.key === key);
                if (found) {
                    acc[acc.indexOf(found)] = { ...found, count: found.count + 1 }
                } else {
                    // if not found, create a new object and push it to the accumulator
                    acc.push({ key, count: 1, orderItem });
                }

                return acc;
            }, [])
        );
        setSelectedPayment(payment);

        const taxesIDs = paymentTaxes.filter((paymentTax) => paymentTax.ID_Payments == selectedPaymentId).map((paymentTax) => paymentTax.ID_Tax);
        setSelectedPaymentTaxes(taxes.filter((tax) => taxesIDs.includes(tax.ID)));

    }, [selectedPaymentId]);

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

    const hasPaymentChecked = () => {
        return Object.keys(checkboxes).some((key) => paymentMethods.some((paymentMethod) => paymentMethod.PaymentMethod == key) && checkboxes[key]);
    }


    const isOrderCanceled = () => {
        return orders.find((order) => order.ID == selectedOrderId)?.Canceled;
    }
    const isOrderClosed = () => {
        return orders.find((order) => order.ID == selectedOrderId)?.OrderClosed;
    }
    const isOrderClosedOrCanceled = () => {
        return isOrderCanceled() || isOrderClosed();
    }

    // find all orderItems from the selected order, get distinct ID_Payment from them, and then find all payments with those IDs
    const orderPayments = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId).map((orderItem) => orderItem.ID_Payment).filter((id, index, self) => self.indexOf(id) === index).map((id) => payments.find((payment) => payment.ID == id)).filter((payment) => payment != null) as any[];

    useEffect(() => {
        if (!selectedOrderId) return;
        if (Object.keys(checkboxes).length === 0) return;

        console.log(checkboxes)

        const ois = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && checkboxes[orderItem.ID.toString()] && !orderItem.Canceled);
        console.log(ois)
        const ts = taxes.filter((tax) => checkboxes[tax.TaxName]);


        const orderItemsCost = ois.reduce((acc, oi) => acc + parseFloat(oi.Price), 0);

        const totalDiscount = ois.reduce((acc, oi) => acc + (parseFloat(oi.Price) * parseFloat(oi.Discountable) * discountPercent), 0);

        const orderItemsCostAfterDiscount = orderItemsCost - totalDiscount;


        const tax = ts.reduce((acc, t) => acc + (t.Percentage ? orderItemsCostAfterDiscount * parseFloat(t.Percentage) / 100 : parseFloat(t.Value)), 0);
        const total = orderItemsCostAfterDiscount + tax;

        console.log('orderItemsCost', orderItemsCost, 'totalDiscount', totalDiscount, 'orderItemsCostAfterDiscount', orderItemsCostAfterDiscount, 'tax', tax, 'total', total)

        setNewPaymentCost(orderItemsCost);
        setNewPaymentDiscount(totalDiscount);
        setNewPaymentSubtotal(orderItemsCostAfterDiscount);
        setNewPaymentTaxes(tax);
        setNewPaymentTotal(total);

    }, [checkboxes, orderItems, discountPercent]);

    window.addEventListener('storage', function(event) {
        console.log('storage event', event)
        if (event.key === 'mealGroup') {
            setCurrentMealGroupID(BigInt(event.newValue));
        }

    });



    const login = async () => {
        console.log('login', username, password)
        const user = users.find((user) => user.Name == username && user.Password == password && user.Active);
        if (!user) {
            alert('Invalid username or password');
            return;
        }
        setCurrentUser(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
    }
    const addMealToOrder = async (mealId: bigint) => {
        console.log('addMealToOrder', mealId)
        if (!selectedOrderId) return;
        const newOrderItem = await createNewOrderItem(selectedOrderId, mealId, currentUser.ID);
        console.log('newOrderItem', newOrderItem)
        setOrderItems([...orderItems, newOrderItem]);
    }
    const renderAddToOrderButton = (meal: any, idx: number) => {
        // get y position from local storage
        const y = localStorage.getItem(`mg_${currentMealGroupID}_m_${meal.ID}_idx_${idx}`) ?? null;
        if (y == null || !meal.Meal || meal.Meal?.trim?.() == '') return null;
        console.log('renderAddToOrderButton', meal, idx, y)

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
            <button style={style} key={`mg_${currentMealGroupID}_m_${meal.ID}_idx_${idx}`} onClick={() => addMealToOrder(meal.ID)}>
                {'>'}
            </button>
        )
    }

    const renderAddStrip = (o: any) => {
        const container = parseBasic(o);


        const mealGroup = mealGroups.find((mg) => (mg.ID == currentMealGroupID));
        const mealsInGroup = mealsInGroups.filter((mig) => (mig.ID_Group == currentMealGroupID)) ?? [];
        const mealsFilter = mealsInGroup.map((mig) => ({...(meals.find((m) => m.ID == mig.ID_Meal)), order: mig.Order })).filter((m) => m != null);
        const mealsOrdered = mealsFilter.sort((a, b) => a.order - b.order)  as DBT_Meals[];


        return (
            <div style={{ position: 'relative'}} key='w'>
                {mealsOrdered.map((meal, idx) => {
                    return renderAddToOrderButton(meal, idx)
                })}
            </div>
        );
    }



    const createOrder = async (tableId: number) => {
        console.log('createOrder', tableId)
        const newOrder = await createNewOrder(tableId, currentUser.ID);
        console.log('newOrder', newOrder)

        setOrders([...orders, newOrder]);
        setOpenTableModal(false)

        setSelectedOrderId(newOrder.ID);
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

            { field: 'Status', headerName: 'Status'},
        ]

        const rows = orders.map((order) =>  ({
            id: parseInt(order.ID),
            ID_Table: parseInt(order.ID_Table),
            Table: tables.find((table) => table.ID == order.ID_Table)?.TableName,
            ID_Customer: parseInt(order.ID_Customer),
            DateTime: order.DateTime?.toLocaleString(),
            Canceled: order.Canceled,
            Price: order.Price,
            OrderClosed: order.OrderClosed,
            Status: order.OrderClosed ? 'Closed' : order.Canceled ? 'Canceled' : '',
        })).filter((order) => ordersFilterToggle == 'active' ? !order.OrderClosed && !order.Canceled : ordersFilterToggle == 'closed' ? order.OrderClosed : ordersFilterToggle == 'canceled' ? order.Canceled : true);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

                <div className="flex items-center me-4 p-4">
                    <ToggleButtonGroup
                        color="primary"
                        value={ordersFilterToggle}
                        exclusive
                        onChange={(e, newValue) => setOrdersFilterToggle(newValue)}
                        aria-label="Platform"
                    >
                        <ToggleButton value="active">Active</ToggleButton>
                        {/*<ToggleButton value="closed">Closed</ToggleButton>
                        <ToggleButton value="canceled">Canceled</ToggleButton>*/}
                        <ToggleButton value="all">All</ToggleButton>
                    </ToggleButtonGroup>
                    <div className="flex-1"></div>
                    <Button className="p-4" variant={isFullscreen ? 'contained' : 'outlined'} onClick={() => setIsFullscreen(!isFullscreen)}>Fullscreen</Button>
                    <div className="flex-1"></div>
                    <Button variant={"contained"} color={"error"} className="p-4" onClick={() => logout()}>Logout {currentUser.Name}</Button>
                    <div className="flex-1"></div>
                    <Button variant={"contained"} className="p-4" onClick={() => setOpenTableModal(true)}>New Order</Button>

                </div>
                <DataGrid
                    isRowSelectable={() => false}
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
                                ID_Table: false,
                                Canceled: false,
                                OrderClosed: false,
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



    const pay = async () => {
        console.log('pay')
        const ois = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && checkboxes[orderItem.ID.toString()] && !orderItem.Canceled);
        const ts = taxes.filter((tax) => checkboxes[tax.TaxName]);
        const paymentMethod = paymentMethods.find((paymentMethod) => checkboxes[paymentMethod.PaymentMethod]);

        console.log('ois', ois, 'ts', ts, 'paymentMethod', paymentMethod)

        if (!paymentMethod) return;
        if (!ois.length) return;


        // 1. Create DBT_Payment
        const newPayment = await DB_createPayment(newPaymentTotal, newPaymentDiscount, paymentMethod.ID, newPaymentCost, newPaymentTaxes, currentUser.ID);
        if (!newPayment) return;

        // 2. Update DBT_OrderItem with ID_Payment
        const updatedOrderItems: DBT_OrderItems[] = [];
        for (const oi of ois) {
            const updatedOrderItem = await DB_bindOrderItemToPayment(oi.ID, newPayment.ID);
            updatedOrderItems.push(updatedOrderItem);
        }

        // 3. Create multiple DBT_PaymentTax
        const newPts = [];
        for (const t of ts) {
            const newpt = await DB_bindTaxToPayment(t.ID, newPayment.ID);
            newPts.push(newpt);
        }

        // Revalidate the orderItems and payments
        setOrderItems(orderItems.map((orderItem: DBT_OrderItems) => updatedOrderItems.find((oi) => oi.ID == orderItem.ID) ?? orderItem));
        setPayments([...payments, newPayment]);
        setPaymentTaxes([...paymentTaxes, ...newPts]);
        setCheckboxes({});
        setDiscountPercent(0);
        setOpenPayModal(false);
        setSelectedCustomer(null);


    }

    const closeOrder = async () => {
        const updatedOrder = await DB_closeOrder(selectedOrderId);
        if (!updatedOrder) return;
        setOrders(orders.map((order) => order.ID == selectedOrderId ? updatedOrder : order));
        setSelectedOrderId(null);

    }

    const cancelOrder = async () => {
        const { updatedOrder, updatedOrderItems } = await DB_cancelOrder(selectedOrderId);
        if (!updatedOrder) return;
        setOrders(orders.map((order) => order.ID == selectedOrderId ? updatedOrder : order));
        setOrderItems(orderItems.map((orderItem) => updatedOrderItems.find((oi) => oi.ID == orderItem.ID) ?? orderItem));
        setSelectedOrderId(null);
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
    const saveOrderItemNote = async () => {
        const orderItem = orderItems.find((orderItem) => orderItem.ID == selectedOrderItemId);
        if (!orderItem) return;

        const changedOrderItem = await DB_changeOrderItemNote(selectedOrderItemId, newOrderItemNote);
        setOrderItems(orderItems.map((orderItem) => orderItem.ID == selectedOrderItemId ? changedOrderItem : orderItem));
        setNewOrderItemNote('');
    }

    const saveOrderNote = async () => {
        const order = orders.find((order) => order.ID == selectedOrderId);
        if (!order) return;

        const changedOrder = await DB_changeOrderNote(selectedOrderId, newOrderNote);
        setOrders(orders.map((order) => order.ID == selectedOrderId ? changedOrder : order));
        setNewOrderNote('');
        setShowOrderNoteModal(false);
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
            { field: 'Status', headerName: 'Status'},
        ]

        const rows = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId).map((orderItem) =>  ({
            id: parseInt(orderItem.ID),
            ID_Order: parseInt(orderItem.ID_Order),
            ID_Meal: parseInt(orderItem.ID_Meal),
            Meal: meals.find((meal) => meal.ID == orderItem.ID_Meal)?.Meal,
            ID_Variant: parseInt(orderItem.ID_Variant),
            Variant: variants.find((variant) => variant.ID == orderItem.ID_Variant)?.MealVariant,
            TimeOfOrder: orderItem.TimeOfOrder?.toLocaleString(),
            Price: orderItem.Price,
            Canceled: orderItem.Canceled,
            ID_Payment: orderItem.ID_Payment,


            Status: orderItem.ID_Payment ? 'Paid' : orderItem.Canceled ? 'Canceled' : '',
        }));

        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

                <div className="flex items-center me-4 ms-4">

                    <Button variant={"contained"} className="p-4" onClick={() => setSelectedOrderId(null)}>Back</Button>
                    <CardHeader title={"Order no. " + selectedOrderId + " - " + tables.find((table) => table.ID == orders.find((order) => order.ID == selectedOrderId)?.ID_Table)?.TableName} className="flex-1"/>
                    {isOrderClosed() && <CardHeader title={"ORDER IS CLOSED"} className="flex-1"/>}
                    {isOrderCanceled() && <CardHeader title={"ORDER IS CANCELED"} className="flex-1"/>}
                    {!isOrderClosedOrCanceled() && <Button variant={"contained"} className="p-4" color={"error"} onClick={() => cancelOrder()}>Cancel Order</Button>}
                </div>
                <DataGrid
                    isRowSelectable={() => false}
                    style={{ flex: 1, overflow: 'scroll' }}
                    initialState={{
                        sorting: {
                            sortModel: [
                                { field: 'Canceled', sort: 'asc' },
                                { field: 'DateTime', sort: 'desc' },
                            ],
                        },
                        columns: {
                            columnVisibilityModel: {
                                ID: false,
                                ID_Order: false,
                                ID_Meal: false,
                                ID_Variant: false,
                            }
                        }
                    }}
                    rows={rows} columns={orderItemCols} onRowClick={({ id, row }) => {
                        if (isOrderClosedOrCanceled()) return;
                        setSelectedOrderItemId(id);
                        setOpenOrderItemActionsModal(true);
                }}
                    getRowClassName={(params) => params.row.Status == 'Canceled' ? 'bg-red-200' : params.row.Status == 'Paid' ? 'bg-green-200' : '' }
                />

                <div className="flex items-center me-4 ms-4 mt-4">
                    <div className="">
                        Payments:
                    </div>

                    <ButtonGroup variant="text" aria-label="Basic button group">
                        {!orderPayments.length && <Button>No bills</Button>}
                        {orderPayments.map((payment) => (
                            <Button key={payment?.ID?.toString()} onClick={() => setSelectedPaymentId(payment?.ID)}>Bill no. {payment?.ID?.toString()}</Button>
                        ))}
                    </ButtonGroup>

                </div>
                {!isOrderClosedOrCanceled() &&
                    <div className="flex justify-items-center me-4">
                    <div className="mt-3.5 ms-4 mb-3.5">
                        Sum : OMR {orderSum.toFixed(3)}
                    </div>
                    <div className="mt-3.5 ms-4 mb-3.5">
                        Sum To Pay : OMR {orderSumToPay.toFixed(3)}
                    </div>
                    <div className="mt-3.5 ms-4 mb-3.5">

                    </div>
                    <div className="flex-1"></div>
                    <div className="mt-3.5 ms-4 mb-3.5 flex">

                        <div className="p-2"></div>
                        <Button variant={"contained"} className="p-4" color={"primary"} onClick={() => setShowOrderNoteModal(true)}>Note</Button>
                        <div className="p-2"></div>
                        <Button variant={"contained"} className="p-4" color={"success"} onClick={() => setOpenPayModal(true)}>Pay Order</Button>
                        <div className="p-2"></div>
                        <Button disabled={orderSumToPay > 0} variant={"contained"} className="p-4" color={"success"} onClick={() => closeOrder()}>Close Order</Button>

                    </div>
                </div>
                }

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

                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Note
                        </Typography>
                        <div className="flex">
                            <TextField
                                className={'w-full'}
                                id="outlined-multiline-static"

                                multiline
                                rows={4}
                                value={newOrderItemNote != '' ? newOrderItemNote : currentOrderItem?.Note}
                                onChange={(e) => setNewOrderItemNote(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <Button size={'large'} color={'primary'} variant={'outlined'} onClick={() => saveOrderItemNote()} disabled={newOrderItemNote == ''}>Save Note</Button>

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
                        display: 'flex',
                        flexDirection: 'column',
                        maxHeight: '95vh',
                    }}>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Items to pay
                        </Typography>
                        <div className="flex-1">
                            <FormGroup>
                                {orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled && !orderItem.ID_Payment).map((orderItem) => (
                                    <FormControlLabel key={orderItem.ID}
                                                      control={<Checkbox checked={checkboxes[orderItem.ID.toString()]}
                                                                         onChange={onCheckboxChange}
                                                                         name={orderItem.ID.toString()}/>}
                                                      label={`${meals.find((meal) => meal.ID == orderItem.ID_Meal)?.Meal} ${variants.find((variant) => variant.ID == orderItem.ID_Variant)?.MealVariant ?? ''}   -   OMR ${orderItem.Price}`}/>
                                ))}
                            </FormGroup>
                        </div>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Taxes
                        </Typography>
                        <div className="flex-1">
                            {taxes.map((tax) => (
                                <FormControlLabel key={tax.ID} control={<Checkbox name={tax.TaxName} checked={checkboxes[tax.TaxName]} onChange={onCheckboxChange}/>} label={`${tax.TaxName} - ${tax.Percentage ? tax.Percentage + '%' : tax.Value}`}/>
                            ))}
                        </div>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Discount
                        </Typography>
                        <div className="flex-1 flex items-center mb-2">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Customer</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={selectedCustomer}
                                    label="Customer"
                                    onChange={(e) => setSelectedCustomer(e.target.value)}
                                >
                                    {customers.map((customer) => (
                                        <MenuItem
                                            key={customer.ID}
                                            value={customer.ID}
                                        >{`${customer.Name} ${customer.Surname} - ${customer.Discount}%`}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <Button
                                disabled={!selectedCustomer}
                                onClick={() => {
                                    const customer = customers.find((customer) => customer.ID == selectedCustomer);
                                    setDiscountPercent(parseFloat(customer.Discount) / 100)
                                }}
                            >Apply Customer Discount</Button>
                        </div>
                        <div className="flex-1 flex items-center">
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                value={discountPercent * 100}
                                disabled
                                sx={{ width: '10ch' }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="start">%</InputAdornment>,
                                }}
                            />

                            <ButtonGroup variant="text" aria-label="Basic button group">
                                <Button onClick={() => {
                                    setDiscountPercent(0.05)
                                }}>5 %</Button>
                                <Button onClick={() => {
                                    setDiscountPercent(0.1)
                                }}>10 %</Button>
                                <Button onClick={() => {
                                    setDiscountPercent(0.15)
                                }}>15 %</Button>
                                <Button onClick={() => {
                                    setDiscountPercent(0.2)
                                }}>20 %</Button>
                                <Button onClick={() => {
                                    setDiscountPercent(0.25)
                                }}>25 %</Button>
                                <Button onClick={() => {
                                    setDiscountPercent(0.3)
                                }}>30 %</Button>

                            </ButtonGroup>
                        </div>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Payment type
                        </Typography>
                        <div className="flex">
                            {paymentMethods.map((paymentMethod) => (
                                <FormControlLabel key={paymentMethod.ID} control={<Checkbox name={paymentMethod.PaymentMethod} checked={checkboxes[paymentMethod.PaymentMethod]} onChange={onCheckboxChange}/>} label={`${paymentMethod.PaymentMethod}`}/>
                            ))}
                        </div>

                        <div id="horizontal-line" style={{ borderTop: '1px solid black', width: '100%', margin: '10px 0' }}></div>
                        <Typography variant="body" className="pt-1 pb-1">
                            Cost: OMR {newPaymentCost.toFixed(3)}
                        </Typography>
                        <Typography variant="body" className="pt-1 pb-1">
                            Discount: OMR {newPaymentDiscount.toFixed(3)}
                        </Typography>
                        <Typography variant="body" className="pt-1 pb-1">
                            Subtotal: OMR {newPaymentSubtotal.toFixed(3)}
                        </Typography>
                        <Typography variant="body" className="pt-1 pb-1">
                            Taxes: OMR {newPaymentTaxes.toFixed(3)}
                        </Typography>
                        <div className="flex justify-items-center me-4">
                            <Typography variant="h4" component="h6" className="pt-2 pb-2">
                                Total: OMR {newPaymentTotal.toFixed(3)}
                            </Typography>
                            <div className="flex-1"></div>
                            <Button disabled={!hasPaymentChecked()} variant={"contained"} className="p-4" color={"success"} onClick={pay}>Pay</Button>
                        </div>
                    </Box>
                </Modal>



                <Modal
                    open={selectedPaymentId != null}
                    onClose={() => setSelectedPaymentId(null)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                        overflow: 'scroll',
                        display: 'flex',
                        flexDirection: 'column',
                        maxHeight: '95vh',
                    }}>
                        <div key={'title'} className="flex-1 flex items-center mb-4">
                            <Typography variant="h5" component="h5">Payment no. {selectedPaymentId?.toString()}</Typography>
                        </div>


                        <div className="flex-1">

                            {selectedPaymentItems
                            .map(({ key, count, orderItem }) => (
                                <div key={orderItem.ID} className="flex-1 flex items-center">
                                    <Typography className="w-12">{count}x</Typography>
                                    <Typography>{`${meals.find((meal) => meal.ID == orderItem.ID_Meal)?.Meal} ${variants.find((variant) => variant.ID == orderItem.ID_Variant)?.MealVariant ?? ''}`}</Typography>
                                    <div className="flex-1"></div>
                                    <Typography>OMR {(parseFloat(orderItem.Price?.toString()) * count).toFixed(3)}</Typography>
                                </div>
                            ))}
                        </div>

                        {selectedPayment?.Discount &&
                            <div key={'discount'} className="flex-1 flex items-center">
                                <Typography className="ps-12">Discount</Typography>
                                <div className="flex-1"></div>
                                <Typography>− OMR {parseFloat(selectedPayment?.Discount).toFixed(3)}</Typography>
                            </div>
                        }

                        <div id="horizontal-line" style={{ borderTop: '1px solid black', width: '100%', margin: '10px 0' }}></div>
                        <div className="flex-1">
                            {selectedPaymentTaxes.map((tax) => (
                                <div key={tax.ID} className="flex-1 flex items-center">
                                    <Typography>{tax.TaxName}</Typography>
                                    <div className="flex-1"></div>
                                    <Typography>{tax.Percentage ? tax.Percentage + '%' : tax.Value}</Typography>
                                </div>
                            ))}
                        </div>
                        <div key={selectedPayment?.ID} className="flex-1 flex items-center mt-4">
                            <Typography>Sum of all taxes</Typography>
                            <div className="flex-1"></div>
                            <Typography>OMR {parseFloat(selectedPayment?.Taxes).toFixed(3)}</Typography>
                        </div>

                        <div id="horizontal-line" style={{ borderTop: '1px solid black', width: '100%', margin: '10px 0' }}></div>

                        <div key={'Payment_type'} className="flex-1 flex items-center">
                            <Typography>Payment type</Typography>
                            <div className="flex-1"></div>
                            <Typography>{paymentMethods.find((paymentMethod) => paymentMethod.ID == selectedPayment?.ID_PaymentMethod)?.PaymentMethod}</Typography>
                        </div>

                        <div key={'timeofpay'} className="flex-1 flex items-center">
                            <Typography>Time of pay</Typography>
                            <div className="flex-1"></div>
                            <Typography>{selectedPayment?.TimeOfPay?.toLocaleString()}</Typography>
                        </div>
                        <div key={'created'} className="flex-1 flex items-center">
                            <Typography>Created by</Typography>
                            <div className="flex-1"></div>
                            <Typography>{users.find((user) => user.ID == selectedPayment?.ID_User)?.Name}</Typography>
                        </div>
                        <div id="horizontal-line" style={{ borderTop: '1px solid black', width: '100%', margin: '10px 0' }}></div>


                        <div key={'final'} className="flex-1 flex items-center">
                            <Typography variant="h5" component="h5">Final cost</Typography>
                            <div className="flex-1"></div>
                            <Typography variant="h5" component="h5">OMR {parseFloat(selectedPayment?.TotalAmount).toFixed(3)}</Typography>
                        </div>


                    </Box>
                </Modal>


                <Modal
                    open={showOrderNoteModal}
                    onClose={() => setShowOrderNoteModal(false)}
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
                        <div className="flex flex-col">
                            <TextField
                                id="outlined-multiline-static"
                                label="Order note"
                                className="mb-4"
                                multiline
                                rows={4}
                                value={newOrderNote != '' ? newOrderNote : orders.find((order) => order.ID == selectedOrderId)?.Note}
                                onChange={(e) => setNewOrderNote(e.target.value)}
                            />
                            <div className="p-2"></div>
                            <Button variant={"contained"} className="p-4 mt-2" onClick={() => saveOrderNote()}>Save Note</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        )
    }

    if(!currentUser)
        return (
            <>
                <div style={{ width: "6vh", backgroundColor: 'black', paddingLeft: "10px", paddingRight: "10px" }}>
                </div>
                <div style={{ flex: 1, backgroundColor: 'white' }}>
                    {/*Show login form */}
                    <div className="flex items-center justify-center h-full">
                        <div className="flex flex-col">
                            <TextField
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <div className="p-2"></div>
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="p-2"></div>
                            <Button variant={"contained"} color={"primary"} onClick={login}>Login</Button>
                        </div>

                    </div>

                </div>
            </>
        )

    return (
        <>
            <div style={{ width: "6vh", backgroundColor: 'black', paddingLeft: "10px", paddingRight: "10px" }}>
                {renderAddStrip(jsonObj.Head?.Workspace)}

            </div>
            <div style={{ flex: 1, backgroundColor: 'white'}}>
                {!selectedOrderId && renderOrdersList()}
                {selectedOrderId && renderOrderDetail()}
            </div>

            {isFullscreen && (
                <div key='full' style={{ flex: 1, backgroundColor: 'white', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
                    {!selectedOrderId && renderOrdersList()}
                    {selectedOrderId && renderOrderDetail()}
                </div>
            )}


        </>
    )
}
