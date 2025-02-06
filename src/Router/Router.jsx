import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const Router = () => {
    return <>
    <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<div>about</div>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
        </Route>
    </Routes>
    
    
    </>
};

export default Router;