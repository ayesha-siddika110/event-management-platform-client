import { Link } from "react-router";
import PrimaryButton from "../PrimaryButton/PrimaryButton";


const Navbar = () => {

    const links = <>
    <Link to={"/"}>Home</Link>
    <Link to={"/about"}>About</Link>
    
    </>
    return (
        <div className="bg-slate-100 sticky top-0">
            <div className="navbar w-[90%] m-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <a className=" text-xl font-semibold uppercase tracking-[2px]">Event <span className="uppercase text-indigo-600 tracking-[5px]">Managment</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3 text-base">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <PrimaryButton text={"Login"}></PrimaryButton>
                </div>
            </div>

        </div>
    );
};

export default Navbar;