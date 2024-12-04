'use server';
import {
    DBT_Layouts,
    DBT_MealGroups,
    DBT_Meals,
    DBT_Variants,
    PrismaClient,
    DBT_Languages,
    DBT_MealsInGroups,
    DBT_MenuSetUp,
    DBT_Orders,
    DBT_OrderItems,
    DBT_PaymentMethods,
    DBT_Customer,
    DBT_Tables,
    DBT_Users,
    DBT_Taxes,
    DBT_Payments,
    DBT_PaymentTaxes,
    DBT_CustomerPayments, DBT_CustomerPaymentPayments,
    Prisma
} from "@prisma/client";

import { PrismaClient as PrismaClientVercel } from '../generated/prisma-client-vercel'


const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


function convertUint8ArraysToBase64(obj: any): any {
    if (obj instanceof Uint8Array) {
        return Buffer.from(obj).toString('base64');
    } else if (typeof obj === 'object' && obj !== null) {
        for (let key in obj) {
            obj[key] = convertUint8ArraysToBase64(obj[key]);
        }
    }
    return obj;
}
const stripProto = (obj) => {
    if (Array.isArray(obj)) {
        obj = obj.map(item => stripProto(item)).filter(item => {
            return String(item) !== '__proto__';
        });
    } else if (typeof obj === 'object' && !Array.isArray(obj)) {
        for (const key in obj) {
            if (String(obj[key]) === '__proto__' || key === '__proto__') {
                delete obj[key];
            } else {
                obj[key] = stripProto(obj[key]);
            }
        }
    }
    return obj;
};
function convertDecimalToNumber(obj: any): any {
    return JSON.parse(JSON.stringify(obj, (key, value) => {
        if (value instanceof Prisma.Decimal) {
            return value.toNumber();
        }

        if (typeof value === 'bigint') {
            return parseInt(value.toString());
        }

        // safely stringify Date
        if (value instanceof Date) {
            return value.toISOString();
        }



        return value
    }), (key, value) => {
        // revive Date, check for ISO string using regex
        if (typeof value === 'string' && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/)) {
            return new Date(value);
        }
        return value;
    });
}


export async function getLanguages() {
    var result = await prisma.dBT_Languages.findMany({ where: { Active: true } });
    result = convertUint8ArraysToBase64(result);
    return result;
}

export async function translate(text: string | null, id_language: number) {
    // if DEV, return text
    //if (process.env.NODE_ENV === 'development') return text;
    try {
        const procedure = await prisma.$queryRaw`SELECT dbo.Translate(${text}, ${id_language})`;
        if (!procedure) return text;

        const procedure_string = procedure[0]?.[''];

        const result = await prisma.dBT_Translations.findFirst({ where: { ID_Language: id_language, Text: text } });
        const result_string = result?.Translation;

        //console.log(text, procedure_string, result_string)

        if (procedure_string == "{}") return "";
        if (procedure_string == "{ }") return "\u00A0";
        if (typeof procedure_string === 'string' && procedure_string.includes("{")) return procedure_string;

        if (!result || !result_string) return text;
        return result_string;
    } catch (e) {
        console.error('Error translating', text, 'to', id_language, 'error:', e);
        return text;
    }
}

export async function getLayouts(langID?: number) {
    var result = await prisma.dBT_Layouts.findMany({ where: { Active: true } });
    result = convertUint8ArraysToBase64(result);

    const { cookies } = require('next/headers');
    const language = langID ?? parseInt(cookies().get('language')?.value ?? '1');
    result = await Promise.all(result.map(async (layout: DBT_Layouts) => {
        layout.TextBox = await translate(layout.TextBox, language);
        return layout;
    }));
    return result;
}

export async function getMealGroups(langID?: number) {

    var result = await prisma.dBT_MealGroups.findMany({ where: { Active: true }, orderBy: { Order: 'asc' } });
    result = convertUint8ArraysToBase64(result);

    const { cookies } = require('next/headers');
    const language = langID ?? parseInt(cookies().get('language')?.value ?? '1');
    result = await Promise.all(result.map(async (mg: DBT_MealGroups) => {
        mg.MealGroup = await translate(mg.MealGroup, language);
        return mg;
    }));

    return result;
}

export async function getMeals(langID?: number) {
    var result = await prisma.dBT_Meals.findMany({ where: { Active: true } });
    result = convertUint8ArraysToBase64(result);

    // translate
    const { cookies } = require('next/headers');
    const language = langID ?? parseInt(cookies().get('language')?.value ?? '1');
    result = await Promise.all(result.map(async (meal: DBT_Meals) => {
        meal.Meal = await translate(meal.Meal, language);
        meal.MealDescription = await translate(meal.MealDescription, language);
        meal.PictureDescription = await translate(meal.PictureDescription, language);
        return meal;
    }));

    return result;
}

