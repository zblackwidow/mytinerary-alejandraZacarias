import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Details from "../Components/Details";

export default function CityDetails() {
  return (
    <>
      
      <main
        className="bg-no-repeat bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <NavBar></NavBar>
        <div className="flex flex-col items-center justify-center">
        <Details></Details>
        </div>
        

      </main>
      <Footer></Footer>
    </>
  );
}
