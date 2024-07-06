 
import Error from "../pages/Error";
import Home from "../pages/Home";
import MainLayouts from "../Layouts/MainLayouts";
import { createBrowserRouter } from "react-router-dom";
 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      }
    ]
  },
]);