export async function getMealsInGroups() {
    var result = await prisma.dBT_MealsInGroups.findMany();
    result = convertUint8ArraysToBase64(result);
    return result;
}


export async function getUILayouts(layoutName: string) {
    var result = await prisma.dBT_UILayouts.findMany({ where: { viewName: layoutName } });
    result = convertUint8ArraysToBase64(result);
    return result;
}

export async function createUILayout(viewName: string, name: string, state: string) {
    console.log('Inserting new layout', viewName, name, state);
    const result = await prisma.dBT_UILayouts.create({
        data: {
            viewName,
            name,
            state
        }
    });
    return result;
}

export async function saveUILayout(id: number, state: string) {
    const result = await prisma.dBT_UILayouts.update({
        where: { id },
        data: {
            state
        }
    });
    return result;
}

export async function getVariants(langID?: number) {
    var result = await prisma.dBT_Variants.findMany({ where: { Active: true } });

    result = convertUint8ArraysToBase64(result);

    const { cookies } = require('next/headers');
    const language = langID ?? parseInt(cookies().get('language')?.value ?? '1');
    result = await Promise.all(result.map(async (meal: DBT_Variants) => {
        meal.MealVariant = await translate(meal.MealVariant, language);
        return meal;
    }));

    return result;
}

export async function getMenuSetUp(langID?: number) {
    var result = await prisma.dBT_MenuSetUp.findFirst({ where: { Active: true } });
    result = convertUint8ArraysToBase64(result);


    const { cookies } = require('next/headers');
    const language = langID ?? parseInt(cookies().get('language')?.value ?? '1');
    result.HeaderText = await translate(result?.HeaderText, language);
    result.FooterText = await translate(result?.FooterText, language);

    return result;
}



export type WAITER_DATA = {
    customers: DBT_Customer[]
    orders: DBT_Orders[]
    orderItems: DBT_OrderItems[]
    paymentMethods: DBT_PaymentMethods[]
    tables: DBT_Tables[]
    users: DBT_Users[]
    taxes: DBT_Taxes[]

    payments: DBT_Payments[]
    paymentTaxes: DBT_PaymentTaxes[]

}
export async function getWaiterData(): Promise<any> {
    const customers = await prisma.dBT_Customer.findMany();
    // get last 1000 orders
    let orders = await prisma.dBT_Orders.findMany({ take: 10000, orderBy: { ID: 'desc' } });
    orders = (orders);
    // get orders with payments

    // get last 10000 orders
    let orderItems = await prisma.dBT_OrderItems.findMany({ take: 10000, orderBy: { ID: 'desc' } });
    orderItems = (orderItems);

    const paymentMethods = await prisma.dBT_PaymentMethods.findMany();
    const tables = await prisma.dBT_Tables.findMany();
    const users = await prisma.dBT_Users.findMany();
    const taxes = await prisma.dBT_Taxes.findMany();

    // where not deleted
    let payments = await prisma.dBT_Payments.findMany({ where: { Deleted: false }, take: 10000, orderBy: { ID: 'desc' } });
    payments = (payments);

    const paymentTaxes = await prisma.dBT_PaymentTaxes.findMany({ take: 10000, orderBy: { ID: 'desc' } });

    const customerPayments = await prisma.dBT_CustomerPayments.findMany({ take: 10000, orderBy: { ID: 'desc' } });
    const customerPaymentPayments = await prisma.dBT_CustomerPaymentPayments.findMany({ take: 10000, orderBy: { ID: 'desc' } });

    // get all orders with payments using raw query
    const ordersCalculated = await prisma.$queryRaw`
    SELECT o.ID AS OrderID,
    SUM(p.ItemsCost) - SUM(p.Discount) AS ItemsCost,
    SUM(p.Taxes) AS Taxes,
    SUM(p.ItemsCost) - SUM(p.Discount) + SUM(p.Taxes) AS Cost,
    SUM(p.RealPayment) AS RealPayment
    FROM DBT_Orders AS o
    LEFT JOIN (
        SELECT DISTINCT ID_Order, ID_Payment
        FROM DBT_OrderItems
        WHERE Canceled != 1
    ) AS oi ON oi.ID_Order = o.ID
    LEFT JOIN DBT_Payments AS p ON p.ID = oi.ID_Payment AND p.Deleted != 1
    GROUP BY o.ID;
    `;




    return convertDecimalToNumber({ customers, orders, orderItems, paymentMethods, tables, users, taxes, payments, paymentTaxes, customerPayments, customerPaymentPayments, ordersCalculated });
}




