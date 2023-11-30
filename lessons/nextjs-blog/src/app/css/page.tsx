import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <p>his is Page in /css</p>
      <div>
        <Link href={"/css/gradients"} className={`bg-blue-500`}>
          {" "}
          Go to gradients/Post Page{" "}
        </Link>
        <Link href={"/css/ring"} className={`bg-blue-500`}>
          {" "}
          Go to ring/Post Page{" "}
        </Link>
        <Link href={"/css/shadows"} className={`bg-blue-500`}>
          {" "}
          Go to shadows/Post Page{" "}
        </Link>
      </div>
    </div>
  );
}
