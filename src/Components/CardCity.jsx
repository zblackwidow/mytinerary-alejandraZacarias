import { useNavigate } from "react-router-dom";

    export default function CardCity() {
        const navigate = useNavigate();
        const handleClick = () => {
        navigate("/cities");
        };
    return (
        <>
        {/* contenedor */}
        <div className="h-auto w-full bg-white">
        
        {/* contenedor */}
       
          
            <p className="bg-transparent text-xl font-semibold text-black">
                Tokio, Japón
            </p>
            <p className="bg-transparent text-black">
                A vibrant metropolis that combines tradition and modernity, famous for its gastronomy, technology and pop culture.
            </p>
            <button
                onClick={() => handleClick("/cities")}
                className="bg-[#DBB0A1] bg-opacity-75 hover:bg-blue-400 text-white text-lg px-6 py-1 rounded-2xl"
            >
                BUY!
            </button>
            
        </div>
        </>
    );
    }