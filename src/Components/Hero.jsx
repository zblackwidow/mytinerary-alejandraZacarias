import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cities");
  };

  return (
    <div className="h-[85vh] w-[97vw] pl-4 sm:h-[82vh]  flex items-end justify-around">
      <div className=" text-white items-start flex flex-col gap-4">
        <span className="font-serif text-5xl ">FLY FOR</span>
        <span className="text-7xl font-serif italic text-blue-500 font-light">
          LIVING,
        </span>
        <span className="italic text-blue-700 text-6xl  lg:text-9xl ">
          LIVING
        </span>
        <span className="text-7xl">TO FLYING</span>
      </div>
      <div className=" flex flex-col gap-3 items-end max-[1030px]:hidden">
        <span className="flex items-center text-3xl mb-5 font-semibold font-sans">
          Find your
        </span>
        <span className="mx-3 font-sans text-5xl  text-blue-200 animate-bounce">
          perfect trip
        </span>
        <span className="flex items-center text-2xl mb-5 font-light font-mono">
          designed by insiders who
          <span className="text-white mx-3 bg-black italic">
            
            know and love
          </span>
          their cities!
        </span>

        <button
          onClick={() => handleClick()}
          className="bg-white w-28 py-3 text-black hover:text-white font-bold hover:bg-sky-600 rounded-3xl "
        >
          Explore
        </button>
      </div>
    </div>
  );
}
