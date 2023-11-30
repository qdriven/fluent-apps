import Image from 'next/image'
import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/20/solid";
import DashboardLogo from "@/components/logo/dashboard-logo";
import LandingHero from "@/components/hero/landing-hero";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6" >
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-50">
            {
                // **<Nav/> + <Logo/>
            }
            {/*<div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">*/}
            {/*    <div className={styles.shape}></div>*/}
            {/*</div>*/}
            <DashboardLogo/>
        </div>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">

            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50
            px-6 py-10 md:w-2/5">
                <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                    <strong>Welcome To Your Workspace</strong> {' '}
                    <a href="https://nextjs.org/learn/" className="text-blue-500">
                        Next.js Learn Course
                    </a>
                </p>
                <Link href={`/login`}
                  className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm
            font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                >
                    <span>Login</span> <ArrowRightIcon className={`w-5 md:w-6`} />
                </Link>
            </div>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                {/* Add Hero Images Here */}
                <LandingHero/>
            </div>
        </div>
    </main>
  )
}
