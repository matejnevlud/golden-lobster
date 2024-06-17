import { getAllData } from "@/db";
import InteractiveMenu from "@/components/InteractiveMenu";
import WaiterView from "@/components/WaiterView";


export default async function Menu() {

    const allData = await getAllData();


    return (
        <main className="min-h-screen min-w-full flex flex-row">
            <WaiterView allData={allData}/>
        </main>
    );
}
