'use server';
import { DBT_Layouts, DBT_MealGroups, DBT_Meals, DBT_Variants, PrismaClient, DBT_Languages, DBT_MealsInGroups, DBT_MenuSetUp, DBT_Orders, DBT_OrderItems, DBT_PaymentMethods, DBT_Customer, DBT_Tables, DBT_Users, DBT_Taxes } from '../generated/prisma-client'



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
    var result = await prisma.dBT_Layouts.findMany({ where: { Active: true} });
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

    var result = await prisma.dBT_MealGroups.findMany({ where: { Active: true}, orderBy: { Order: 'asc' } });
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
    var result = await prisma.dBT_Meals.findMany({ where: { Active: true} });
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

export async function getVariants(langID?: number) {
    var result = await prisma.dBT_Variants.findMany({ where: { Active: true} });

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
    var result = await prisma.dBT_MenuSetUp.findFirst({ where: { Active: true} });
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

}
export async function getWaiterData(): Promise<WAITER_DATA> {
    const customers = await prisma.dBT_Customer.findMany();
    const orders = await prisma.dBT_Orders.findMany();
    const orderItems = await prisma.dBT_OrderItems.findMany();
    const paymentMethods = await prisma.dBT_PaymentMethods.findMany();
    const tables = await prisma.dBT_Tables.findMany();
    const users = await prisma.dBT_Users.findMany();
    const taxes = await prisma.dBT_Taxes.findMany();

    return { customers, orders, orderItems, paymentMethods, tables, users, taxes };
}




export type ALL_DATA = {
    languages: DBT_Languages[]
    layouts: DBT_Layouts[]
    meals: DBT_Meals[]
    mealGroups: DBT_MealGroups[]
    mealsInGroups: DBT_MealsInGroups[]
    variants: DBT_Variants[]
    menuSetUp: DBT_MenuSetUp

    translatedData : {
        [key: number]: {
            mealGroups: DBT_MealGroups[]
            meals: DBT_Meals[]
            variants: DBT_Variants[]
            menuSetUp: DBT_MenuSetUp
            layouts: DBT_Layouts[]
        }
    }
}
export async function getAllData(): Promise<ALL_DATA> {
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
            mealGroups : await getMealGroups(langID),
            meals : await getMeals(langID),
            variants : await getVariants(langID),
            menuSetUp : await getMenuSetUp(langID),
            layouts : await getLayouts(langID),
        }
    }

    return { languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp, translatedData };
}





export async function createNewOrder(table: number): Promise<DBT_Orders> {
    const order = await prisma.dBT_Orders.create({
        data: {
            ID_Table: table,
            //ID_User: 1,
            //ID_OrderStatus: 1,
            //OrderDate: new Date(),
        }
    });
    return order;
}

export async function createNewOrderItem(order_id: number, meal_id: number): Promise<DBT_OrderItems> {
    const meal = await prisma.dBT_Meals.findFirst({ where: { ID: meal_id } });
    // check if meal has any variants, if so, take the first one
    const firstVariant = await prisma.dBT_Variants.findFirst({ where: { ID_Meal: meal_id, Available: true } });

    const orderItem = await prisma.dBT_OrderItems.create({
        data: {
            ID_Order: order_id.toString(),
            ID_Meal: meal_id,
            ID_Variant: firstVariant?.ID,
            Price: meal?.Price,

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

export async function DB_cancelOrderItem(order_item_id: number): Promise<DBT_OrderItems> {
    const orderItem = await prisma.dBT_OrderItems.update({
        where: { ID: order_item_id },
        data: {
            Canceled: true,
        }
    });
    return orderItem;
}
