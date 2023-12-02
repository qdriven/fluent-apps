import Image from "next/image";
import hello from "../../../../public/next.svg";

export default function Page() {
  return (
    <main>
      <div className="flex justify-center border-gray-30">
        <div className="mx-4 order-first">
          <Image src={hello} alt={`hello image`} />
        </div>
        <div className="mx-4 self-center">
          <h1>Welcome</h1>
          <h2>Welcome 3</h2>
          <div>
            <p>this is Page in /blog/post</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-gray-300">
        <div className="mx-4 order-last self-center">
          <Image src={hello} width={80} height={80} alt="music" />
        </div>
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-blue-700">Welcome to Nice</h1>
          <h2 className="text-3xl font-semibold text-blue-300">developers</h2>
          <button
            className="my-4 px-4 py-2 border-2 border-black rounded-lg
text-white bg-blue-900"
          >
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
