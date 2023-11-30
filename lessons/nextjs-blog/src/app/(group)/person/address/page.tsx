import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <p>his is Page in /address</p>
      <div>
        <Link href={"/"} className={`bg-blue-500`}>
          {" "}
          Go to home{" "}
        </Link>
      </div>
    </div>
  );
}
