import React, { useState } from "react";
import { FaShoppingCart, FaTools, FaUser } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";

const Dropdwon = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [subMenu, setSubMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
        setSubMenu(null);
    };

    const toggleSubMenu = (menu) => {
        setSubMenu(subMenu === menu ? null : menu);
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="flex gap-10">

                {/* SHOP */}
                <div className="relative w-52 flex items-start">
                    <button
                        onClick={() => toggleMenu("shop")}
                        className="w-full p-5 bg-white shadow-lg rounded-xl font-medium flex justify-between items-center z-20 relative"
                    >
                        <span className="flex items-center gap-2">
                            <FaShoppingCart /> Shop
                        </span>
                        <IoChevronDown />
                    </button>

                    {openMenu === "shop" && (
                        <div className="absolute top-0 left-full ml-2 bg-white shadow-xl rounded-xl w-52 z-50">

                            <div className="p-3 hover:bg-gray-100 flex justify-between items-center relative">
                                <span>Electronics</span>
                                <button onClick={() => toggleSubMenu("electronics")}>
                                    <IoChevronForward />
                                </button>

                                {subMenu === "electronics" && (
                                    <div className="absolute left-full top-0 bg-white shadow-xl rounded-xl w-44 ml-2 z-50">
                                        <div className="p-2 hover:bg-gray-100">Laptops</div>
                                        <div className="p-2 hover:bg-gray-100">Mobiles</div>
                                    </div>
                                )}
                            </div>

                            <div className="p-3 hover:bg-gray-100 flex justify-between items-center relative">
                                <span>Fashion</span>
                                <button onClick={() => toggleSubMenu("fashion")}>
                                    <IoChevronForward />
                                </button>

                                {subMenu === "fashion" && (
                                    <div className="absolute left-full top-0 bg-white shadow-xl rounded-xl w-44 ml-2 z-50">
                                        <div className="p-2 hover:bg-gray-100">Men</div>
                                        <div className="p-2 hover:bg-gray-100">Women</div>
                                    </div>
                                )}
                            </div>

                            <div className="p-3 hover:bg-gray-100">Accessories</div>
                        </div>
                    )}
                </div>

                {/* SERVICES */}
                <div className="relative w-52 flex items-start">
                    <button
                        onClick={() => toggleMenu("services")}
                        className="w-full p-5 bg-white shadow-lg rounded-xl font-medium flex justify-between items-center z-20 relative"
                    >
                        <span className="flex items-center gap-2">
                            <FaTools /> Services
                        </span>
                        <IoChevronDown />
                    </button>

                    {openMenu === "services" && (
                        <div className="absolute top-0 left-full ml-2 bg-white shadow-xl rounded-xl w-52 z-50">

                            <div className="p-3 hover:bg-gray-100 flex justify-between items-center relative">
                                <span>Repair</span>
                                <button onClick={() => toggleSubMenu("repair")}>
                                    <IoChevronForward />
                                </button>

                                {subMenu === "repair" && (
                                    <div className="absolute left-full top-0 bg-white shadow-xl rounded-xl w-44 ml-2 z-50">
                                        <div className="p-2 hover:bg-gray-100">Laptop</div>
                                        <div className="p-2 hover:bg-gray-100">Mobile</div>
                                    </div>
                                )}
                            </div>

                            <div className="p-3 hover:bg-gray-100">Consulting</div>
                        </div>
                    )}
                </div>

                {/* COURSES */}
                <div className="relative w-52 flex items-start">
                    <button
                        onClick={() => toggleMenu("courses")}
                        className="w-full p-5 bg-white shadow-lg rounded-xl font-medium flex justify-between items-center z-20 relative"
                    >
                        <span className="flex items-center gap-2">
                            <MdSchool /> Courses
                        </span>
                        <IoChevronDown />
                    </button>

                    {openMenu === "courses" && (
                        <div className="absolute top-0 left-full ml-2 bg-white shadow-xl rounded-xl w-52 z-50">

                            <div className="p-3 hover:bg-gray-100 flex justify-between items-center relative">
                                <span>Development</span>
                                <button onClick={() => toggleSubMenu("dev")}>
                                    <IoChevronForward />
                                </button>

                                {subMenu === "dev" && (
                                    <div className="absolute left-full top-0 bg-white shadow-xl rounded-xl w-44 ml-2 z-50">
                                        <div className="p-2 hover:bg-gray-100">React</div>
                                        <div className="p-2 hover:bg-gray-100">Node</div>
                                    </div>
                                )}
                            </div>

                            <div className="p-3 hover:bg-gray-100">Design</div>
                        </div>
                    )}
                </div>

                {/* PROFILE */}
                <div className="relative w-52 flex items-start">
                    <button
                        onClick={() => toggleMenu("profile")}
                        className="w-full p-5 bg-white shadow-lg rounded-xl font-medium flex justify-between items-center z-20 relative"
                    >
                        <span className="flex items-center gap-2">
                            <FaUser /> Profile
                        </span>
                        <IoChevronDown />
                    </button>

                    {openMenu === "profile" && (
                        <div className="absolute top-0 left-full ml-2 bg-white shadow-xl rounded-xl w-52 z-50">
                            <div className="p-3 hover:bg-gray-100">My Account</div>
                            <div className="p-3 hover:bg-gray-100">Orders</div>
                            <div className="p-3 hover:bg-gray-100 text-red-500">Logout</div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Dropdwon;