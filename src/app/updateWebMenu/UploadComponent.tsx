'use client'
import { uploadToNeon } from "@/db";
import dynamic from "next/dynamic";

import {useEffect, useState} from "react";


function UploadComponent(props: any) {

    const [statusOfUpload, setStatusOfUpload] = useState<boolean | null>(null);

    useEffect(() => {
        uploadToNeon().then((res) => {
            setStatusOfUpload(res);
        }).catch((err) => {
            setStatusOfUpload(err);
        });
    }, []);

    return (
        <div>
            <h1>Uploading menu to WEB</h1>
            <h1>{statusOfUpload === null ? 'WAITING' : statusOfUpload ? 'OK' : 'FAILED'}</h1>
            <pre>{JSON.stringify(statusOfUpload, null, 2)}</pre>
        </div>
    );
}
const UploadComponentNoSSR = dynamic(() => Promise.resolve(UploadComponent), { ssr: false })
export default UploadComponentNoSSR
