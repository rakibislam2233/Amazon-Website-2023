import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Component/Home/Home';
import Order from './Component/Order/Order';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderReview from './Component/OrderReview/OrderReview';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import ChackOut from './Component/ChackOut/ChackOut';
import SignUp from './Component/SignUp/SignUp';
import UserProvider from './Component/Provider/UserProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
        {
          path:"/",
          element:<Home></Home>
        },{
            path:"order",
            element:<Order></Order>,
            loader:()=>fetch('products.json')
        },{
            path:"orderReview",
            element:<OrderReview></OrderReview>
        },{
            path:"inventory",
            element:<Inventory></Inventory>
        },{
            path:"login",
            element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"chakOut",
          element:<ChackOut></ChackOut>
        }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
   <UserProvider>
   <RouterProvider router={router} />
   </UserProvider>
  </React.StrictMode>

)
