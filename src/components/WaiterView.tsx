'use client';

import { XMLParser } from "fast-xml-parser";
import { parseBasic } from "@/utils/xmlParser";
import { useEffect, useMemo, useRef, useState } from "react";
import { DataGrid, getGridDateOperators, GridFilterOperator, GridRenderCellParams } from "@mui/x-data-grid";
import { Alert, Box, Button, ButtonGroup, CardHeader, Checkbox, CircularProgress, FormControl, FormControlLabel, FormGroup, IconButton, InputAdornment, InputLabel, LinearProgress, MenuItem, Modal, Select, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
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
    DB_createPayment, DB_deliverOrderItem, DB_editPayment, DB_prepareOrderItem,
    DB_printPayment, DB_removePayment, DB_reopenOrder, DB_unbindAllTaxesFromPayment, DB_unbindOrderItemsFromPayment,
    getAllData,
    getWaiterData,
} from "@/db";
import { DBT_Meals } from "../../generated/prisma-client";
import { DBT_OrderItems } from "@prisma/client";
import { useReactToPrint } from "react-to-print";
import { convertDate } from "@/utils/utils";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TableBarIcon from '@mui/icons-material/TableBar';
import RefreshIcon from '@mui/icons-material/Refresh';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useIdleTimer } from 'react-idle-timer/legacy'
import { Snackbar } from "@mui/base";
import { GridFilterInputDate } from "@mui/x-data-grid/components/panel/filterPanel/GridFilterInputDate";

const getSavedColumnWidth = (table: string, field: string) => {
    return localStorage.getItem(`${table}_${field}`) != null ? parseInt(localStorage.getItem(`${table}_${field}`)) : undefined;
}

