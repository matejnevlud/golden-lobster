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

            await prisma.dBT_Expenses.create({
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
                    Photos: JSON.stringify(expense.photos),
                    UUID: expense.id
                }
            })
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



        console.log('expensesSync done')
    } catch (error) {
        console.log('expensesSync error', error)
    } finally {
        isSyncing = false
    }
}