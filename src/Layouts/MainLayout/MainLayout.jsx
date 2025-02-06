import { Outlet, useLocation } from "react-router";
import Navbar from "../../componants/Navbar/Navbar";


const MainLayout = () => {
    const location = useLocation()
    const path = location.pathname === "/login" || location.pathname === "/register"

    return (
        <div>
            {!path && <Navbar></Navbar>}
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;