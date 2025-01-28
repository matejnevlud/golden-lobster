import {PrismaClient} from "@prisma/client";
import {PrismaClient as PrismaClientVercel} from "../../generated/prisma-client-vercel";

var isSyncing = false
export default async function expensesSync() {
    if (isSyncing) return
    try {
        // get url from prisma
        if (process.env.NODE_ENV === 'development' || process.env.DISABLE_EXPENSES_SYNC) {
            console.log('syncing expenses to prisma is not possible in development')
            return
        }

        isSyncing = true
        const prisma = new PrismaClient();
        const prismaVercel = new PrismaClientVercel();

        // get all data from prismaVercel
        const newExpenses = await prismaVercel.expenses.findMany({ where: { synced: false } });

        var DBT_Expenses = await prisma.dBT_Expenses.findMany();

        // Insert new expenses to MSSQL
        for (const expense of newExpenses) {
            const DBT_Expense = DBT_Expenses.find((DBT_Expense) => DBT_Expense.UUID == expense.id);
            if (DBT_Expense) continue;
            console.log('new expense', expense.description);



            const newExpense = await prisma.dBT_Expenses.create({
                data: {
                    DateAt: expense.date_time,
                    Business: expense.business,
                    Description: expense.description,
                    Price: expense.price,
                    VAT: expense.vat,
                    PaymentType: expense.payment_type,
                    Category1: expense.category1,
                    Category2: expense.category2,
                    Note1: expense.note1,
                    Note2: expense.note2,
                    Photos: null,
                    UUID: expense.id,
                    Reported: expense.reported,
                }
            })

            // parse photos base64 array to byteRepresentation
            if (expense.photos) {
                await prisma.dBT_ExpensePhoto.createMany({
                    data: expense.photos.map((photo, index) => {
                        return {
                            ID_Expense: newExpense.ID,
                            Photo: base64ToFile(photo)
                        }
                    })
                })
            }
        }


        // Get all data from MSSQL and check, if all newly inserted expenses are in MSSQL /double check/
        DBT_Expenses = await prisma.dBT_Expenses.findMany();
        for (const expense of newExpenses) {
            const DBT_Expense = DBT_Expenses.find((DBT_Expense) => DBT_Expense.UUID == expense.id);
            if (DBT_Expense) {
                // remove from vercel
                await prismaVercel.expenses.update({
                    where: { id: expense.id },
                    data: { synced: true }
                })
            }
        }

        await prismaVercel.$disconnect();

        console.log('expensesSync done')
    } catch (error) {
        console.log('expensesSync error', error)
    } finally {
        isSyncing = false
    }
}


function base64ToFile(base64String:string, filename = 'image') {
    // Remove data URL prefix if present
    const base64WithoutPrefix = base64String.replace(/^data:image\/\w+;base64,/, '');

    // Get the file type from the base64 string
    let fileType = 'png'; // default
    if (base64String.startsWith('data:image/')) {
        fileType = base64String.split(';')[0].split('/')[1];
    }

    // Decode base64 string
    const byteCharacters = atob(base64WithoutPrefix);
    const byteNumbers = new Array(byteCharacters.length);

    // Convert to byte array
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    // Create Uint8Array from byte array
    const byteArray = new Uint8Array(byteNumbers);

    return byteArray
}

export const migratePhotosArrayToSeparateByteTable = async () => {
    try {
        const prisma = new PrismaClient();

        const expenses = await prisma.dBT_Expenses.findMany();

        // run only if table dBT_ExpensePhoto is empty
        const expensePhotos = await prisma.dBT_ExpensePhoto.findMany();
        if (expensePhotos.length > 0) {
            console.log('photos already migrated to separate table')
            return
        }


        for (const expense of expenses) {
            if (!expense.Photos) {
                console.log('no photos found', expense.ID)
                continue
            }


            const jsonPhotos = JSON.parse(expense.Photos);
            if (!Array.isArray(jsonPhotos)) {
                console.log('not an array', expense.ID)
                continue
            }

            await prisma.dBT_ExpensePhoto.createMany({
                data: jsonPhotos.map((photo, index) => {
                    return {
                        ID_Expense: expense.ID,
                        Photo:  base64ToFile(photo)
                    }
                })
            })
        }
        console.log('photos migrated to separate table')
    } catch (error) {
        console.log('photos migration error', error)
    }
}