import "./App.css";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Standard from "./Layouts/Standard";

const router = createBrowserRouter([
  {element: <Standard></Standard>,
    children: [
      { path: "/", element: <Home /> },
    ]
  },
  { path: "/cities", element: <Cities /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
