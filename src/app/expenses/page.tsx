// Show dbt expenses in mui dataview
'use client'
export const dynamic = 'force-dynamic';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {DB_getExpenses, DB_getExpensesPhotos, getAllData} from '@/db';
import {base64DataUri} from "@/utils/utils";
import {useEffect} from "react";

export default function Expenses() {

    const [expenses, setExpenses] = React.useState([]);
    const [photos, setPhotos] = React.useState([]);

    useEffect(() => {
        (async () => {
            const data = await DB_getExpenses();
            setExpenses(data);

            const photos = await DB_getExpensesPhotos();
            setPhotos(photos);
            console.log('photos', photos)
        })()
    }, []);


    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        </head>
        <body >
        <main className="min-h-screen min-w-full">
            <DataGrid
                rows={expenses}
                columns={[
                    {field: 'ID', headerName: 'ID', width: 70},
                    {field: 'DateAt', headerName: 'Date', width: 130},
                    {field: 'Business', headerName: 'Business', width: 130},
                    {field: 'Description', headerName: 'Description', width: 130},
                    {field: 'Amount', headerName: 'Amount', width: 130},
                    {field: 'FirstPhoto', headerName: 'First Photo', width: 130, renderCell: (params) => <img src={base64DataUri(photos.find((photo: any) => photo.ID_Expense == params.row.ID)?.Photo)} alt="logo" style={{maxWidth: '100%', maxHeight: '100%'}}/>},
                ]}
                checkboxSelection
                disableSelectionOnClick
            />

        </main>
        </body>
        </html>
    )
}