import "./App.css";
import Home from "./Pages/Home";// Asegúrate de importar CitiesList
import CityDetails from "./Pages/CityDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Standard from "./Layouts/Standard";
import CitiesLayout from "./Layouts/CitiesLayout";
import SignInForm from "./Pages/SignInForm";
import Register from "./Pages/Register.jsx";
import { UserProvider, UserContext } from "./context/UserContext.jsx"; 
import { useEffect, useContext } from "react";
import axios from 'axios'; 
import Cities from "./Pages/Cities";

const router = createBrowserRouter([
  { 
    element: <Standard />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/signin", element: <SignInForm /> },
      { path: "/register", element: <Register /> }
    ]
  },
  {
    element: <CitiesLayout />,
    children: [
      { path: "/cities", element: <Cities /> }, // Utiliza CitiesList aquí
      { path: "/cities/:id", element: <CityDetails /> },
    ]
  }  
]);

function AppContent() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      axios.get('http://localhost:5050/api/auth/user', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(error => {
        console.log('Error fetching user data:', error);
      });
      window.history.replaceState({}, document.title, "/"); 
    }
  }, [setUser]);

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
