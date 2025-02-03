import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router'
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Dashboard from './Components/Dashboard/Dashboard';
import Stats from './Components/Stats/Stats';
import Gadgets from './Components/Gadgets/Gadgets';
import GadgetD from './Components/GadgetD/GadgetD';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>,
    errorElement : <Error></Error>,
    children : [
      {
        path : '/',
        element : <Gadgets></Gadgets>,
        errorElement : <Error></Error>

      },
      {
        path : '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement : <Error></Error>,
        children : [
          {
            path : '/dashboard/cart',
            element : <Cart></Cart>,
            errorElement : <Error></Error>,
          },
          {
            path : '/dashboard/wishlist',
            element : <Wishlist></Wishlist>,
            errorElement : <Error></Error>
          }
        ]
      } , 
      {
        path : '/stats',
        element : <Stats></Stats>,
        errorElement : <Error></Error>
      } , 
      {
        path : '/gadgets/:productId',
        element : <GadgetD></GadgetD>,
        errorElement : <Error></Error>

      }
    ]
  }
 


]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}> </RouterProvider>
  </StrictMode>,
)
