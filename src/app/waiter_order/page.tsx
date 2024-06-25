import { getAllData } from "@/db";
import InteractiveMenu from "@/components/InteractiveMenu";
import WaiterView from "@/components/WaiterView";
import AddToOrderStrip from "@/components/AddToOrderStrip";


export default async function Menu() {

    const allData = await getAllData();


    return (
        <div className="min-h-screen min-w-full flex flex-row">
            <iframe src="/" width="800" height="1280" style={{ height: '100vh', width: '62.5vh' }}/>
            <WaiterView {...allData} />
        </div>
    );
}
