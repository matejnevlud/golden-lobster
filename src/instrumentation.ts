import expensesSync, {migratePhotosArrayToSeparateByteTable} from "@/utils/expensesSync";

export function register() {
    migratePhotosArrayToSeparateByteTable()
    expensesSync()
    setInterval(expensesSync, 60000) //
}