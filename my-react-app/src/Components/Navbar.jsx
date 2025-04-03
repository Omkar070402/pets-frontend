import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../Styles/Navbar.css'
import { FaUser } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSittingDog } from "react-icons/gi";
import { IoExit } from "react-icons/io5";




const Navbar = () => {
    const [showBar, setShowBar] = useState(false);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem('email');
        navigate("/login"); // Redirect to login after logout
    };

    return (
        <header id="navbar" className="shadow shadow-gray-300">
            <nav className="flex space-x-20 justify-between items-center p-3 relative">
                <div className="ms-3">
                    <NavLink to={"/"}><GiSittingDog size={50} /></NavLink>
                </div>

                <div className="nav-items hidden md:flex gap-10 font-semibold text-2xl">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/browsePets"}>Browse Pets</NavLink>
                    <NavLink to={"/myAdoption"}>My Adoption</NavLink>
                </div>

                <div className="flex gap-5">
                    {token ? (
                        <div className="cursor-pointer">
                            <IoExit onClick={logOut} className="text-blue-600" size={24} />
                        </div>
                    ) : (
                        <div className="cursor-pointer">
                            <NavLink to={"/login"}><FaUser /></NavLink>
                        </div>
                    )}

                    {/* Hamburger Menu */}
                    <div>
                        <RxHamburgerMenu
                            className="sm:block md:hidden cursor-pointer"
                            onClick={() => setShowBar(prev => !prev)}
                        />
                    </div>

                    {/* Mobile Menu */}
                    {showBar && (
                        <div className="absolute top-full left-0 bg-white flex flex-col w-full h-23 z-20 p-3">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/browsePets"}>Browse Pets</NavLink>
                            <NavLink to={"/myAdoption"}>My Adoption</NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;



