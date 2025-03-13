'use client';

import {XMLParser} from "fast-xml-parser";
import {parseBasic} from "@/utils/xmlParser";
import React, {useEffect, useMemo, useRef, useState} from "react";
import {DataGrid, getGridDateOperators, GridFilterOperator, GridRenderCellParams, useGridApiRef} from "@mui/x-data-grid";
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
import {DBT_OrderItems, DBT_Meals} from "@prisma/client";
import {useReactToPrint} from "react-to-print";
import {base64DataUri, convertDate} from "@/utils/utils";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TableBarIcon from '@mui/icons-material/TableBar';
import RefreshIcon from '@mui/icons-material/Refresh';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import {useIdleTimer} from 'react-idle-timer/legacy'
import {Snackbar} from "@mui/base";
import {GridFilterInputDate} from "@mui/x-data-grid/components/panel/filterPanel/GridFilterInputDate";
import KitchenView from "@/components/KitchenView";
import {LayoutDataGrid, LayoutFooter} from "@/components/LayoutFooter";
import {DataGridPro} from "@mui/x-data-grid-pro";
import dynamic from "next/dynamic";
import {OrdersList} from "@/components/subcomp/OrdersList";
import {useWaiterStore} from "@/store";

const getSavedColumnWidth = (table: string, field: string) => {
    return localStorage.getItem(`${table}_${field}`) != null ? parseInt(localStorage.getItem(`${table}_${field}`)) : undefined;
}

BigInt.prototype.toJSON = function () {
    return parseInt(this.toString())
}

