import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { div } from "motion/react-client";
import Footer from "./Footer";


const MainRoutes = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
        
    );
};

export default MainRoutes;