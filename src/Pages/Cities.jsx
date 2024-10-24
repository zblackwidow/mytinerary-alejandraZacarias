import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Loading from "../Components/Loading";
import Seach from "../Components/Seach";

export default function Cities() {
  return (
    <>
      <main
        className="bg-no-repeat bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1499063078284-f78f7d89616a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <NavBar></NavBar>
        <div className="w-full md:h-[80vh] flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center text-white justify-center">
          <h1 className="text-center text-4xl font-bold">Cities</h1>
          <Seach></Seach>
        </div>
        
        <div className="w-[85vw] h-full my-4 items-center flex flex-wrap text-white justify-center">
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
        </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