function WaiterView(props) {
    const [waiterData, setWaiterData] = useState(props.waiterData);


    const orders = useWaiterStore(state => state.orders);
    const setOrders = useWaiterStore(state => state.setOrders);

    const ordersCalculated = useWaiterStore(state => state.ordersCalculated);
    const setOrdersCalculated = useWaiterStore(state => state.setOrdersCalculated);

    const orderItems = useWaiterStore(state => state.orderItems);
    const setOrderItems = useWaiterStore(state => state.setOrderItems);

    const payments = useWaiterStore(state => state.payments);
    const setPayments = useWaiterStore(state => state.setPayments);

    const paymentTaxes = useWaiterStore(state => state.paymentTaxes);
    const setPaymentTaxes = useWaiterStore(state => state.setPaymentTaxes);


    const { meals, variants, customers, paymentMethods, users, taxes } = waiterData;


    const [customerPayments, setCustomerPayments] = useState(props.customerPayments);
    const [customerPaymentPayments, setCustomerPaymentPayments] = useState(props.customerPaymentPayments);


    const [isFullscreen, setIsFullscreen] = useState(false);

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser') ?? 'null'));
    const [username, setUsername] = useState(localStorage.getItem('lastUsername') ?? '')
    const [password, setPassword] = useState(localStorage.getItem('lastPassword') ?? '')


    const [currentMealGroupID, setCurrentMealGroupID] = useState<bigint>(BigInt(localStorage.getItem('mealGroup') ?? '1'));

    const selectedOrderId = useWaiterStore(state => state.selectedOrderId);
    const setSelectedOrderId = useWaiterStore(state => state.setSelectedOrderId);




    const [checkboxes, setCheckboxes] = useState({});
    const [newPaymentRealPayment, setNewPaymentRealPayment] = useState(null);
    const [discountPercent, setDiscountPercent] = useState(0);

    const [openBillModal, setOpenBillModal] = useState(false);


    const [selectedPaymentId, setSelectedPaymentId] = useState<bigint | null>(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [selectedPaymentTaxes, setSelectedPaymentTaxes] = useState([]);
    const [selectedPaymentItems, setSelectedPaymentItems] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);


    const [showOrdersView, setShowOrdersView] = useState(true);
    const [showKitchenView, setShowKitchenView] = useState(false);
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
    const [nextPrintNumber, setNextPrintNumber] = useState(0);
    const handlePrint = async () => {
        //handlePrintHook(null, () => contentToPrint.current)
        window.print('print')

        const updatedPayment = await DB_printPayment(selectedPaymentId);
        if (!updatedPayment) return;
        setPayments(payments.map((payment) => payment.ID == selectedPaymentId ? updatedPayment : payment));
        setSelectedPayment(updatedPayment)

        const nextPn = await DB_getNextPaymentPrintNumber();
        setNextPrintNumber(nextPn)
    }

    const [isRefreshing, setIsRefreshing] = useState(false);
    const refreshData = async () => {
        setIsRefreshing(true);

        try {
            //const { languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp, translatedData } = await getAllData();
            const newWaiterData = await getWaiterData();
            setWaiterData(newWaiterData);


            const {orders, orderItems, payments, paymentTaxes, ordersCalculated} = newWaiterData;

            setOrders(orders)
            setOrderItems(orderItems)
            setPayments(payments)
            setPaymentTaxes(paymentTaxes)
            setOrdersCalculated(ordersCalculated)

            const nextPn = await DB_getNextPaymentPrintNumber();
            setNextPrintNumber(nextPn)
        } catch (e) {

        } finally {
            setIsRefreshing(false);
        }
    }

    // refresh data every 10 seconds
    useEffect(() => {

        // init store from server props
        setOrders(waiterData.orders);
        setOrderItems(waiterData.orderItems);
        setPayments(waiterData.payments);
        setPaymentTaxes(waiterData.paymentTaxes);
        setOrdersCalculated(waiterData.ordersCalculated);


        const interval = setInterval(() => {
            refreshData();
        }, 60_000);

        return () => clearInterval(interval);
    }, []);



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
                        acc[acc.indexOf(found)] = {...found, count: found.count + 1}
                    } else {
                        // if not found, create a new object and push it to the accumulator
                        acc.push({key, count: 1, orderItem});
                    }

                    return acc;
                }, [])
        );
        setSelectedPayment(payment);

        setSelectedPaymentTaxes(paymentTaxes.filter((paymentTax) => paymentTax.ID_Payments == selectedPaymentId))

    }, [selectedPaymentId, paymentTaxes]);


    const isOrderCanceled = () => {
        return orders.find((order) => order.ID == selectedOrderId)?.Canceled;
    }
    const isOrderClosed = () => {
        return orders.find((order) => order.ID == selectedOrderId)?.OrderClosed;
    }
    const isOrderClosedOrCanceled = () => {
        return isOrderCanceled() || isOrderClosed();
    }


    window.addEventListener('storage', function (event) {
        if (event.key === 'mealGroup' && parseInt(event.newValue) != parseInt(currentMealGroupID)) {

            //console.log('mealGroup changed in local storage', event.newValue)
            setTimeout(() => {
                setCurrentMealGroupID(BigInt(event.newValue));
            }, 500);

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
        localStorage.setItem('lastUsername', username);
        localStorage.setItem('lastPassword', password);
    }

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');

    }


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



    const canUserPrepareFood = () => {
        return currentUser.Role == 1
    }

    const canUserDeliverFood = () => {
        return currentUser.Role == 2
    }




    const [selectedPayments, setSelectedPayments] = useState([]);
    const [openNewCumulatedPaymentModal, setOpenNewCumulatedPaymentModal] = useState(false);

    const [savingPayment, setSavingPayment] = useState(false);

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
    const [cumulatedBillsRealPaymentSum, setCumulatedBillsRealPaymentSum] = useState(0);


    const cumulatedBillInitialState = {
        sorting: {
            sortModel: [
                {field: 'TimeOfPay', sort: 'desc'},
            ],
        },
        columns: {}
    };

    const paymentsByCustomer = useMemo(() => payments.filter((payment) => payment.ID_PaymentMethod == 3 && payment.ID_Customer == selectedCustomer).map(payment => {
        // find any customerPayment
        const isPaid = !!customerPaymentPayments.find((cp) => cp.ID_Payments == payment.ID);
        return {
            ...payment,
            isPaid: isPaid,
        }
    }), [selectedCustomer, payments, customerPaymentPayments]);
    const unpaidCustomerPayments = useMemo(() => paymentsByCustomer.filter((payment) => !payment.isPaid), [paymentsByCustomer]);
    const cols = useMemo(() => [
        {field: 'id', headerName: 'ID'},
        {field: 'TimeOfPay', headerName: 'Time', type: 'date', valueFormatter: convertDate, filterOperators: todayFilterOperator},
        {field: 'TotalAmount', headerName: 'Total', type: 'number'},
        {
            field: 'isPaid', headerName: 'Paid', type: 'boolean',
            renderCell: (params) => (
                <div>{params.row.isPaid ? '✅' : '❌'}</div>
            ),
        },
        /*{ field: 'RealPayment', headerName: 'Real Payment' },
        { field: 'Discount', headerName: 'Discount' },
        { field: 'Taxes', headerName: 'Taxes' },
        { field: 'ID_PaymentMethod', headerName: 'Payment Method' },
        { field: 'ID_User', headerName: 'User' },
        { field: 'Printed', headerName: 'Printed' },*/
    ], [paymentsByCustomer]);
    const rows = useMemo(() => paymentsByCustomer.map((payment) => ({
        id: payment.ID,
        TimeOfPay: payment.TimeOfPay,
        TotalAmount: payment.TotalAmount,
        isPaid: payment.isPaid,
    })), [paymentsByCustomer]);

    const renderCumulatedBills = () => {

        return (
            <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>

                <div className="flex items-center me-4 ms-4">

                    <CardHeader title={"Cumulated bills"} className="flex-1"/>


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


                {isRefreshing && <LinearProgress/>}
                <LayoutDataGrid
                    key={'cumulatedbills'}
                    viewName={'cumulatedbills'}
                    isRowSelectable={() => false}
                    getRowHeight={() => 'auto'} getEstimatedRowHeight={() => 72}
                    sx={{
                        '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {py: '8px'},
                        '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {py: '15px'},
                        '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {py: '22px'},
                    }}
                    style={{flex: 1, overflow: 'scroll'}}
                    initialState={cumulatedBillInitialState}
                    onStateChange={(state) => {
                        // using visible rows to calculate sum
                        const visibleRowsLookup = state.filter.filteredRowsLookup
                        if (!visibleRowsLookup) return;

                        const visibleItems = [];
                        for (const [id, value] of Object.entries(visibleRowsLookup)) {
                            if (value === true) {
                                visibleItems.push(parseInt(id));
                            }
                        }

                        const paymentsFiltered = paymentsByCustomer.filter((row) => visibleItems.includes(row.ID));


                        const sum = paymentsFiltered.reduce((acc, payment) => acc + parseFloat(payment.TotalAmount), 0);
                        setCumulatedBillsSum(sum);


                        // get customer cumulated bills topup
                        const realPaymentsSum = customerPayments.filter(cp => cp.ID_Customer == selectedCustomer).reduce((acc, cp) => acc + parseFloat(cp.Payment), 0);
                        setCumulatedBillsRealPaymentSum(realPaymentsSum);


                    }}

                    rows={rows}
                    columns={cols}
                    onRowClick={({id, row}) => {
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
                        Sum of costs : OMR {cumulatedBillsSum.toFixed(3)}
                    </div>
                    <div className="mt-3.5 ms-4 mb-3.5">
                        Sum of real payments : OMR {cumulatedBillsRealPaymentSum.toFixed(3)}
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
                                                      label={`${convertDate(payment.TimeOfPay)} - ${payment.TotalAmount}`}/>
                                ))}
                            </FormGroup>
                        </div>

                        <div id="horizontal-line" style={{borderTop: '1px solid black', width: '100%', margin: '10px 0'}}></div>
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
                            <Box sx={{m: 1, position: 'relative'}}>
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
                    BackdropProps={{style: {backgroundColor: 'rgba(0, 0, 0, 1)'}}}
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
                                            .map(({key, count, orderItem}) => (
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

                                    <div id="horizontal-line" style={{borderTop: '1px solid black', width: '100%', margin: '10px 0'}}></div>
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

                                    <div id="horizontal-line" style={{borderTop: '1px solid black', width: '100%', margin: '10px 0'}}></div>

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
                                    <div id="horizontal-line" style={{borderTop: '1px solid black', width: '100%', margin: '10px 0'}}></div>


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


                        <div className="printContent" style={{zIndex: -2222, position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'white', padding: 40}}>
                            <div key={'title'} className="flex-1 flex items-center mb-4">
                                <Typography variant="h5" component="h5">Payment no. {selectedPaymentId?.toString()}</Typography>
                            </div>


                            <div className="flex-1">

                                {selectedPaymentItems
                                    .map(({key, count, orderItem}) => (
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

                            <div id="horizontal-line" style={{borderTop: '1px solid black', width: '100%', margin: '10px 0'}}></div>
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

                            <div id="horizontal-line" style={{borderTop: '1px solid black', width: '100%', margin: '10px 0'}}></div>

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
                            <div id="horizontal-line" style={{borderTop: '1px solid black', width: '100%', margin: '10px 0'}}></div>


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



    function toggleView(newView: 'orders' | 'cumulated' | 'kitchen') {
        setShowOrdersView(newView == 'orders');
        setShowCumulatedBills(newView == 'cumulated');
        setShowKitchenView(newView == 'kitchen');
    }



    if (!currentUser)
        return (
            <>
                <div style={{width: "6vh", backgroundColor: 'black', paddingLeft: "10px", paddingRight: "10px"}}>
                </div>
                <div style={{flex: 1, backgroundColor: 'white'}}>
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
        <div style={{width: "12vh", backgroundColor: 'white', paddingLeft: "10px", paddingRight: "10px"}}>
            <div className="flex flex-1 flex-col  gap-8">

                <IconButton className="p-4" size="large" aria-label="refresh" loading={isRefreshing} onClick={() => refreshData()}><RefreshIcon/></IconButton>

                <IconButton className="p-4" size="large" onClick={() => setIsFullscreen(!isFullscreen)}><OpenInFullIcon/></IconButton>

                <Button variant={"contained"} className="p-4" disabled={showOrdersView} onClick={() => toggleView('orders')}>Orders</Button>

                <Button variant={"contained"} className="p-4" disabled={showCumulatedBills} onClick={() => toggleView('cumulated')}>Cumulated bills</Button>

                <Button variant={"contained"} className="p-4" disabled={showKitchenView} onClick={() => toggleView('kitchen')}>Kitchen</Button>


                <Button variant={"contained"} color={"error"} className="p-4" onClick={() => logout()}>Logout {currentUser.Name}</Button>

            </div>
        </div>,
        <div key="orderlistdetail" style={{backgroundColor: 'white', width: "calc(100vw - 62.5vh - 12vh"}}>
            <div style={{width: '100%'}}>


                {showKitchenView && <KitchenView {...{canUserPrepareFood, canUserDeliverFood, isOrderClosedOrCanceled, orderItems, setOrderItems, meals, variants, orders, isRefreshing, setShowKitchenView}}/>}
                {showCumulatedBills && renderCumulatedBills()}
                <div style={{display: showOrdersView ? 'block' : 'none' }}><OrdersList {...props} /></div>

            </div>
        </div>,

        isFullscreen && (
            <div key='full' style={{display: 'flex', flex:1, flexDirection: "row", backgroundColor: 'white', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000}}>

                <div style={{width: "12vh", backgroundColor: 'white', paddingLeft: "10px", paddingRight: "10px"}}>
                    <div className="flex flex-1 flex-col  gap-8">

                        <IconButton className="p-4" size="large" aria-label="refresh" loading={isRefreshing} onClick={() => refreshData()}><RefreshIcon/></IconButton>

                        <IconButton className="p-4" size="large" onClick={() => setIsFullscreen(!isFullscreen)}><OpenInFullIcon/></IconButton>

                        <Button variant={"contained"} className="p-4" disabled={showOrdersView} onClick={() => toggleView('orders')}>Orders</Button>

                        <Button variant={"contained"} className="p-4" disabled={showCumulatedBills} onClick={() => toggleView('cumulated')}>Cumulated bills</Button>

                        <Button variant={"contained"} className="p-4" disabled={showKitchenView} onClick={() => toggleView('kitchen')}>Kitchen</Button>


                        <Button variant={"contained"} color={"error"} className="p-4" onClick={() => logout()}>Logout {currentUser.Name}</Button>

                    </div>
                </div>

                <div style={{flex:1}}>
                    {showKitchenView && <KitchenView {...{canUserPrepareFood, canUserDeliverFood, isOrderClosedOrCanceled, orderItems, setOrderItems, meals, variants, orders, isRefreshing, setShowKitchenView}}/>}
                    {showCumulatedBills && renderCumulatedBills()}
                    <div style={{display: showOrdersView ? 'block' : 'none'}}><OrdersList {...props} /></div>
                </div>

            </div>
        )

    ]
}


// export NOSSR
export default dynamic(() => Promise.resolve(WaiterView), {ssr: false})

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
