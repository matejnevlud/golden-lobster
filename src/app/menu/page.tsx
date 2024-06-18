import { getAllData } from "@/db";
import InteractiveMenu from "@/components/InteractiveMenu";
import WaiterView from "@/components/WaiterView";


export default async function Menu() {

    const allData = await getAllData();


    return (
        <div className="aspect-ratio" style={{ }}>
            <iframe src="/" width="800" height="1280" style={{ height: '100vh', width: '64vh'}}/>
        </div>

    );
}