export type ALL_DATA = {
    languages: DBT_Languages[]
    layouts: DBT_Layouts[]
    meals: DBT_Meals[]
    mealGroups: DBT_MealGroups[]
    mealsInGroups: DBT_MealsInGroups[]
    variants: DBT_Variants[]
    menuSetUp: DBT_MenuSetUp

    translatedData: {
        [key: number]: {
            mealGroups: DBT_MealGroups[]
            meals: DBT_Meals[]
            variants: DBT_Variants[]
            menuSetUp: DBT_MenuSetUp
            layouts: DBT_Layouts[]
        }
    }
}
export async function getAllData(): Promise<any> {
    const languages = await getLanguages();
    const layouts = await getLayouts();
    const mealGroups = await getMealGroups();
    const meals = await getMeals();
    const mealsInGroups = await getMealsInGroups();
    const variants = await getVariants();
    const menuSetUp = await getMenuSetUp();


    // download all data in different languages
    const translatedData = {};
    for (const language of languages) {
        const langID = language.ID as unknown as number;
        translatedData[langID] = {
            mealGroups: await getMealGroups(langID),
            meals: await getMeals(langID),
            variants: await getVariants(langID),
            menuSetUp: await getMenuSetUp(langID),
            layouts: await getLayouts(langID),
        }
    }

    return convertDecimalToNumber({ languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp, translatedData });
}





export async function createNewOrder(table: number, user_id: bigint | number, order_name?: string): Promise<DBT_Orders> {
    const order = await prisma.dBT_Orders.create({
        data: {
            ID_Table: table,
            ID_User: user_id,
            OrderName: order_name,
            //ID_OrderStatus: 1,
            //OrderDate: new Date(),
        }
    });
    return order;
}

export async function createNewOrderItem(order_id: number, meal_id: number, user_id: bigint | number): Promise<DBT_OrderItems> {
    const meal = await prisma.dBT_Meals.findFirst({ where: { ID: meal_id } });
    // check if meal has any variants, if so, take the first one
    const firstVariant = await prisma.dBT_Variants.findFirst({ where: { ID_Meal: meal_id, Available: true } });

    const orderItem = await prisma.dBT_OrderItems.create({
        data: {
            ID_Order: order_id.toString(),
            ID_Meal: meal_id,
            ID_Variant: firstVariant?.ID,
            Price: meal?.Price,
            Discountable: meal?.Dicountable,
            ID_User: user_id,
        }
    });
    return orderItem;
}

export async function DB_changeOrderItemVariant(order_item_id: number, variant_id: number): Promise<DBT_OrderItems> {
    const orderItem = await prisma.dBT_OrderItems.update({
        where: { ID: order_item_id },
        data: {
            ID_Variant: variant_id,
        }
    });
    return orderItem;
}


export async function DB_changeOrderNote(order_id: number, note: string): Promise<DBT_Orders> {
    const order = await prisma.dBT_Orders.update({
        where: { ID: order_id },
        data: {
            Note: note,
        }
    });
    return order;
}

export async function DB_changeOrderItemNote(order_item_id: number, note: string): Promise<DBT_OrderItems> {
    const orderItem = await prisma.dBT_OrderItems.update({
        where: { ID: order_item_id },
        data: {
            Note: note,
        }
    });
    return orderItem;
}


export async function DB_prepareOrderItem(order_item_id: number): Promise<DBT_OrderItems> {
    const orderItem = await prisma.dBT_OrderItems.update({
        where: { ID: order_item_id },
        data: {
            Time_Prepared: new Date(),
        }
    });
    return orderItem;
}

export async function DB_deliverOrderItem(order_item_id: number): Promise<DBT_OrderItems> {
    const orderItem = await prisma.dBT_OrderItems.update({
        where: { ID: order_item_id },
        data: {
            Time_Delivered: new Date(),
        }
    });
    return orderItem;
}


export async function DB_cancelOrderItem(order_item_id: number | bigint): Promise<DBT_OrderItems> {
    const orderItem = await prisma.dBT_OrderItems.update({
        where: { ID: order_item_id },
        data: {
            Canceled: true,
        }
    });
    return orderItem;
}


export async function DB_createPayment(total_amount: number, discount: number, discountPercent: number, payment_method_id: number, items_cost: number, taxes: number, user_id: bigint | number, realPayment: number | null, customer: number | null): Promise<DBT_Payments> {
    const payment = await prisma.dBT_Payments.create({
        data: {
            ID_PaymentMethod: payment_method_id,
            Discount: discount,
            DiscountPercent: discountPercent,
            ItemsCost: items_cost,
            Taxes: taxes,
            TotalAmount: total_amount,
            ID_User: user_id,
            RealPayment: realPayment,
            ID_Customer: customer
        }
    });

    return payment;
}

