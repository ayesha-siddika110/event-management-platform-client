import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../Layouts/MainLayout/MainLayout";


const Router = () => {
    return <>
    <Routes>
        <Route path="/" element={<MainLayout></MainLayout>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<div>about</div>}></Route>
        </Route>
    </Routes>
    
    
    </>
};

export default Router;