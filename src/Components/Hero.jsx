import React from "react";

export default function Hero() {
  return (
    <div className="h-[60vh] w-[98vw] pl-4 sm:h-[75vh]  flex items-end justify-around">
      <div className=" text-white items-start">
        <span className="font-serif text-5xl ">FLY FOR</span>
        <br />
        <span className="text-7xl font-serif italic text-blue-500 font-light">
          LIVING,
        </span>
        <br />
        <span className="italic text-blue-700 text-6xl  lg:text-9xl ">LIVING</span>
        <br />
        <span className="text-7xl">TO FLYING</span>
      </div>
      <div className=" flex flex-col items-end   max-[1030px]:hidden">
        <h2 className="flex items-center text-3xl mb-5 font-light font-mono">
          Discover
          <p
            className="mx-3 text-blue-500 
         font-sans text-4xl animate-bounce "
          >
            the world
          </p>
          with your eyes
        </h2>
        <button className="bg-white w-1/3 text-black hover:text-white font-bold hover:bg-sky-600 rounded-3xl p-4">
          Explore
        </button>
      </div>
    </div>
  );
}
