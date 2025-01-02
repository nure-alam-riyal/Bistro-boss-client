import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import OurShop from "../Pages/OurShop";
import ContactUs from "../Pages/ContactUs";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },{
          path:'menu',
          element:<Menu></Menu>
        },{
          path:'/shop/:category',
          element:<OurShop></OurShop>
        },{
          path:'/contact',
          element:<ContactUs></ContactUs>
        }
      ]
    },
  ]);