import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-4">
      <div className="flex flex-col items-center justify-center ">
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <p className="text-lg">Welcome to the Next.js application.</p>
      </div>
      

      <button className="px-4 py-2 -mt-[50px] text-white bg-blue-500 rounded">
        Login
      </button>

      <p className="mt-4 text-gray-600">
        This is a simple example of a Next.js application.
      </p>

    </div>
  );
}
