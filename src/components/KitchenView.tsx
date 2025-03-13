'use client';

import { Button, CardHeader, IconButton, LinearProgress } from "@mui/material";
import { DataGrid, GridFooter, GridFooterContainer } from "@mui/x-data-grid";
import React, { useMemo, useRef, useState } from "react";
import { DB_deliverOrderItem, DB_prepareOrderItem } from "@/db";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { convertDate } from "@/utils/utils";
import TableBarIcon from "@mui/icons-material/TableBar";
import { LayoutDataGrid, LayoutFooter } from "@/components/LayoutFooter";

const getSavedColumnWidth = (table: string, field: string) => {
    // @ts-ignore
    return localStorage.getItem(`${table}_${field}`) != null ? parseInt(localStorage.getItem(`${table}_${field}`)) : undefined;
}

// props typ for view
type KitchenViewProps = {
    canUserPrepareFood: () => boolean;
    canUserDeliverFood: () => boolean;
    isOrderClosedOrCanceled: () => boolean;

    orderItems: any[];
    setOrderItems: (orderItems: any[]) => void;

    meals: any[];
    variants: any[];
    orders: any[];

    isRefreshing: boolean;
    setShowKitchenView: (show: boolean) => void;
}


export default function KitchenView(props: KitchenViewProps) {

    const { canUserPrepareFood, canUserDeliverFood, isOrderClosedOrCanceled } = props;
    const { orderItems, setOrderItems } = props;
    const { meals, variants, orders } = props;
    const { isRefreshing, setShowKitchenView } = props;

    const kitchenViewRef = useRef(null);
    const kitchenViewInitialState = {
        sorting: {
            sortModel: [
                { field: 'ID_Order', sort: 'desc' },
            ],
        },
        columns: {
            columnVisibilityModel: {
                id: false,
                ID_Meal: false,
                OrderName: false,
                ID_Variant: false,
                Time: false,
                Time_Prepared: false,
                Time_Delivered: false,
                Price: false,
                Status: false,
                Button_waiter: false,
                OrderStatus: false
            }
        }
    };



    const kitchenViewCols = useMemo(() => [
        {
            field: 'Button_kitchen', headerName: 'Kitchen',
            renderCell: (params: any) => (
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
            valueGetter: (value: any, row: any) => !!row.Time_Prepared,
        },

        { field: 'id', headerName: 'ID' },
        { field: 'OrderName', headerName: 'Order Name' },
        {
            field: 'ID_Order', headerName: 'Order', type: 'number',
            renderCell: (params: any) => (
                <div>
                    <b>{params.row.id}</b>
                    <br />
                    <span>{params.row.OrderName ?? '-'}</span>
                </div>
            ),
        },
        { field: 'ID_Meal', headerName: 'ID_Meal' },
        {
            field: 'Meal', headerName: 'Meal',
            renderCell: (params: any) => (
                <div>
                    <b>{params.row.Meal}</b>
                    <br />
                    <span>{params.row.Variant}</span>
                </div>
            ),
        },
        { field: 'Is_Kitchen', headerName: 'Is Kitchen', type: 'boolean' },
        { field: 'ID_Variant', headerName: 'ID_Variant' },
        { field: 'Variant', headerName: 'Variant' },


        {
            field: 'Time',
            headerName: 'Time',
            valueGetter: (value: any, row: any) => row.TimeOfOrder,
            type: 'date',
            renderCell: (params: any) => (
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
        { field: 'TimeOfOrder', headerName: 'Time of Order', type: 'date', valueFormatter: convertDate },
        { field: 'Time_Prepared', headerName: 'Prep', type: 'date', valueFormatter: convertDate },
        { field: 'Time_Delivered', headerName: 'Deliver', type: 'date', valueFormatter: convertDate },
        { field: 'Note', headerName: 'Note' },

        { field: 'Price', headerName: 'Price', type: 'number' },
        { field: 'Status', headerName: 'Status', valueOptions: ['Paid', 'Canceled'], type: 'singleSelect' },

        {
            field: 'Button_waiter', headerName: 'Waiter',
            renderCell: (params: any) => (
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
            valueGetter: (value: any, row: any) => !!row.Time_Delivered,

        },

        { field: 'OrderStatus', headerName: 'Order Status', type: 'singleSelect', valueOptions: ['Active', 'Closed', 'Canceled'] },


    ], [orderItems, meals, variants, orders]);

    const rows = useMemo(() => orderItems
    .filter((orderItem) => !orderItem.Time_Prepared)
    .map((orderItem) => ({
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

        Is_Kitchen: meals.find((meal) => meal.ID == orderItem.ID_Meal)?.Kitchen,
        OrderName: orders.find((order) => order.ID == orderItem.ID_Order)?.OrderName,
        OrderStatus: (() => {
            const order = orders.find((order) => order.ID == orderItem.ID_Order);
            if (!order) return 'Active';
            return order.Closed ? 'Closed' : order.Canceled ? 'Canceled' : 'Active';
        })(),
    }))
    , [orderItems, meals, variants, orders]);


    // @ts-ignore
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>

            <div className="flex items-center me-4 ms-4 overflow-hidden">
                <CardHeader title={"Kitchen View"} className="flex-1" />
            </div>

            {isRefreshing && <LinearProgress />}
            <LayoutDataGrid
                viewName={'kitchenView'}
                key={'kitchenView'}
                isRowSelectable={() => false}
                getRowHeight={() => 'auto'}
                getEstimatedRowHeight={() => 72}
                sx={{
                    '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': { py: '8px' },
                    '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': { py: '15px' },
                    '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': { py: '22px' },
                }}
                style={{ flex: 1, overflow: 'hidden' }}
                onColumnWidthChange={(params: any) => {
                    //localStorage.setItem(`kitchenview_${params.colDef.field}`, params.width.toString())
                }}

                initialState={kitchenViewInitialState}
                onStateChange={(state) => {
                    //localStorage.setItem("kitchenViewState", JSON.stringify(state));
                }}
                rows={rows}
                // @ts-ignore
                columns={kitchenViewCols}
                getRowClassName={(params: any) => params.row.Status == 'Canceled' ? 'bg-red-200' : params.row.Status == 'Paid' ? 'bg-green-200' : ''}
            />
        </div>
    )

}
