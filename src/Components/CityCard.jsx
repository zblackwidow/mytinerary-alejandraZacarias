import { Link } from "react-router-dom";

function CityCard({ city }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white bg-opacity-80 mx-auto">
            <img 
                className="w-full h-48 object-cover" // Ajusta la imagen para que sea proporcional
                src={city.image} 
                alt={city.name} 
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">{city.name}</div>
                <p className="text-gray-700 text-base">
                    {city.descripcion}
                </p>
            </div>
            
            <div className="w-full flex justify-center pb-4">
                <Link 
                    to={`/cities/${city._id}`}
                    className="bg-slate-400 py-2 px-4 rounded text-white text-center w-3/4"
                >
                    See more
                </Link>
            </div>
        </div>
    );
}

export default CityCard;
