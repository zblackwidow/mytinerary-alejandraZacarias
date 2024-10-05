import React from "react";


export default function Hero() {
  return (
    <div className="h-[80vh]  flex items-end justify-between">
      <div className="pl-6 ">
        <h1 className=" text-white pl-4 text-start items-end max-[450px]:text-7xl text-9xl  font-bold">
          <p className="font-serif text-7xl">
            FLY FOR
            <p className=" font-serif italic text-blue-500 font-light">
              LIVING,
            </p>
          </p>
          <p className="italic text-blue-700 ">LIVING</p> TO FLYING
        </h1>
      </div>
      <div className="pr-6 flex flex-col items-end   max-[1030px]:hidden">
        <h2 className="flex items-center text-3xl mb-5 font-light font-mono">Discover
            <p className="mx-3 text-blue-500 
         font-sans text-4xl animate-bounce ">the world</p> with your eyes</h2>
        <button className="bg-white w-1/3 text-black hover:text-white font-bold hover:bg-sky-600 rounded-3xl p-4">Explore</button>
      </div>
    </div>
  );
}
