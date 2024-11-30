import {Box, Button, Grid, Typography} from "@mui/material";
import React from "react";
import {getAllData} from "@/db";
import {base64DataUri} from "@/utils/utils";


export default async function TestBill() {

    const {menuSetUp, ...rest} = await getAllData();

    return (
        <html>
        <body>

        <>

            <style>
                {`
                            @media print {
                                .contentToPrint{ top: 0; left: 0; transform: none; width: 100%; height: 100%; padding: 20px; overflow: visible; display: flex; flex: 1; background-color: white; }
                                .printButton{ display: none; }

                            }`}
            </style>
            <Box className="contentToPrint"
                 sx={{
                     position: 'absolute' as 'absolute',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                     width: 750,
                     bgcolor: 'white',
                     p: 4,

                     display: 'flex',
                     flexDirection: 'column',
                     maxHeight: '100%',
                 }}>
                <>
                    <div>
                        <Grid container spacing={2}>
                            {/* Left Section - Logo */}
                            <Grid item xs={4}>
                                <img
                                    src={base64DataUri(menuSetUp?.LogoImage)}
                                    alt="Golden Lobster Logo"
                                    className="ml-3 w-28 h-28"
                                />
                                <Typography className="mt-2 text-sm">
                                    Restaurant and caffee
                                </Typography>
                            </Grid>

                            {/* Middle Section - Company Info */}
                            <Grid item xs={4}>
                                <Box className="text-center">
                                    <Typography variant="h6" className="font-bold mb-2">
                                        Golden Lobster
                                    </Typography>
                                    <Box className="border border-black p-2 mt-9 inline-block">
                                        <Typography>
                                            Cash receipt
                                        </Typography>
                                        <Typography className="text-sm" dir="rtl">
                                            إيصال نقدي
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Right Section - Company Details */}
                            <Grid item xs={4}>
                                <Box className="text-right">
                                    <Typography sx={{ fontSize: '12px' }} className="mb-1">C.R. 1542720</Typography>
                                    <Typography sx={{ fontSize: '12px' }} className="mb-1 text-right" dir="rtl">
                                        شركة رومان سبيورك للتجارة
                                    </Typography>
                                    <Typography sx={{ fontSize: '12px' }}>Roman Spurek Trading Company</Typography>
                                    <Typography sx={{ fontSize: '12px' }} className="mb-1 text-right" dir="rtl">
                                        صلاله / صلالة / محافظة ظفار
                                    </Typography>
                                    <Typography sx={{ fontSize: '12px' }}>Salalah / Salalah / Dhofar Governorate</Typography>
                                    <Typography sx={{ fontSize: '12px' }}>GSM: 92058220</Typography>
                                    <Typography sx={{ fontSize: '12px' }} className="mb-1 text-right" dir="rtl">
                                        goldenlobsterhawana@gmail.com
                                    </Typography>
                                </Box>
                            </Grid>

                            {/* Receipt Number */}
                            <Grid item xs={12}>
                                <Typography className="text-red-500 font-bold">
                                    No: 00011
                                </Typography>
                            </Grid>
                        </Grid>


                        <div key={'title'} className="flex-1 flex items-center mb-4">
                            <Typography variant="h5" component="h5">Payment no.</Typography>
                            <Typography variant="h5" component="h5">Payment no.</Typography>
                        </div>




                        <div id="horizontal-line" style={{ borderTop: '1px solid black', width: '100%', margin: '10px 0' }}></div>

                    </div>

                    <div className="mt-4 min-w-full"></div>

                </>
            </Box>



        </>
        </body>
        </html>
    );
}