BigInt.prototype.toJSON = function () { return parseInt(this.toString()) }
export default function WaiterView(props) {

    const { getRemainingTime } = useIdleTimer({
        onIdle: () => logout(),
        timeout: 10_800_000,
        throttle: 500
    })

    // rewrite all props to useState
    const [layouts, setLayouts] = useState(props.layouts);
    const [meals, setMeals] = useState(props.meals);
    const [mealGroups, setMealGroups] = useState(props.mealGroups);
    const [mealsInGroups, setMealsInGroups] = useState(props.mealsInGroups);
    const [variants, setVariants] = useState(props.variants);

    const [customers, setCustomers] = useState(props.customers);
    const [paymentMethods, setPaymentMethods] = useState(props.paymentMethods);
    const [tables, setTables] = useState(props.tables);
    const [users, setUsers] = useState(props.users);
    const [taxes, setTaxes] = useState(props.taxes);

    const headLayout = layouts.find((layout) => layout.Type === "Head" && layout.Active);
    const parser = new XMLParser({ ignoreAttributes: false });
    let jsonObj = parser.parse(headLayout?.Xml ?? "");

    const [ordersFilterToggle, setOrdersFilterToggle] = useState('active');
    const [orders, setOrders] = useState(props.orders);
    const [orderItems, setOrderItems] = useState(props.orderItems);
    const [payments, setPayments] = useState(props.payments);
    const [paymentTaxes, setPaymentTaxes] = useState(props.paymentTaxes);
    const [customerPayments, setCustomerPayments] = useState(props.customerPayments);
    const [customerPaymentPayments, setCustomerPaymentPayments] = useState(props.customerPaymentPayments);


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
    const [openEditPayModal, setOpenEditPayModal] = useState(false);
    const [checkboxes, setCheckboxes] = useState({});
    const [newPaymentCost, setNewPaymentCost] = useState(0);
    const [newPaymentDiscount, setNewPaymentDiscount] = useState(0);
    const [newPaymentSubtotal, setNewPaymentSubtotal] = useState(0);
    const [newPaymentTaxes, setNewPaymentTaxes] = useState(0);
    const [newPaymentTotal, setNewPaymentTotal] = useState(0);
    const [newPaymentRealPayment, setNewPaymentRealPayment] = useState(null);
    const [discountPercent, setDiscountPercent] = useState(0);

    const [openBillModal, setOpenBillModal] = useState(false);

    const [orderSum, setOrderSum] = useState(0);
    const [orderSumToPay, setOrderSumToPay] = useState(0);


    const [selectedPaymentId, setSelectedPaymentId] = useState<bigint | null>(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [selectedPaymentTaxes, setSelectedPaymentTaxes] = useState([]);
    const [selectedPaymentItems, setSelectedPaymentItems] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);


    const [showCumulatedBills, setShowCumulatedBills] = useState(false);


    // Print bills
    const contentToPrint = useRef(null);
    const handlePrintHook = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: false,
        suppressErrors: false,
    });

    const handlePrint = async () => {
        //handlePrintHook(null, () => contentToPrint.current)
        window.print('print')

        const updatedPayment = await DB_printPayment(selectedPaymentId);
        if (!updatedPayment) return;
        setPayments(payments.map((payment) => payment.ID == selectedPaymentId ? updatedPayment : payment));
    }


    const [isRefreshing, setIsRefreshing] = useState(false);
    const refreshData = async () => {
        setIsRefreshing(true);


        const { languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp, translatedData } = await getAllData();
        const { customers, orders, orderItems, paymentMethods, tables, users, taxes, payments, paymentTaxes, customerPayments, customerPaymentPayments } = await getWaiterData()

        setLayouts(layouts)
        setMeals(meals)
        setMealGroups(mealGroups)
        setMealsInGroups(mealsInGroups)
        setVariants(variants)
        setCustomers(customers)
        setPaymentMethods(paymentMethods)
        setTables(tables)
        setUsers(users)
        setTaxes(taxes)

        setOrders(orders)
        setOrderItems(orderItems)
        setPayments(payments)
        setPaymentTaxes(paymentTaxes)


        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsRefreshing(false);
    }

    useEffect(() => {
        if (!selectedOrderId) refreshData();
    }, [selectedOrderId]);
    useEffect(() => {
        if (!selectedOrderId) return;

        setOrderSum(orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled).reduce((acc, oi) => acc + parseFloat(oi.Price ?? '0'), 0));
        setOrderSumToPay(orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled && !orderItem.ID_Payment).reduce((acc, oi) => acc + parseFloat(oi.Price ?? '0'), 0));


    }, [selectedOrderId, orderItems]);


    useEffect(() => {
        if (!openPayModal) return;


        var newCheckboxes = {};
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
        setNewPaymentRealPayment(null);
        setSelectedCustomer(null);
    }, [openPayModal]);

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
            const newCheckboxes = { ...checkboxes };
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

        let selectedPaymentMethod = null;

        for (const paymentMethod of paymentMethods) {
            if (checkboxes[paymentMethod.PaymentMethod]) {
                selectedPaymentMethod = paymentMethod;
                break;
            }
        }

        console.log('selectedPaymentMethod', selectedPaymentMethod)

        if (!selectedPaymentMethod) return false;

        if (selectedPaymentMethod.ID == 3) {
            return selectedCustomer != null;
        }


        return true;
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
    const orderPayments = useMemo(() => {
        return orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId).map((orderItem) => orderItem.ID_Payment).filter((id, index, self) => self.indexOf(id) === index).map((id) => payments.find((payment) => payment.ID == id)).filter((payment) => payment != null) as any[];
    }, [orderItems, selectedOrderId]);


    // use memo to create variable "hasAllPaymentsRealPayment" which is true if all payments have RealPayment set where orderID is selectedOrderId
    const hasAllPaymentsRealPayment = useMemo(() => {
        return orderPayments.every((payment) => payment.RealPayment > 0 || payment.ID_PaymentMethod == 3);
    }, [orderPayments]);


    useEffect(() => {
        if (!selectedOrderId) return;
        if (Object.keys(checkboxes).length === 0) return;

        console.log(checkboxes)

        const ois = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && checkboxes[orderItem.ID.toString()] && !orderItem.Canceled);
        console.log(ois)
        const ts = taxes.filter((tax) => checkboxes[tax.TaxName]);


        const orderItemsCost = ois.reduce((acc, oi) => acc + parseFloat(oi.Price), 0);

        const totalDiscount = ois.reduce((acc, oi) => acc + (parseFloat(oi.Price) * parseFloat(oi.Discountable ?? 1) * discountPercent), 0);

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

    window.addEventListener('storage', function (event) {
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
        const mealsFilter = mealsInGroup.map((mig) => ({ ...(meals.find((m) => m.ID == mig.ID_Meal)), order: mig.Order })).filter((m) => m != null);
        const mealsOrdered = mealsFilter.sort((a, b) => a.order - b.order) as DBT_Meals[];

        if (isOrderClosedOrCanceled() || !selectedOrderId) return;

        return (
            <div style={{ position: 'relative' }} key='w'>
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


    const [ordersSum, setOrdersSum] = useState(0);
    const orderInitialState = useMemo(() => {
        const defaultState = {
            sorting: {
                sortModel: [
                    { field: 'OrderClosed', sort: 'asc' },
                    { field: 'DateTime', sort: 'desc' },
                ],
            },
            columns: {
                columnVisibilityModel: {
                    id: false,
                    ID_Table: false,
                    Canceled: false,
                    OrderClosed: false,
                }
            }
        };

        const stateJSON = localStorage.getItem("orderState");
        if (!stateJSON) return defaultState;

        try {
            return JSON.parse(stateJSON);
        } catch {
            return defaultState;
        }
    }, [])

    const todayFilterOperator: GridFilterOperator<any, Date, any>[] = [
        {
            label: 'Today',
            value: 'today',
            getApplyFilterFn: (filterItem) => {

                return (value) => {
                    const today = new Date();
                    console.log(value.toDateString(), today.toDateString())
                    return value.toDateString() === today.toDateString();
                };
            },
            getValueAsString: (value: number) => `${value}`,
        },
        ...getGridDateOperators()
    ];
    const renderOrdersList = () => {
        const cols = [
            { field: 'id', headerName: 'ID', width: getSavedColumnWidth('order', 'id') },
            { field: 'ID_Table', headerName: 'ID_Table', width: getSavedColumnWidth('order', 'ID_Table') },
            { field: 'Table', headerName: 'Table', width: getSavedColumnWidth('order', 'Table'), type: 'singleSelect', valueOptions: tables.map((table) => table.TableName) },
            {
                field: 'DateTime',
                headerName: 'Created At',
                width: getSavedColumnWidth('order', 'DateTime'),
                type: 'date',
                valueFormatter: convertDate,
                filterOperators: todayFilterOperator,
            },
            { field: 'Price', headerName: 'Price', width: getSavedColumnWidth('order', 'Price'), type: 'number' },
            { field: 'Status', headerName: 'Status', width: getSavedColumnWidth('order', 'Status'), type: 'singleSelect', valueOptions: ['Active', 'Closed', 'Canceled'] },
        ]

        const rows = orders.map((order) => ({
            id: parseInt(order.ID),
            ID_Table: parseInt(order.ID_Table),
            Table: tables.find((table) => table.ID == order.ID_Table)?.TableName,
            ID_Customer: parseInt(order.ID_Customer),
            DateTime: order.DateTime,
            Canceled: order.Canceled,
            Price: order.Price,
            OrderClosed: order.OrderClosed,
            Status: order.OrderClosed ? 'Closed' : order.Canceled ? 'Canceled' : 'Active',
        })).filter((order) => ordersFilterToggle == 'active' ? !order.OrderClosed && !order.Canceled : ordersFilterToggle == 'closed' ? order.OrderClosed : ordersFilterToggle == 'canceled' ? order.Canceled : true);

        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

                <div className="flex items-center me-4 p-4">
                    {/*<ToggleButtonGroup
                        color="primary"
                        value={ordersFilterToggle}
                        exclusive
                        onChange={(e, newValue) => setOrdersFilterToggle(newValue)}
                        aria-label="Platform"
                    >
                        <ToggleButton value="active">Active</ToggleButton>
                        <ToggleButton value="closed">Closed</ToggleButton>
                        <ToggleButton value="canceled">Canceled</ToggleButton>
                        <ToggleButton value="all">All</ToggleButton>
                    </ToggleButtonGroup>*/}

                    <FormControl>
                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={ordersFilterToggle}
                            label="State"
                            onChange={(e) => setOrdersFilterToggle(e.target.value)}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="closed">Closed</MenuItem>
                            <MenuItem value="canceled">Canceled</MenuItem>
                            <MenuItem value="all">All</MenuItem>
                        </Select>
                    </FormControl>


                    <div className="flex-1"></div>
                    <IconButton className="p-4" size="large" aria-label="refresh" onClick={() => refreshData()}><RefreshIcon/></IconButton>

                    <IconButton className="p-4" size="large" onClick={() => setIsFullscreen(!isFullscreen)}><OpenInFullIcon/></IconButton>
                    <div className="flex-1"></div>
                    <Button variant={"contained"} color={"error"} className="p-4" onClick={() => logout()}>Logout {currentUser.Name}</Button>
                    <div className="flex-1"></div>
                    <Button variant={"contained"} className="p-4" onClick={() => setShowCumulatedBills(true)}>Cumulated bills</Button>
                    <div className="flex-1"></div>
                    <Button variant={"contained"} className="p-4" onClick={() => setOpenTableModal(true)}>New Order</Button>

                </div>
                {isRefreshing && <LinearProgress/>}
                <DataGrid
                    isRowSelectable={() => false}
                    sx={{ overflowX: 'scroll' }}
                    initialState={orderInitialState}
                    onColumnWidthChange={(params) => {
                        localStorage.setItem(`order_${params.colDef.field}`, params.width.toString())
                    }}
                    onStateChange={(state) => {
                        localStorage.setItem("orderState", JSON.stringify(state))

                        // using visible rows to calculate sum
                        const visibleRowsLookup = state.filter.filteredRowsLookup
                        console.log('visibleRowsLookup', visibleRowsLookup)
                        if (!visibleRowsLookup) return;

                        const visibleItems = [];
                        for (const [id, value] of Object.entries(visibleRowsLookup)) {
                            if (value === true) {
                                visibleItems.push(parseInt(id));
                            }
                        }
                        console.log('visibleItems', visibleItems)
                        const ordersFiltered = orders.filter((row) => visibleItems.includes(row.ID));

                        console.log('ordersFiltered', ordersFiltered)

                        const sum = ordersFiltered.reduce((acc, order) => acc + parseFloat(order.Price ?? 0), 0);
                        setOrdersSum(sum);


                    }}
                    rows={rows} columns={cols} onRowClick={({ id, row }) => {
                    setSelectedOrderId(id)
                }}
                    getRowClassName={(params) => params.row.Canceled ? 'bg-red-200' : params.row.OrderClosed ? 'bg-gray-200' : ''}
                />
                <div className="flex items-center me-4">
                    <div className="mt-3.5 ms-4 mb-3.5">
                        Sum : OMR {ordersSum.toFixed(3)}
                    </div>
                </div>
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
                            Create new order for table :
                        </Typography>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                {tables.filter(t => t.Col == 1).map((table) => (
                                    <Button key={table.ID} disabled={!table.Active} onClick={() => createOrder(table.ID)}>{table.TableName}</Button>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                {tables.filter(t => t.Col == 2).map((table) => (
                                    <Button key={table.ID} disabled={!table.Active} onClick={() => createOrder(table.ID)}>{table.TableName}</Button>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                {tables.filter(t => t.Col == 3).map((table) => (
                                    <Button key={table.ID} disabled={!table.Active} onClick={() => createOrder(table.ID)}>{table.TableName}</Button>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                {tables.filter(t => t.Col == 4).map((table) => (
                                    <Button key={table.ID} disabled={!table.Active} onClick={() => createOrder(table.ID)}>{table.TableName}</Button>
                                ))}
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        )
    }


    const openEditPaymentModal = (paymentID, ois = orderItems, pmnts = payments, pmtxs = paymentTaxes) => {
        setSelectedPaymentId(paymentID)

        const editedPayment = pmnts.find((payment) => payment.ID == paymentID);
        const editedPaymentTaxes = pmtxs.filter((paymentTax) => paymentTax.ID_Payments == paymentID);

        let newCheckboxes = {};


        const oisl = ois.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled && orderItem.ID_Payment == paymentID);
        console.log('ois', ois)
        console.log('oisl', oisl)
        console.log('selectedOrderId', selectedOrderId)
        console.log('paymentID', paymentID)

        for (const orderItem of oisl) {
            console.log('orderItem', orderItem)
            console.log('orderItem.ID', orderItem.ID)
            console.log('orderItem.ID.toString()', orderItem.ID.toString())
            newCheckboxes[orderItem.ID.toString()] = true;
            console.log('newCheckboxes', newCheckboxes)
        }

        for (const paymentMethod of paymentMethods) {
            newCheckboxes[paymentMethod.PaymentMethod] = editedPayment.ID_PaymentMethod == paymentMethod.ID;
        }

        for (const tax of taxes) {
            newCheckboxes[tax.TaxName] = editedPaymentTaxes.some((paymentTax) => paymentTax.ID_Tax == tax.ID);
        }


        console.log('openEditPayment', newCheckboxes)
        setCheckboxes(newCheckboxes);
        setDiscountPercent(editedPayment.DiscountPercent);
        setNewPaymentRealPayment(editedPayment.RealPayment);
        setSelectedCustomer(editedPayment.ID_Customer);



        setOpenEditPayModal(true)


    }

    const openBillModalEasy = (paymentID, ois = orderItems, pmnts = payments, pmtxs = paymentTaxes) => {
        setSelectedPaymentId(paymentID)

        const editedPayment = pmnts.find((payment) => payment.ID == paymentID);
        const editedPaymentTaxes = pmtxs.filter((paymentTax) => paymentTax.ID_Payments == paymentID);

        let newCheckboxes = {};


        const oisl = ois.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled && orderItem.ID_Payment == paymentID);
        console.log('ois', ois)
        console.log('oisl', oisl)
        console.log('selectedOrderId', selectedOrderId)
        console.log('paymentID', paymentID)

        for (const orderItem of oisl) {
            console.log('orderItem', orderItem)
            console.log('orderItem.ID', orderItem.ID)
            console.log('orderItem.ID.toString()', orderItem.ID.toString())
            newCheckboxes[orderItem.ID.toString()] = true;
            console.log('newCheckboxes', newCheckboxes)
        }

        for (const paymentMethod of paymentMethods) {
            newCheckboxes[paymentMethod.PaymentMethod] = editedPayment.ID_PaymentMethod == paymentMethod.ID;
        }

        for (const tax of taxes) {
            newCheckboxes[tax.TaxName] = editedPaymentTaxes.some((paymentTax) => paymentTax.ID_Tax == tax.ID);
        }


        console.log('openEditPayment', newCheckboxes)
        setCheckboxes(newCheckboxes);
        setDiscountPercent(editedPayment.DiscountPercent);
        setNewPaymentRealPayment(editedPayment.RealPayment);
        setSelectedCustomer(editedPayment.ID_Customer);



        setOpenBillModal(true)


    }

    const openCumulatedBillModal = (paymentID, ois = orderItems, pmnts = payments, pmtxs = paymentTaxes) => {
        setSelectedPaymentId(paymentID)

        const editedPayment = pmnts.find((payment) => payment.ID == paymentID);
        const editedPaymentTaxes = pmtxs.filter((paymentTax) => paymentTax.ID_Payments == paymentID);

        let newCheckboxes = {};


        const oisl = ois.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled && orderItem.ID_Payment == paymentID);
        console.log('ois', ois)
        console.log('oisl', oisl)
        console.log('selectedOrderId', selectedOrderId)
        console.log('paymentID', paymentID)

        for (const orderItem of oisl) {
            console.log('orderItem', orderItem)
            console.log('orderItem.ID', orderItem.ID)
            console.log('orderItem.ID.toString()', orderItem.ID.toString())
            newCheckboxes[orderItem.ID.toString()] = true;
            console.log('newCheckboxes', newCheckboxes)
        }

        for (const paymentMethod of paymentMethods) {
            newCheckboxes[paymentMethod.PaymentMethod] = editedPayment.ID_PaymentMethod == paymentMethod.ID;
        }

        for (const tax of taxes) {
            newCheckboxes[tax.TaxName] = editedPaymentTaxes.some((paymentTax) => paymentTax.ID_Tax == tax.ID);
        }


        console.log('openEditPayment', newCheckboxes)
        setCheckboxes(newCheckboxes);
        setDiscountPercent(editedPayment.DiscountPercent);
        setNewPaymentRealPayment(editedPayment.RealPayment);
        setSelectedCustomer(editedPayment.ID_Customer);



        setOpenBillModal(true)
    }


    const deleteBill = async () => {
        await DB_unbindOrderItemsFromPayment(selectedPaymentId);
        await DB_unbindAllTaxesFromPayment(selectedPaymentId);
        await DB_removePayment(selectedPaymentId);

        await refreshData();

        setOpenEditPayModal(false);
    }


    const [savingPayment, setSavingPayment] = useState(false);
    const [savedPaymentSuccess, setSavedPaymentSuccess] = useState(false);
    useEffect(() => {
        if (!savedPaymentSuccess) return;
        setTimeout(() => setSavedPaymentSuccess(false), 5000);
    }, [savedPaymentSuccess]);
    const saveEditPayment = async () => {
        setSavingPayment(true);

        try {
            const ois = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && checkboxes[orderItem.ID.toString()] && !orderItem.Canceled);
            const ts = taxes.filter((tax) => checkboxes[tax.TaxName]);
            const paymentMethod = paymentMethods.find((paymentMethod) => checkboxes[paymentMethod.PaymentMethod]);

            console.log('ois', ois, 'ts', ts, 'paymentMethod', paymentMethod)

            if (!paymentMethod) return;

            let parsedRealPayment = null;
            try {
                parsedRealPayment = parseFloat(newPaymentRealPayment);
            } catch {
                alert('Invalid real payment, skipping.');
            }

            // 1. Edit DBT_Payment
            const editedPayment = await DB_editPayment(selectedPaymentId, newPaymentTotal, newPaymentDiscount, discountPercent, paymentMethod.ID, newPaymentCost, newPaymentTaxes, currentUser.ID, parsedRealPayment, selectedCustomer);
            if (!editedPayment) return;

            // Unbind all orderItems from the payment
            await DB_unbindOrderItemsFromPayment(selectedPaymentId);

            // 2. Update DBT_OrderItem with ID_Payment
            const updatedOrderItems: DBT_OrderItems[] = [];
            for (const oi of ois) {
                const updatedOrderItem = await DB_bindOrderItemToPayment(oi.ID, editedPayment.ID);
                updatedOrderItems.push(updatedOrderItem);
            }

            // Unbind all taxes
            await DB_unbindAllTaxesFromPayment(selectedPaymentId);

            // 3. Create multiple DBT_PaymentTax
            const newPts = [];
            for (const t of ts) {
                const newpt = await DB_bindTaxToPayment(t.ID, editedPayment.ID);
                newPts.push(newpt);
            }

            // Revalidate the orderItems and payments
            const newWaiterData = await getWaiterData();
            setOrderItems(newWaiterData.orderItems);
            setPayments(newWaiterData.payments);
            setPaymentTaxes(newWaiterData.paymentTaxes);
            setSavedPaymentSuccess(true);

        } catch (e) {

        } finally {
            setSavingPayment(false);
        }
    }



    const createPaymentNew = async () => {
        console.log('pay')
        const ois = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && checkboxes[orderItem.ID.toString()] && !orderItem.Canceled);
        const ts = taxes.filter((tax) => checkboxes[tax.TaxName]);
        const paymentMethod = paymentMethods.find((paymentMethod) => checkboxes[paymentMethod.PaymentMethod]);

        console.log('ois', ois, 'ts', ts, 'paymentMethod', paymentMethod)

        if (!paymentMethod) return;
        if (!ois.length) return;

        let parsedRealPayment = null;
        try {
            parsedRealPayment = parseFloat(newPaymentRealPayment);
        } catch {
            alert('Invalid real payment, skipping.');
        }


        // 1. Create DBT_Payment
        const newPayment = await DB_createPayment(newPaymentTotal, newPaymentDiscount, discountPercent, paymentMethod.ID, newPaymentCost, newPaymentTaxes, currentUser.ID, parsedRealPayment, selectedCustomer);
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
        const newOrderItems = orderItems.map((orderItem: DBT_OrderItems) => updatedOrderItems.find((oi) => oi.ID == orderItem.ID) ?? orderItem);
        setOrderItems(newOrderItems);
        const newPayments = [...payments, newPayment];
        setPayments(newPayments);
        const newPaymentTaxesArray = [...paymentTaxes, ...newPts];
        setPaymentTaxes(newPaymentTaxesArray);
        //setCheckboxes({});
        //setDiscountPercent(0);
        setOpenPayModal(false);
        setSelectedCustomer(null);

        openEditPaymentModal(newPayment.ID, newOrderItems, newPayments, newPaymentTaxesArray);


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

    const reopenOrder = async () => {
        const { updatedOrder, updatedOrderItems } = await DB_reopenOrder(selectedOrderId);
        if (!updatedOrder) return;
        setOrders(orders.map((order) => order.ID == selectedOrderId ? updatedOrder : order));
        setOrderItems(orderItems.map((orderItem) => updatedOrderItems.find((oi) => oi.ID == orderItem.ID) ?? orderItem));
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
        //setShowOrderNoteModal(false);
    }


    const renderEditPayModal = () => {


        return (
            <Modal
                open={openEditPayModal}
                onClose={() => setOpenEditPayModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styles.boxContainer}>
                    <Typography variant="h6" component="h2" className="pt-2 pb-2">
                        Items to pay
                    </Typography>
                    <div className="flex-1">
                        <FormGroup>
                            {orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled).map((orderItem) => (
                                <FormControlLabel key={orderItem.ID}
                                    control={<Checkbox checked={checkboxes[orderItem.ID.toString()]}
                                        onChange={onCheckboxChange}
                                        name={orderItem.ID.toString()}
                                        disabled={orderItem.ID_Payment && orderItem.ID_Payment != selectedPaymentId}
                                    />}
                                    label={`${meals.find((meal) => meal.ID == orderItem.ID_Meal)?.Meal} ${variants.find((variant) => variant.ID == orderItem.ID_Variant)?.MealVariant ?? ''}   -   OMR ${orderItem.Price}`} />
                            ))}
                        </FormGroup>
                    </div>
                    <Typography variant="h6" component="h2" className="pt-2 pb-2">
                        Taxes
                    </Typography>
                    <div className="flex-1">
                        {taxes.map((tax) => (
                            <FormControlLabel key={tax.ID} control={<Checkbox name={tax.TaxName} checked={checkboxes[tax.TaxName]} onChange={onCheckboxChange} />} label={`${tax.TaxName} - ${tax.Percentage ? tax.Percentage + '%' : tax.Value}`} />
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
                                setDiscountPercent(0)
                            }}>0 %</Button>
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
                            <FormControlLabel key={paymentMethod.ID} control={<Checkbox name={paymentMethod.PaymentMethod} checked={checkboxes[paymentMethod.PaymentMethod]} onChange={onCheckboxChange} />} label={`${paymentMethod.PaymentMethod}`} />
                        ))}
                    </div>

                    <div id="horizontal-line" style={{ borderTop: '1px solid black', width: '100%', margin: '10px 0' }}></div>
                    <div className="flex">
                        <div className="flex-1 flex flex-col">
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
                        </div>
                        <div className="flex-1 flex flex-col">
                            <Typography variant="h4" component="h6" className="pt-2 pb-2">
                                Total: OMR {newPaymentTotal.toFixed(3)}
                            </Typography>

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                placeholder={"Real Amount"}
                                value={newPaymentRealPayment}
                                onChange={(e) => setNewPaymentRealPayment(e.target.value)}

                                InputProps={{
                                    startAdornment: <InputAdornment position="start">OMR</InputAdornment>,
                                }}
                            />

                        </div>
                    </div>
                    <div className="flex justify-items-center mt-4">
                        <Box sx={{ m: 1, position: 'relative' }}>
                            <Button variant={"contained"} color={"error"} className="p-4" onClick={() => {
                                deleteBill(selectedPaymentId);
                            }}>Delete</Button>

                        </Box>
                        <div className="flex-1 ms-4 me-4">
                            {savedPaymentSuccess && (
                                <Alert
                                    severity="success"
                                    sx={{ width: '100%' }}
                                >
                                    Payment saved
                                </Alert>
                            )}
                        </div>
                        <Box sx={{ m: 1, position: 'relative' }}>
                            <Button disabled={!hasPaymentChecked()} variant={"contained"} className="p-4" onClick={() => {
                                setOpenBillModal(true);
                            }}>Show bill</Button>
                        </Box>
                        <div className="w-4"></div>
                        <Box sx={{ m: 1, position: 'relative' }}>
                            <Button
                                className="p-4"
                                variant="contained"
                                color={"success"}
                                disabled={!hasPaymentChecked() || savingPayment}
                                onClick={saveEditPayment}
                            >
                                Save
                            </Button>
                            {savingPayment && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                        color: 'green',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-12px',
                                        marginLeft: '-12px',
                                    }}
                                />
                            )}
                        </Box>
                    </div>

                </Box>
            </Modal>
        )
    }
    const orderDetailInitialState = useMemo(() => {
        const defaultState = {
            sorting: {
                sortModel: [
                    { field: 'Time', sort: 'desc' },
                ],
            },
            columns: {
                columnVisibilityModel: {
                    id: false,
                    ID_Order: false,
                    ID_Meal: false,
                    Variant: false,
                    ID_Variant: false,
                    TimeOfOrder: false,
                    Time_Prepared: false,
                    Time_Delivered: false,
                }
            }
        };

        const stateJSON = localStorage.getItem("orderDetailState");
        if (!stateJSON) return defaultState;

        try {
            return JSON.parse(stateJSON);
        } catch {
            return defaultState;
        }
    }, [])

    const canUserPrepareFood = () => {
        return currentUser.Role == 1
    }

    const canUserDeliverFood = () => {
        return currentUser.Role == 2
    }

    const renderOrderDetail = () => {
        const currentOrderItem = orderItems.find((orderItem) => orderItem.ID == selectedOrderItemId);

        const orderItemCols = [
            {
                field: 'Button_kitchen', headerName: 'Kitchen', width: getSavedColumnWidth('orderdetail', 'Button_kitchen'),
                renderCell: (params) => (
                    <IconButton size="large" aria-label="kitchen" disabled={!!params.row.Time_Prepared || !canUserPrepareFood()} color={'error'} onClick={async (e) => {
                        e.stopPropagation();
                        if (isOrderClosedOrCanceled()) return;

                        const oi = await DB_prepareOrderItem(params.row.id);
                        setOrderItems(orderItems.map((orderItem) => orderItem.ID == oi.ID ? oi : orderItem));
                    }}>
                        <RestaurantIcon />
                    </IconButton>
                ),
                type: 'boolean',
                valueGetter: (value, row) => !!row.Time_Prepared,
            },

            { field: 'id', headerName: 'ID', width: getSavedColumnWidth('orderdetail', 'id') },
            { field: 'ID_Order', headerName: 'ID_Order', width: getSavedColumnWidth('orderdetail', 'ID_Order') },
            { field: 'ID_Meal', headerName: 'ID_Meal', width: getSavedColumnWidth('orderdetail', 'ID_Meal') },
            {
                field: 'Meal', headerName: 'Meal', width: getSavedColumnWidth('orderdetail', 'Meal'),
                renderCell: (params) => (
                    <div>
                        <b>{params.row.Meal}</b>
                        <br />
                        <span>{params.row.Variant}</span>
                    </div>
                ),
            },
            { field: 'ID_Variant', headerName: 'ID_Variant', width: getSavedColumnWidth('orderdetail', 'ID_Variant') },
            { field: 'Variant', headerName: 'Variant', width: getSavedColumnWidth('orderdetail', 'Variant') },


            {
                field: 'Time',
                headerName: 'Time',
                width: getSavedColumnWidth('orderdetail', 'Time'),
                valueGetter: (value, row) => row.TimeOfOrder,
                type: 'date',
                renderCell: (params) => (
                    <div>
                        <span>Ordered: {convertDate(params.row.TimeOfOrder)}</span>
                        <br />
                        <span>Prepared: {convertDate(params.row.Time_Prepared)}</span>
                        <br />
                        <span>Delivered: {convertDate(params.row.Time_Delivered)}</span>
                    </div>
                ),

                valueFormatter: convertDate,

            },
            { field: 'TimeOfOrder', headerName: 'Ordered', width: getSavedColumnWidth('orderdetail', 'TimeOfOrder'), type: 'date', valueFormatter: convertDate },
            { field: 'Time_Prepared', headerName: 'Prep', width: getSavedColumnWidth('orderdetail', 'Time_Prepared'), type: 'date', valueFormatter: convertDate },
            { field: 'Time_Delivered', headerName: 'Deliver', width: getSavedColumnWidth('orderdetail', 'Time_Delivered'), type: 'date', valueFormatter: convertDate },
            { field: 'Note', headerName: 'Note', width: getSavedColumnWidth('orderdetail', 'Note') },

            { field: 'Price', headerName: 'Price', width: getSavedColumnWidth('orderdetail', 'Price'), type: 'number' },
            { field: 'Status', headerName: 'Status', width: getSavedColumnWidth('orderdetail', 'Status'), valueOptions: ['Paid', 'Canceled'], type: 'singleSelect' },

            {
                field: 'Button_waiter', headerName: 'Waiter', width: getSavedColumnWidth('orderdetail', 'Button_waiter'),
                renderCell: (params) => (
                    <IconButton size="large" aria-label="waiter" disabled={!!params.row.Time_Delivered || !canUserDeliverFood()} color={'error'} onClick={async (e) => {
                        e.stopPropagation();
                        if (isOrderClosedOrCanceled()) return;

                        const oi = await DB_deliverOrderItem(params.row.id);
                        setOrderItems(orderItems.map((orderItem) => orderItem.ID == oi.ID ? oi : orderItem));
                    }}>
                        <TableBarIcon />
                    </IconButton>
                ),
                type: 'boolean',
                valueGetter: (value, row) => !!row.Time_Delivered,

            },
        ]

        const rows = orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId).map((orderItem) => ({
            id: parseInt(orderItem.ID),
            ID_Order: parseInt(orderItem.ID_Order),
            ID_Meal: parseInt(orderItem.ID_Meal),
            Meal: meals.find((meal) => meal.ID == orderItem.ID_Meal)?.Meal,
            ID_Variant: parseInt(orderItem.ID_Variant),
            Variant: variants.find((variant) => variant.ID == orderItem.ID_Variant)?.MealVariant,
            TimeOfOrder: orderItem.TimeOfOrder,
            Price: orderItem.Price,
            Canceled: orderItem.Canceled,
            ID_Payment: orderItem.ID_Payment,

            Time_Prepared: orderItem.Time_Prepared,
            Time_Delivered: orderItem.Time_Delivered,

            Note: orderItem.Note,

            Status: orderItem.ID_Payment ? 'Paid' : orderItem.Canceled ? 'Canceled' : '',
        }));

        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

                <div className="flex items-center me-4 ms-4">

                    <Button variant={"contained"} className="p-4" onClick={() => setSelectedOrderId(null)}>Back</Button>
                    <CardHeader title={"Order no. " + selectedOrderId + " - " + tables.find((table) => table.ID == orders.find((order) => order.ID == selectedOrderId)?.ID_Table)?.TableName} className="flex-1" />
                    {isOrderClosed() && <CardHeader title={"ORDER IS CLOSED"} className="flex-1" />}
                    {isOrderCanceled() && <CardHeader title={"ORDER IS CANCELED"} className="flex-1" />}
                    {isOrderClosedOrCanceled() && <Button variant={"contained"} className="p-4" color={"success"} onClick={() => reopenOrder()}>Open Order</Button>}

                    {!isOrderClosedOrCanceled() && <Button variant={"contained"} className="p-4" color={"error"} onClick={() => cancelOrder()}>Cancel Order</Button>}
                </div>
                <DataGrid
                    isRowSelectable={() => false}
                    getRowHeight={() => 'auto'} getEstimatedRowHeight={() => 72}
                    sx={{
                        '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
                        '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
                        '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '22px' },
                    }}
                    style={{ flex: 1, overflow: 'scroll' }}
                    initialState={orderDetailInitialState}
                    onColumnWidthChange={(params) => {
                        localStorage.setItem(`orderdetail_${params.colDef.field}`, params.width.toString())
                    }}
                    onStateChange={(state) => {
                        localStorage.setItem("orderDetailState", JSON.stringify(state));
                    }}
                    rows={rows} columns={orderItemCols} onRowClick={({ id, row }) => {
                        if (isOrderClosedOrCanceled()) return;
                        setSelectedOrderItemId(id);
                        setOpenOrderItemActionsModal(true);
                    }}
                    getRowClassName={(params) => params.row.Status == 'Canceled' ? 'bg-red-200' : params.row.Status == 'Paid' ? 'bg-green-200' : ''}
                />

                <div className="flex items-center me-4 ms-4 mt-4">
                    <div className="">
                        Payments:
                    </div>

                    <ButtonGroup variant="text" aria-label="Basic button group">
                        {!orderPayments.length && <Button>No bills</Button>}
                        {orderPayments.map((payment) => (
                            <Button key={payment?.ID?.toString()} onClick={() => !isOrderClosedOrCanceled() ? openEditPaymentModal(payment?.ID) : openBillModalEasy(payment?.ID)}>Bill no. {payment?.ID?.toString()} {payment?.RealPayment > 0 ? '✅' : '❌'}</Button>
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
                            <Button variant={"contained"} className="p-4" color={"success"} onClick={() => setOpenPayModal(true)}>Create Bill</Button>
                            <div className="p-2"></div>
                            <Button disabled={orderSumToPay > 0 || !hasAllPaymentsRealPayment} variant={"contained"} className="p-4" color={"success"} onClick={() => closeOrder()}>Close Order</Button>

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
                        <div className="flex flex-col mt-2">
                            <Button size={'large'} color={'primary'} variant={'contained'} onClick={() => saveOrderItemNote()} disabled={newOrderItemNote == ''}>Save Note</Button>

                        </div>
                    </Box>
                </Modal>

                <Modal
                    open={openPayModal}
                    onClose={() => setOpenPayModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.boxContainer}>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Items to pay
                        </Typography>
                        <div className="flex-1">
                            <FormGroup>
                                {orderItems.filter((orderItem) => orderItem.ID_Order == selectedOrderId && !orderItem.Canceled).map((orderItem) => (
                                    <FormControlLabel key={orderItem.ID}
                                        control={<Checkbox checked={checkboxes[orderItem.ID.toString()]}
                                            onChange={onCheckboxChange}
                                            name={orderItem.ID.toString()}
                                            disabled={orderItem.ID_Payment}
                                        />}
                                        label={`${meals.find((meal) => meal.ID == orderItem.ID_Meal)?.Meal} ${variants.find((variant) => variant.ID == orderItem.ID_Variant)?.MealVariant ?? ''}   -   OMR ${orderItem.Price}`} />
                                ))}
                            </FormGroup>
                        </div>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Taxes
                        </Typography>
                        <div className="flex-1">
                            {taxes.map((tax) => (
                                <FormControlLabel key={tax.ID} control={<Checkbox name={tax.TaxName} checked={checkboxes[tax.TaxName]} onChange={onCheckboxChange} />} label={`${tax.TaxName} - ${tax.Percentage ? tax.Percentage + '%' : tax.Value}`} />
                            ))}
                        </div>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Customer
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
                                    <MenuItem value={null}>None</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Discount
                        </Typography>
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
                                    setDiscountPercent(0)
                                }}>0 %</Button>
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
                                <Button
                                    disabled={!selectedCustomer}
                                    onClick={() => {
                                        const customer = customers.find((customer) => customer.ID == selectedCustomer);
                                        setDiscountPercent(parseFloat(customer.Discount) / 100)
                                    }}
                                >Customer Discount</Button>
                            </ButtonGroup>
                        </div>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Payment type
                        </Typography>
                        <div className="flex">
                            {paymentMethods.map((paymentMethod) => (
                                <FormControlLabel key={paymentMethod.ID} control={<Checkbox name={paymentMethod.PaymentMethod} checked={checkboxes[paymentMethod.PaymentMethod]} onChange={onCheckboxChange} />} label={`${paymentMethod.PaymentMethod}`} />
                            ))}
                        </div>

                        <div id="horizontal-line" style={{ borderTop: '1px solid black', width: '100%', margin: '10px 0' }}></div>
                        <div className="flex">
                            <div className="flex-1 flex flex-col">
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
                            </div>
                            <div className="flex-1 flex flex-col">
                                <Typography variant="h4" component="h6" className="pt-2 pb-2">
                                    Total: OMR {newPaymentTotal.toFixed(3)}
                                </Typography>

                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder={"Real Amount"}
                                    value={newPaymentRealPayment}
                                    onChange={(e) => setNewPaymentRealPayment(e.target.value)}

                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">OMR</InputAdornment>,
                                    }}
                                />

                            </div>
                        </div>


                        <div className="flex justify-items-center me-4">
                            <div className="flex-1"></div>
                            <Button disabled={!hasPaymentChecked()} variant={"contained"} className="p-4" color={"success"} onClick={createPaymentNew}>Create Bill</Button>
                        </div>
                    </Box>
                </Modal>

                {renderEditPayModal()}


                <Modal
                    open={openBillModal}
                    onClose={() => setOpenBillModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 1)' } }}
                >
                    <>

                        <style>
                            {`@media print {
                                .contentToPrint{ top: 0; left: 0; transform: none; width: 100%; height: 100%; padding: 20px; overflow: visible; display: flex; flex: 1; background-color: white; }
                                .printButton{ display: none; }
                                    
                            }`}
                        </style>
                        <Box className="contentToPrint"
                            sx={{
                                position: 'absolute' as 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 600,
                                bgcolor: 'white',
                                p: 4,
                                overflow: 'scroll',
                                display: 'flex',
                                flexDirection: 'column',
                                maxHeight: '100%',
                            }}>
                            <>
                                <div ref={contentToPrint}>
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

                                    {selectedPayment?.Discount > 0 &&
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
                                </div>

                                <div className="mt-4 min-w-full"></div>
                                <Button variant={"contained"} className="p-4 mt-4 min-w-full printButton" onClick={() => handlePrint()}>Print {selectedPayment?.Printed && " (Already printed)"}</Button>
                            </>
                        </Box>


                        <div className="printContent" style={{ zIndex: -2222, position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'white', padding: 40 }}>
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
                        </div>
                    </>
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
                            <Button variant={"contained"} disabled={newOrderNote == ''} className="p-4 mt-2" onClick={() => saveOrderNote()}>Save Note</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        )
    }



    const [selectedPayments, setSelectedPayments] = useState([]);
    const [openNewCumulatedPaymentModal, setOpenNewCumulatedPaymentModal] = useState(false);



    const createNewCumulatedPayment = async () => {
        const paymentIDsToMarkAsPaid = selectedPayments
        const realAmount = parseFloat(newPaymentRealPayment);

        if (isNaN(realAmount)) {
            alert('Real amount is not a number');
            return;
        }

        if (!selectedCustomer) {
            alert('Please select a customer');
            return;
        }

        try {
            setSavingPayment(true);

            const newCustomerPayment = await DB_createCustomerPayment(selectedCustomer, realAmount, currentUser.ID);

            const newCustomerPaymentsPayments = [];
            for (const paymentID of paymentIDsToMarkAsPaid) {
                const cp = await DB_bindPaymentToCustomerPayment(paymentID, newCustomerPayment.ID);
                newCustomerPaymentsPayments.push(cp);
            }

            setCustomerPayments([...customerPayments, newCustomerPayment]);
            setCustomerPaymentPayments([...customerPaymentPayments, ...newCustomerPaymentsPayments]);

        } catch (e) {

        } finally {
            setSavingPayment(false);
            setOpenNewCumulatedPaymentModal(false);
        }



        console.log('createNewCumulatedPayment', paymentIDsToMarkAsPaid, realAmount);
    }

    const [cumulatedBillsSum, setCumulatedBillsSum] = useState(0);
    const renderCumulatedBills = () => {

        //const selectedCustomer = customers.find((customer) => customer.ID == selectedCustomer);
        const customerPaymentsLocal = payments.filter((payment) => payment.ID_PaymentMethod == 3 && payment.ID_Customer == selectedCustomer).map(payment => {
            // find any customerPayment
            const isPaid = !!customerPaymentPayments.find((cp) => cp.ID_Payments == payment.ID);
            return {
                ...payment,
                isPaid: isPaid,
            }
        })

        const unpaidCustomerPayments = customerPaymentsLocal.filter((payment) => !payment.isPaid);


        const cols = [
            { field: 'id', headerName: 'ID', width: getSavedColumnWidth('cumulatedbills', 'ID') },
            { field: 'TimeOfPay', headerName: 'Time', width: getSavedColumnWidth('cumulatedbills', 'TimeOfPay'), type: 'date', valueFormatter: convertDate, filterOperators: todayFilterOperator },
            { field: 'TotalAmount', headerName: 'Total', width: getSavedColumnWidth('cumulatedbills', 'TotalAmount'), type: 'number' },
            {
                field: 'isPaid', headerName: 'Paid', width: getSavedColumnWidth('cumulatedbills', 'isPaid'), type: 'boolean',
                renderCell: (params) => (
                    <div>{params.row.isPaid ? '✅' : '❌'}</div>
                ),
            },
            /*{ field: 'RealPayment', headerName: 'Real Payment', width: getSavedColumnWidth('cumulatedbills', 'RealPayment') },
            { field: 'Discount', headerName: 'Discount', width: getSavedColumnWidth('cumulatedbills', 'Discount') },
            { field: 'Taxes', headerName: 'Taxes', width: getSavedColumnWidth('cumulatedbills', 'Taxes') },
            { field: 'ID_PaymentMethod', headerName: 'Payment Method', width: getSavedColumnWidth('cumulatedbills', 'ID_PaymentMethod') },
            { field: 'ID_User', headerName: 'User', width: getSavedColumnWidth('cumulatedbills', 'ID_User') },
            { field: 'Printed', headerName: 'Printed', width: getSavedColumnWidth('cumulatedbills', 'Printed') },*/
        ]

        const rows = customerPaymentsLocal.map((payment) => ({
            id: payment.ID,
            TimeOfPay: payment.TimeOfPay,
            TotalAmount: payment.TotalAmount,
            isPaid: payment.isPaid,
        }))




        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

                <div className="flex items-center me-4 ms-4">

                    <Button variant={"contained"} className="p-4" onClick={() => {
                        setShowCumulatedBills(false)
                        setSelectedCustomer(null)
                        setSelectedOrderId(null)
                        setSelectedPayment(null)
                    }}>Back</Button>
                    <CardHeader title={"Cumulated bills"} className="flex-1" />


                    <FormControl className="flex-1">
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

                    <div className="w-4"></div>


                    <Button variant={"contained"} className="p-4" color={"success"} onClick={() => {
                        setOpenNewCumulatedPaymentModal(true)
                        setSelectedPayments([])
                    }}>New Payment</Button>
                </div>


                <DataGrid
                    isRowSelectable={() => false}
                    getRowHeight={() => 'auto'} getEstimatedRowHeight={() => 72}
                    sx={{
                        '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
                        '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
                        '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '22px' },
                    }}
                    style={{ flex: 1, overflow: 'scroll' }}
                    initialState={orderDetailInitialState}
                    onColumnWidthChange={(params) => {
                        localStorage.setItem(`cumulatedbills_${params.colDef.field}`, params.width.toString())
                    }}
                    onStateChange={(state) => {
                        localStorage.setItem("comulatedbillsState", JSON.stringify(state));

                        // using visible rows to calculate sum
                        const visibleRowsLookup = state.filter.filteredRowsLookup
                        console.log('visibleRowsLookup', visibleRowsLookup)
                        if (!visibleRowsLookup) return;

                        const visibleItems = [];
                        for (const [id, value] of Object.entries(visibleRowsLookup)) {
                            if (value === true) {
                                visibleItems.push(parseInt(id));
                            }
                        }
                        console.log('visibleItems', visibleItems)
                        const paymentsFiltered = customerPaymentsLocal.filter((row) => visibleItems.includes(row.ID));

                        console.log('paymentsFiltered', paymentsFiltered)

                        const sum = paymentsFiltered.reduce((acc, payment) => acc + parseFloat(payment.TotalAmount), 0);
                        setCumulatedBillsSum(sum);

                    }}

                    rows={rows}
                    columns={cols}
                    onRowClick={({ id, row }) => {
                        const paymentID = row.id;
                        const paymentAnyOrderItem = orderItems.find((orderItem) => orderItem.ID_Payment == paymentID);
                        const paymentOrderID = paymentAnyOrderItem?.ID_Order;

                        setSelectedOrderId(paymentOrderID);
                        openCumulatedBillModal(paymentID);
                    }}
                    getRowClassName={(params) => params.row.Status == 'Canceled' ? 'bg-red-200' : params.row.Status == 'Paid' ? 'bg-green-200' : ''}
                />

                <div className="flex items-center me-4">
                    <div className="mt-3.5 ms-4 mb-3.5">
                        Sum : OMR {cumulatedBillsSum.toFixed(3)}
                    </div>
                </div>

                <Modal
                    open={openNewCumulatedPaymentModal}
                    onClose={() => setOpenNewCumulatedPaymentModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={styles.boxContainer}>
                        <Typography variant="h6" component="h2" className="pt-2 pb-2">
                            Bills to pay
                        </Typography>
                        <div className="flex-1">
                            <FormGroup>
                                {unpaidCustomerPayments.map((payment) => (
                                    <FormControlLabel key={payment.ID}
                                        control={<Checkbox checked={selectedPayments.includes(payment.ID)}
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedPayments([...selectedPayments, payment.ID])
                                                } else {
                                                    setSelectedPayments(selectedPayments.filter((selectedPayment) => selectedPayment != payment.ID))
                                                }
                                            }}
                                            name={payment.ID.toString()}
                                            disabled={payment.isPaid}
                                        />}
                                        label={`${convertDate(payment.TimeOfPay)} - ${payment.TotalAmount}`} />
                                ))}
                            </FormGroup>
                        </div>

                        <div id="horizontal-line" style={{ borderTop: '1px solid black', width: '100%', margin: '10px 0' }}></div>
                        <div className="flex">
                            <div className="flex-1 flex flex-col">

                            </div>
                            <div className="flex-1 flex flex-col">
                                <Typography variant="h4" component="h6" className="pt-2 pb-2">
                                    Total: OMR {(unpaidCustomerPayments.filter((payment) => selectedPayments.includes(payment.ID)).reduce((acc, payment) => acc + parseFloat(payment.TotalAmount), 0)).toFixed(3)}
                                </Typography>

                                <TextField
                                    id="outlined-basic"
                                    variant="outlined"
                                    placeholder={"Real Amount"}
                                    value={newPaymentRealPayment}
                                    onChange={(e) => setNewPaymentRealPayment(e.target.value)}

                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">OMR</InputAdornment>,
                                    }}
                                />

                            </div>
                        </div>
                        <div className="flex justify-items-center mt-4">
                            <Box sx={{ m: 1, position: 'relative' }}>
                                <Button
                                    className="p-4"
                                    variant="contained"
                                    color={"success"}
                                    disabled={savingPayment}
                                    onClick={createNewCumulatedPayment}
                                >
                                    Save
                                </Button>
                                {savingPayment && (
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                            color: 'green',
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            marginTop: '-12px',
                                            marginLeft: '-12px',
                                        }}
                                    />
                                )}
                            </Box>
                        </div>
                    </Box>
                </Modal>



                <Modal
                    open={openBillModal}
                    onClose={() => setOpenBillModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    BackdropProps={{ style: { backgroundColor: 'rgba(0, 0, 0, 1)' } }}
                >
                    <>

                        <style>
                            {`@media print {
                                .contentToPrint{ top: 0; left: 0; transform: none; width: 100%; height: 100%; padding: 20px; overflow: visible; display: flex; flex: 1; background-color: white; }
                                .printButton{ display: none; }
                                    
                            }`}
                        </style>
                        <Box className="contentToPrint"
                            sx={{
                                position: 'absolute' as 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 600,
                                bgcolor: 'white',
                                p: 4,
                                overflow: 'scroll',
                                display: 'flex',
                                flexDirection: 'column',
                                maxHeight: '100%',
                            }}>
                            <>
                                <div ref={contentToPrint}>
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

                                    {selectedPayment?.Discount > 0 &&
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
                                </div>

                                <div className="mt-4 min-w-full"></div>
                                <Button variant={"contained"} className="p-4 mt-4 min-w-full printButton" onClick={() => handlePrint()}>Print {selectedPayment?.Printed && " (Already printed)"}</Button>
                            </>
                        </Box>


                        <div className="printContent" style={{ zIndex: -2222, position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'white', padding: 40 }}>
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
                        </div>
                    </>
                </Modal>

            </div>
        )
    }




    if (!currentUser)
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




    return [
        <div key="addbar" style={{ width: "6vh", backgroundColor: 'black', paddingLeft: "10px", paddingRight: "10px" }}>
            {renderAddStrip(jsonObj.Head?.Workspace)}

        </div>,
        <div key="orderlistdetail" style={{ backgroundColor: 'white', width: "calc(100vw - 62.5vh - 6vh" }}>
            <div style={{ width: '100%' }}>
                {showCumulatedBills ? renderCumulatedBills() : selectedOrderId ? renderOrderDetail() : renderOrdersList()}
            </div>
        </div>,

        isFullscreen && (
            <div key='full' style={{ flex: 0, backgroundColor: 'white', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000 }}>
                {showCumulatedBills ? renderCumulatedBills() : selectedOrderId ? renderOrderDetail() : renderOrdersList()}
            </div>
        )

    ]
}


const styles = {
    boxContainer: {
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
    }
}
