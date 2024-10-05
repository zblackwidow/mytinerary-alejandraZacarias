import React from "react";
import Footer from "../Components/Footer";
import Carrousel from "../Components/Carrousel";
import Navbar from "../Components/NavBar";
import Space from "../Components/Space";

export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main
        className="bg-no-repeat bg-cover bg-fixed bg-center "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1499063078284-f78f7d89616a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="h-[80vh] flex items-end ">
          <h1 className=" text-white max-[420px]: pl-4 text-start items-end text-9xl max-[450px]:text-7xl font-bold">
            <p className="font-serif text-7xl">
              FLY FOR
              <p className=" font-serif italic text-blue-500 font-light">
                LIVING,
              </p>
            </p>
            <p className="italic text-blue-700">LIVING</p> TO FLYING
          </h1>
        </div>
       
        <Space></Space>
        <Carrousel></Carrousel>
        <Space></Space>
        <div className=" mt-32 mb-32 flex flex-col items-center bg-slate-600 bg-opacity-40">
          <p className="text-center w-[45%] max-[450px]:w-[80%]  text-2xl italic text-white ">
            Welcome to My Tinerary! We are a team of passionate travelers
            dedicated to inspiring you to explore the world. Our mission is to
            help you plan the perfect trip by sharing itineraries, tips, and
            recommendations from our own adventures. We believe that every
            journey is an opportunity to create unforgettable memories. Join us
            and start your adventure today!
          </p>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

// Hero/Welcome:
// Presentar el nombre de la app MyTinerary y el eslogan: "Find your perfect trip, designed by insiders who know and love their cities!" de manera estética y destacada.
// Call to Action:
// Incluir un call to action llamativo que invite al usuario a acceder a la página de Cities, utilizando un icono y una frase, complementado con imágenes o animaciones para hacerlo atractivo.