export async function DB_removePayment(payment_id: number) {
    // set deleted to true
    const payment = await prisma.dBT_Payments.update({
        where: { ID: payment_id },
        data: {
            Deleted: true,
        }
    });
    return payment;
}


export async function DB_editPayment(payment_id: number, total_amount: number, discount: number, discountPercent: number, payment_method_id: number, items_cost: number, taxes: number, user_id: bigint | number, realPayment: number | null, customer: number | null): Promise<DBT_Payments> {
    const payment = await prisma.dBT_Payments.update({
        where: { ID: payment_id },
        data: {
            ID_PaymentMethod: payment_method_id,
            Discount: discount,
            DiscountPercent: discountPercent,
            ItemsCost: items_cost,
            Taxes: taxes,
            TotalAmount: total_amount,
            ID_User: user_id,
            RealPayment: realPayment,
            ID_Customer: customer
        }
    });

    return payment;
}

export async function DB_bindOrderItemToPayment(order_item_id: number | bigint, payment_id: number | bigint | null): Promise<DBT_OrderItems> {

    // Check if order item is already bound to a payment
    const orderItemCheck = await prisma.dBT_OrderItems.findFirst({ where: { ID: order_item_id } });
    if (orderItemCheck?.ID_Payment) {
        throw new Error('Order item is already bound to a payment');
    }



    const updatedOrderItem = await prisma.dBT_OrderItems.update({
        where: { ID: order_item_id },
        data: {
            ID_Payment: payment_id,
        }
    });
    return updatedOrderItem;
}

export async function DB_unbindOrderItemsFromPayment(payment_id: number | bigint): Promise<DBT_OrderItems> {
    const orderItems = await prisma.dBT_OrderItems.updateMany({ where: { ID_Payment: payment_id }, data: { ID_Payment: null } });
    return;

}

export async function DB_bindTaxToPayment(tax: DBT_Taxes, payment: DBT_Payments): Promise<DBT_PaymentTaxes> {

    const itemsCostMinusDiscount = convertDecimalToNumber(payment.ItemsCost ?? 0) - convertDecimalToNumber(payment.Discount);
    const calculatedValue = (tax.Percentage ? itemsCostMinusDiscount * convertDecimalToNumber(tax.Percentage) / 100 : convertDecimalToNumber(tax.Value))

    const paymentTax = await prisma.dBT_PaymentTaxes.create({
        data: {
            ID_Payments: payment.ID,
            ID_Tax: tax.ID,
            TaxName: tax.TaxName,
            TaxPercentage: tax.Percentage,
            TaxValue: tax.Value,
            CalculatedValue: calculatedValue,
        }
    });
    return paymentTax;
}

export async function DB_unbindAllTaxesFromPayment(payment_id: number | bigint): Promise<DBT_PaymentTaxes[]> {
    const paymentTaxes = await prisma.dBT_PaymentTaxes.deleteMany({ where: { ID_Payments: payment_id } });

    const newPaymentTaxes = await prisma.dBT_PaymentTaxes.findMany({ take: 10000, orderBy: { ID: 'desc' } });

    return newPaymentTaxes;

}


export async function DB_printPayment(payment_id: number | bigint): Promise<DBT_Payments> {
    const payment = await prisma.dBT_Payments.update({
        where: { ID: payment_id },
        data: {
            Printed: true,
            PrintedNo: await DB_getNextPaymentPrintNumber()
        }
    });
    return payment;

}

export async function DB_closeOrder(order_id: number | bigint): Promise<DBT_Orders> {

    // select all payment ids from all orderitems where order_id = order_id
    const orderItems = await prisma.dBT_OrderItems.findMany({ where: { ID_Order: String(order_id) } });

    // get only unique payment ids
    const paymentIDs = orderItems.map(orderItem => orderItem.ID_Payment).filter((value, index, self) => self.indexOf(value) === index);

    let paymentAmounts: number = 0;
    for (const paymentID of paymentIDs) {
        if (!paymentID) continue;
        // where id = paymentID and not deleted or null deleted
        const payment = await prisma.dBT_Payments.findFirst({ where: { ID: paymentID, Deleted: false } });
        paymentAmounts += payment?.TotalAmount?.toNumber() ?? 0;
    }


    const order = await prisma.dBT_Orders.update({
        where: { ID: order_id },
        data: {
            OrderClosed: true,
            Price: paymentAmounts
        }
    });
    return order;
}

