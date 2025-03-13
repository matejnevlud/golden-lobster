import { create } from 'zustand'
import {DBT_OrderItems, DBT_Orders, DBT_Payments, DBT_PaymentTaxes} from "@prisma/client";
import {getWaiterData} from "@/db";

interface WaiterStore {
    bears: number

    orders: DBT_Orders[]
    setOrders: (newOrders: DBT_Orders[]) => void

    orderItems: DBT_OrderItems[]
    setOrderItems: (newOrderItems: DBT_OrderItems[]) => void

    selectedOrderId: bigint | null
    setSelectedOrderId: (newOrderId: bigint | null) => void

    payments: DBT_Payments[]
    setPayments: (newPayments: DBT_Payments[]) => void

    paymentTaxes: DBT_PaymentTaxes[]
    setPaymentTaxes: (newPaymentTaxes: DBT_PaymentTaxes[]) => void

    increasePopulation: () => void
    removeAllBears: () => void
    updateBears: (newBears: number) => void


    reloadData: () => void
}

export const useWaiterStore = create<WaiterStore>((set) => ({
    bears: 0,

    orders: [] as DBT_Orders[],
    setOrders: (newOrders: DBT_Orders[]) => set({ orders: newOrders }),

    orderItems: [] as DBT_OrderItems[],
    setOrderItems: (newOrderItems: DBT_OrderItems[]) => set({ orderItems: newOrderItems }),

    payments: [] as DBT_Payments[],
    setPayments: (newPayments: DBT_Payments[]) => set({ payments: newPayments }),

    paymentTaxes: [] as DBT_PaymentTaxes[],
    setPaymentTaxes: (newPaymentTaxes: DBT_PaymentTaxes[]) => set({ paymentTaxes: newPaymentTaxes }),

    selectedOrderId: null,
    setSelectedOrderId: (newOrderId: bigint | null) => set({ selectedOrderId: newOrderId }),

    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),

    // async reload data from API
    reloadData : async () => {
        const waiterdata = await getWaiterData();
        const orders = waiterdata.orders;
        const orderItems = waiterdata.orderItems;
        const payments = waiterdata.payments;
        const paymentTaxes = waiterdata.paymentTaxes;


        set({ orders, orderItems, payments, paymentTaxes });
    }
}))