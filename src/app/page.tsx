import { getAllData } from "@/db";
import InteractiveMenu from "@/components/InteractiveMenu";


export default async function Menu() {

    const allData = await getAllData();


    return (
        <main className="min-h-screen min-w-full">
            <InteractiveMenu {...allData} />
        </main>
    );
}
