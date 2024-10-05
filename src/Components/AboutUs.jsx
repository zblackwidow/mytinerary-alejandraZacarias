import React from 'react'

export default function AboutUs() {
  return (
    <div className="justify-center my-32 h-[40vh] max-[450]:p-0 flex flex-col items-center hover:bg-slate-900 hover:bg-opacity-40 bg-slate-600 bg-opacity-40">
        <h3 className='text-2xl pb-6 font-bold text-white'>About Us</h3>
          <p className="text-center w-[45%] max-[450px]:w-[80%]  text-xl italic text-white ">
            Welcome to My Tinerary! We are a team of passionate travelers
            dedicated to inspiring you to explore the world. Our mission is to
            help you plan the perfect trip by sharing itineraries, tips, and
            recommendations from our own adventures. We believe that every
            journey is an opportunity to create unforgettable memories. Join us
            and start your adventure today!
          </p>
        </div>
  )
}
