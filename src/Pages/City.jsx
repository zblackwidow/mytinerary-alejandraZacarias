import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CardCity from "../Components/CardCity";

export default function City() {
  return (
    <>
      <main
        className="bg-no-repeat bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url(https://media.admagazine.com/photos/618a5ef1be961b98e9f09804/master/w_1600%2Cc_limit/91686.jpg)",
        }}
      >
        <NavBar></NavBar>
        <div className="w-full h-screen flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center text-white justify-center">
          <h1 className="text-center text-4xl font-bold">City</h1>
        </div>
        
        
          <CardCity></CardCity>
       
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
