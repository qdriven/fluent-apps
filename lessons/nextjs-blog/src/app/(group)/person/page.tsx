'use client';
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";

export default function  Page(){
    const router = useRouter()
    return (
        <div>
            <p>his is Page in /person</p>
            <div>
                <Link href={"/person/address"} className={`bg-blue-500`}> Go to Person/Address Page </Link>
            </div>
            <div>
                <button type="button" onClick={() => router.push('/person/address')}>
                    Get Address
                </button>
            </div>
        </div>
    )

}