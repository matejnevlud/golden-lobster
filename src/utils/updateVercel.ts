'use server';
import { PrismaClient } from '../../generated/prisma-client'
import { PrismaClient as PrismaClientVercel } from '../../generated/prisma-client-vercel'


export async function uploadToNeon () {
    const prisma = new PrismaClient();
    const prismaVercel = new PrismaClientVercel();




    // get all data from prisma
    const languages = await prisma.dBT_Languages.findMany();
    const layouts = await prisma.dBT_Layouts.findMany();
    const meals = await prisma.dBT_Meals.findMany();
    const mealGroups = await prisma.dBT_MealGroups.findMany();
    const mealsInGroups = await prisma.dBT_MealsInGroups.findMany();
    const variants = await prisma.dBT_Variants.findMany();
    const menuSetUp = await prisma.dBT_MenuSetUp.findMany();
    const translations = await prisma.dBT_Translations.findMany();

    if (!languages || !layouts || !meals || !mealGroups || !mealsInGroups || !variants || !menuSetUp || !translations) {
        console.log('No data in ORIG')
        return false;
    }
    
    if (languages.length === 0 ) {
        console.log('Empty Data in ORIG')
        return false;
    }

    console.log('Got all data from ORIG')


    // try to delete all data from prismaVercel and reset auto increment eg TRUNCATE TABLE someTable RESTART IDENTITY;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_Languages" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_Layouts" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_Meals" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_MealGroups" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_MealsInGroups" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_Variants" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_MenuSetUp" RESTART IDENTITY CASCADE`;
    await prismaVercel.$queryRaw`TRUNCATE TABLE "DBT_Translations" RESTART IDENTITY CASCADE`;


    console.log('Deleted all data in REMOT')



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

    console.log('Moved all data to REMOT')

    return true;


}