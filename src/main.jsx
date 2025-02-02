import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router'
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';


const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    errorElement : <Error></Error>
  }


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}> </RouterProvider>
  </StrictMode>,
)
