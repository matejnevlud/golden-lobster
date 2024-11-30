import expensesSync from "@/utils/expensesSync";

export function register() {
    expensesSync()
    setInterval(expensesSync, 60000) //
}