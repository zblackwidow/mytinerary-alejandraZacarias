import "./App.css";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import  City from "./Pages/City";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Standard from "./Layouts/Standard";
import CitiesLayout from "./Layouts/CitiesLayout";

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
    ]
  },
  {
    element: <Standard></Standard>,
    children: [
      { path: "/city", element: <City /> },
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
