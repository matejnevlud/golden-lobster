const getSavedColumnWidth = (table: string, field: string) => {
    // @ts-ignore
    return localStorage.getItem(`${table}_${field}`) != null ? parseInt(localStorage.getItem(`${table}_${field}`)) : undefined;
}

// props typ for view
type CumulatedBillsViewProps = {
    canUserPrepareFood: () => boolean;
    canUserDeliverFood: () => boolean;
    isOrderClosedOrCanceled: () => boolean;

    orderItems: any[];
    setOrderItems: (orderItems: any[]) => void;

    meals: any[];
    variants: any[];
    orders: any[];

    isRefreshing: boolean;
    setShowCumulatedBillsView: (show: boolean) => void;
}

export default function CumulatedBillsView(props: CumulatedBillsViewProps) {





    return null

}


