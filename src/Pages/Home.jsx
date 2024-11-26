import Footer from "../Components/Footer";
import Carrousel from "../Components/Carrousel";
import Navbar from "../Components/NavBar";
import Hero from "../Components/Hero";

export default function Home() {

  return (
    <>
      <div className="z-0 bg-no-repeat bg-cover bg-local bg-center h-[100vh] bg-[url('https://images.unsplash.com/photo-1499063078284-f78f7d89616a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      <Navbar ></Navbar>
        <Hero></Hero>
      </div>
      <div className=" flex items-center justify-center">
        <div className=" w-[100%] h-auto flex flex-col items-center justify-center my-10 py-11">
          <Carrousel></Carrousel>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
