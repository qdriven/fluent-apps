import Image from "next/image";
export default function LandingHero() {
  return (
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/* Add Hero Images Here */}
      <Image
        src="/hero-desktop.png"
        width={1280}
        height={1024}
        alt="Screenshots of the dashboard project showing desktop version"
        className="hidden md:block"
      />
      <Image
        src="/hero-mobile.png"
        width={560}
        height={620}
        alt="Screenshot of the dashboard project showing mobile version"
        className="block md:hidden"
      />
    </div>
  );
}
