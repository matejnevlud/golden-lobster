import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
    title: "Golden Lobster",
    description: "Golden Lobster app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
