"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-full">
      <div className="flex flex-col grow justify-center items-center p-6 text-center md:hidden">
        <h1 className="text-2xl uppercase font-bold">acme</h1>
        <p className="pb-3 pt-0">Welcome back, sign in to continue</p>
        <input
          className="rounded w-64 p-2 m-2 border border-gray-300"
          type="email"
          placeholder="Email"
        />
        <input
          className="rounded w-64 p-2 m-2 border border-gray-300"
          type="password"
          placeholder="Password"
        />
        <button className="bg-black w-64 m-2 text-white rounded p-2 hover:bg-gray-800 ">
          Continue
        </button>
      </div>

      <div className="hidden md:grid grid-cols-2 w-full min-h-screen">
        <div className="relative col-span-1 overflow-hidden shadow-black shadow-md">
          <Image
            src="/hero.jpg"
            layout="fill"
            objectFit="cover"
            alt="Hero picture"
          ></Image>
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl uppercase font-bold">acme</h1>
          <p className="pb-3 pt-0">Welcome back, sign in to continue</p>
          <input
            className="rounded w-64 p-2 m-2 border border-gray-300"
            type="email"
            placeholder="Email"
          />
          <input
            className="rounded w-64 p-2 m-2 border border-gray-300"
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-black w-64 m-2 text-white rounded p-2 hover:bg-gray-800 "
            
          >
            New Button
          </button>
        </div>
      </div>
    </div>
  );
}
