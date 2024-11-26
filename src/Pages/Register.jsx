import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Register from "../Components/Register";

export default function SignInForm() {
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
       <Register></Register>
        <Footer></Footer>
      </main>
    </>
  );
}