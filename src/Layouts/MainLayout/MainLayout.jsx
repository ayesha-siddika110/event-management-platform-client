import { Outlet, useLocation } from "react-router";
import Navbar from "../../componants/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    const location = useLocation()
    const path = location.pathname === "/login" || location.pathname === "/register"

    return (
        <div>
            <Toaster />
            {!path && <Navbar></Navbar>}
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;