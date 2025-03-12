export const dynamic = 'force-dynamic';

import { getAllData, getWaiterData } from "@/db";
import WaiterView from "@/components/WaiterView";
import { Inter } from "next/font/google";
import MuiXLicense from "@/components/MuiXLicense";

const inter = Inter({ subsets: ["latin"] });


export default async function Menu() {

    const [allData, waiterData] = await Promise.all([getAllData(), getWaiterData()]);


    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=0.6, maximum-scale=0.6, user-scalable=no"/>
            </head>
            <body className={inter.className}>
            <div className="min-h-screen min-w-full flex flex-row">
                <iframe src="/" width="800" height="1280" style={{ height: '100vh', width: '62.5vh' }}/>
                <WaiterView {...allData} {...waiterData} />
            </div>
            <MuiXLicense />
            </body>
        </html>
    );
}
