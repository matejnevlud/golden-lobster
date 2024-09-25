import { Inter } from "next/font/google";
import UploadComponent from "@/app/updateWebMenu/UploadComponent";
export const fetchCache = 'force-no-store';

const inter = Inter({ subsets: ["latin"] });


export default async function UpdateWebMenu() {

    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            </head>
            <body className={inter.className}>
                <main className="min-h-screen min-w-full">
                    <UploadComponent />
                </main>
            </body>
        </html>
    );
}
