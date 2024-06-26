import { DBT_Layouts, DBT_MealGroups, DBT_Meals, DBT_Variants, PrismaClient, DBT_Languages, DBT_MealsInGroups, DBT_MenuSetUp } from '../generated/prisma-client'
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
        const just_run_procedure = await prisma.$queryRaw`SELECT dbo.Translate(${text}, ${id_language})`;

        const result = await prisma.dBT_Translations.findFirst({ where: { ID_Language: id_language, Text: text } });

        if (!result) return text;

        console.log(result)
        console.log('Translating', text, 'to', id_language, 'result:', result.Translation as string ?? text)
        //@ts-ignore
        const returnText = result.Translation as string ?? text;

        if (returnText == "{}") return "";
        if (returnText == "{ }") return "\u00A0";

        return returnText;
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



export type ALL_DATA = {
    languages: DBT_Languages[]
    layouts: DBT_Layouts[]
    meals: DBT_Meals[]
    mealGroups: DBT_MealGroups[]
    mealsInGroups: DBT_MealsInGroups[]
    variants: DBT_Variants[]
    menuSetUp: DBT_MenuSetUp

}
export async function getAllData(): Promise<ALL_DATA> {
    const languages = await getLanguages();
    const layouts = await getLayouts();
    const mealGroups = await getMealGroups();
    const meals = await getMeals();
    const mealsInGroups = await getMealsInGroups();
    const variants = await getVariants();
    const menuSetUp = await getMenuSetUp();

    return { languages, layouts, meals, mealGroups, mealsInGroups, variants, menuSetUp };
}