export async function DB_cancelOrder(order_id: number | bigint): Promise<{ updatedOrder: DBT_Orders, updatedOrderItems: DBT_OrderItems[] }> {
    const updatedOrder = await prisma.dBT_Orders.update({
        where: { ID: order_id },
        data: {
            Canceled: true,
        }
    });

    // cancel all order items
    const orderItems = await prisma.dBT_OrderItems.findMany({ where: { ID_Order: String(order_id) } });
    const updatedOrderItems = [];
    for (const orderItem of orderItems) {
        const updatedOI = await DB_cancelOrderItem(orderItem.ID);
        updatedOrderItems.push(updatedOI);
    }

    return { updatedOrder, updatedOrderItems };
}


export async function DB_reopenOrder(order_id: number | bigint): Promise<{ updatedOrder: DBT_Orders, updatedOrderItems: DBT_OrderItems[] }> {
    const updatedOrder = await prisma.dBT_Orders.update({
        where: { ID: order_id },
        data: {
            Canceled: false,
            OrderClosed: false,
        }
    });

    // uncancel all order items
    const orderItems = await prisma.dBT_OrderItems.findMany({ where: { ID_Order: String(order_id) } });
    const updatedOrderItems = [];
    for (const orderItem of orderItems) {
        const updatedOI = await prisma.dBT_OrderItems.update({
            where: { ID: orderItem.ID },
            data: {
                Canceled: false,
            }
        });
        updatedOrderItems.push(updatedOI);
    }

    return { updatedOrder, updatedOrderItems };
}

export async function DB_createCustomerPayment(customer_id: number | bigint, realAmount: number | bigint, id_user: number | bigint): Promise<DBT_CustomerPayments> {
    const customerPayment = await prisma.dBT_CustomerPayments.create({
        data: {
            ID_Customer: customer_id,
            Payment: realAmount,
            Date: new Date(),
            ID_User: id_user
        }
    });
    return customerPayment;
}

export async function DB_bindPaymentToCustomerPayment(payment_id: number | bigint, customer_payment_id: number | bigint): Promise<DBT_CustomerPaymentPayments> {
    const customerPaymentPayment = await prisma.dBT_CustomerPaymentPayments.create({
        data: {
            ID_CutomerPayment: customer_payment_id,
            ID_Payments: payment_id
        }
    });
    return customerPaymentPayment;
}


export async function DB_getNextPaymentPrintNumber(): Promise<number> {
    // get max PrintNo from DBT_Payments
    const maxPrintNo = await prisma.dBT_Payments.aggregate({
        _max: {
            PrintedNo: true
        }
    });
    return maxPrintNo._max.PrintedNo ? parseInt(maxPrintNo._max.PrintedNo.toString()) + 1 : 1;
}



export async function uploadToNeon () {
    const prisma = new PrismaClient();
    const prismaVercel = new PrismaClientVercel();

    console.error('Connected to prisma and prismaVercel')


    // get all data from prisma
    const languages = await prisma.dBT_Languages.findMany();
    const layouts = await prisma.dBT_Layouts.findMany();
    const meals = await prisma.dBT_Meals.findMany();
    const mealGroups = await prisma.dBT_MealGroups.findMany();
    const mealsInGroups = await prisma.dBT_MealsInGroups.findMany();
    const variants = await prisma.dBT_Variants.findMany();
    const menuSetUp = await prisma.dBT_MenuSetUp.findMany();
    const translations = await prisma.dBT_Translations.findMany();


    console.error('Got all data from ORIG')


    // try to delete all data from prismaVercel and reset auto increment eg TRUNCATE TABLE someTable RESTART IDENTITY;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_Languages" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_Layouts" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_Meals" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_MealGroups" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_MealsInGroups" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_Variants" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_MenuSetUp" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_Translations" RESTART IDENTITY CASCADE`;


    console.error('Deleted all data in REMOT')



    // move all that data to prismaVercel
    await prismaVercel.$transaction([
        prismaVercel.dBT_Languages.createMany({ data: languages }),
        prismaVercel.dBT_Layouts.createMany({ data: layouts }),
        prismaVercel.dBT_Meals.createMany({ data: meals }),
        prismaVercel.dBT_MealGroups.createMany({ data: mealGroups }),
        prismaVercel.dBT_MealsInGroups.createMany({ data: mealsInGroups }),
        prismaVercel.dBT_Variants.createMany({ data: variants }),
        prismaVercel.dBT_MenuSetUp.createMany({ data: menuSetUp }),
        prismaVercel.dBT_Translations.createMany({ data: translations }),
    ]);

    console.error('Moved all data to REMOT')

    return true;


}