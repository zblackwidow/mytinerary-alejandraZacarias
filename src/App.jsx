import "./App.css";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import  CityDetails from "./Pages/CityDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Standard from "./Layouts/Standard";
import CitiesLayout from "./Layouts/CitiesLayout";
import Itineraries from "./Pages/Itinerary";

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
      { path: "/cities/:id/itineraries", element: <Itineraries/> }
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
