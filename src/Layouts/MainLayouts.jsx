import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 

const MainLayouts = () => {
  return (
    <div className="container">
      <Navbar/>
      <Outlet/>
     
    </div>
  );
};

export default MainLayouts;