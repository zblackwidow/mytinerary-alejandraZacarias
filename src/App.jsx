import './App.css'
import Home from './Pages/Home'
import Cities from './Pages/Cities'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter ([
  {path: '/', element: <Home/> },
  {path: '/cities', element: <Cities/>}
])

function App() {

  return (
    <>
   
       <RouterProvider router={router} />
    </>
  )
}

export default App
