import { Inter } from "next/font/google";
import {uploadToNeon} from "@/utils/updateVercel";
export const fetchCache = 'force-no-store';

const inter = Inter({ subsets: ["latin"] });


export default async function UpdateWebMenu() {

    let statusOfUpload = false;
    try {
        statusOfUpload = await uploadToNeon();
    } catch (error) {
        console.error(error);
    }


    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            </head>
            <body className={inter.className}>
                <main className="min-h-screen min-w-full">
                    <h1>Uploaded menu to web - {statusOfUpload ? 'OK' : 'FAILED'}</h1>
                    <pre>{JSON.stringify(statusOfUpload, null, 2)}</pre>
                </main>
            </body>
        </html>
    );
}
