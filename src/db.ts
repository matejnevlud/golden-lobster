import { DBT_Layouts, DBT_MealGroups, DBT_Meals, DBT_Variants, PrismaClient } from '../generated/prisma-client'
import { cookies } from "next/headers";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

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
    // call function dbo.Translate
    try {
        var result = await prisma.$queryRaw`SELECT dbo.Translate(${text}, ${id_language})`;
        console.log('Translating', text, 'to', id_language, 'result:', result[0][''] as string ?? text)
        //@ts-ignore
        return result[0][''] as string ?? text;
    } catch (e) {
        console.error('Error translating', text, 'to', id_language, 'error:', e);
        return text;
    }
}

export async function getLayouts() {
    var result = await prisma.dBT_Layouts.findMany({ where: { Active: true} });
    result = convertUint8ArraysToBase64(result);
    return result;
}

export async function getMealGroups() {
    var result = await prisma.dBT_MealGroups.findMany({ where: { Active: true}, orderBy: { Order: 'asc' } });
    result = convertUint8ArraysToBase64(result);

    const language = parseInt(cookies().get('language')?.value ?? '1');
    result = await Promise.all(result.map(async (mg: DBT_MealGroups) => {
        mg.MealGroup = await translate(mg.MealGroup, language);
        return mg;
    }));

    return result;
}

export async function getMeals() {
    var result = await prisma.dBT_Meals.findMany({ where: { Active: true} });
    result = convertUint8ArraysToBase64(result);

    // translate
    const language = parseInt(cookies().get('language')?.value ?? '1');
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

export async function getVariants() {
    var result = await prisma.dBT_Variants.findMany({ where: { Active: true} });

    result = convertUint8ArraysToBase64(result);

    const language = parseInt(cookies().get('language')?.value ?? '1');
    result = await Promise.all(result.map(async (meal: DBT_Variants) => {
        meal.MealVariant = await translate(meal.MealVariant, language);
        return meal;
    }));

    return result;
}

export async function getMenuSetUp() {
    var result = await prisma.dBT_MenuSetUp.findFirst({ where: { Active: true} });
    result = convertUint8ArraysToBase64(result);

    const language = parseInt(cookies().get('language')?.value ?? '1');
    result.HeaderText = await translate(result?.HeaderText, language);
    result.FooterText = await translate(result?.FooterText, language);

    return result;
}