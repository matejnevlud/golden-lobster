import { getAllData, getWaiterData } from "@/db";
import InteractiveMenu from "@/components/InteractiveMenu";
import WaiterView from "@/components/WaiterView";
import AddToOrderStrip from "@/components/AddToOrderStrip";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Menu() {

    const allData = await getAllData();

    const waiterData = await getWaiterData()




    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=0.7, maximum-scale=0.7, user-scalable=no"/>
            </head>
            <body className={inter.className}>
            <div className="min-h-screen min-w-full flex flex-row">
                <iframe src="/" width="800" height="1280" style={{ height: '100vh', width: '62.5vh' }}/>
                <WaiterView {...allData} {...waiterData} />
            </div>
            </body>
        </html>
    );
}
