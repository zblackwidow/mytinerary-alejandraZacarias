import "./App.css";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import  CityDetails from "./Pages/CityDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Standard from "./Layouts/Standard";
import CitiesLayout from "./Layouts/CitiesLayout";
import Itineraries from "./Pages/Itineraries";
import ItineraryDetails from "./Pages/ItineraryDetail";


const router = createBrowserRouter([
  {element: <Standard></Standard>,
    children: [
      { path: "/", element: <Home /> },
    ]
  },
  {
    element: <CitiesLayout></CitiesLayout>,
    children: [
      { path: "/cities", element: <Cities /> },
      { path: "/cities/:id", element: <CityDetails /> },
      { path: "/itineraries", element: <Itineraries /> },
      { path: "/itinerary/:id", element: <ItineraryDetails/> },
    ]
  }  
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
