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
import OrderReview from './Component/OrderReview/OrderReview';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';

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
            element:<Order></Order>
        },{
            path:"orderReview",
            element:<OrderReview></OrderReview>
        },{
            path:"inventory",
            element:<Inventory></Inventory>
        },{
            path:"login",
            element:<Login></Login>
        }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
