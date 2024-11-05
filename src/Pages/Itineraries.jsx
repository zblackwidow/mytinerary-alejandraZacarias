import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Itineraries from "../Components/itineraries/Itineraries";

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
                <h1 className="text-center text-4xl font-bold">Itineraries</h1>
                <div className="flex">
                    
                    <Itineraries />
                </div>

            </main>
            <Footer></Footer>
        </>
    );
}
