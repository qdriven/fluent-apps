import Link from "next/link";
import React from "react";

export default function  Page(){
    return (
        <div>
            <p>his is Page in /blog</p>
            <div>
                <Link href={"/blog/post"} className={`bg-blue-500`}> Go to Blog/Post Page </Link>
            </div>
        </div>
    )

}