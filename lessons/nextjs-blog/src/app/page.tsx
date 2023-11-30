import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello, Next.js!</h1>
      <div>
        <div>
          <Link href={"/blog"} className={`bg-amber-100`}>
            {" "}
            Go to Blog Page{" "}
          </Link>
        </div>
        <div>
          <Link href={"/person"} className={`bg-amber-100`}>
            {" "}
            Go to Person Page{" "}
          </Link>
        </div>
        <div>
          <Link href={"/css"} className={`bg-amber-100`}>
            {" "}
            Go to Css Page{" "}
          </Link>
        </div>
        <div>
          welcome to Dynamic Page
          <br />
          <Link href="/zia?id=99892">Go to Zia page</Link>
          <br />
          <Link href="/zeeshan?id=324534">Go to Zeeshan page</Link>
          <br />
          <Link href="/hira?id=1234">Go to Hira page</Link>
          <br />
        </div>
      </div>
      <div>
        <div className="mt-20 mb-10 bg-yellow-50">
          <div>This is a first line</div>
          <button className="bg-yellow-500 p-4 m-4">Button</button>
          <div>This is a last line</div>
        </div>
        <div>
          <div>Margins, Paddings, and Borders</div>
          <div className="mt-20 mb-10">
            <button className="p-10 border border-black">One</button>
            <button className="m-10 border border-black">Two</button>
            <button className="m-2 p-2 border-4 border-black">Three</button>
          </div>
          <div>
            <button className="m-4 p-4 border-2 border-black rounded-md">
              Four
            </button>
            <button className="m-4 p-4 border-2 border-black rounded-2xl">
              Five
            </button>
            <button className="m-4 p-4 border-2 border-black rounded-full">
              Six
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
