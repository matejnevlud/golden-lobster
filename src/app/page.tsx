import { getAllData } from "@/db";
import InteractiveMenu from "@/components/InteractiveMenu";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default async function Menu() {




    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            </head>
            <body className={inter.className}>
                <main className="min-h-screen min-w-full">
                    <InteractiveMenu  />
                </main>
            </body>
        </html>
    );
}
