import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { FiShoppingCart } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-[#FFFDFA] py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
            {/* Navbar header */}
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    {/* <span className="font-semibold text-xl tracking-tight">Book Shop</span> */}
                    <img src="./icon-black.png" alt="" className='h-[4dvh] sm:h-[7dvh] md:h-[4dvh] lg:h-[7dvh]' />
                </div>
                {/* Mobile menu toggle */}
                <div className="block lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu */}
            <div
                className={`menu w-full  flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className='border-[#EAEFF3] border-2 rounded-4xl flex overflow-hidden mx-auto order-2 lg:order-1 mb-3 lg:mb-0 mt-5 lg:mt-0'>
                    <input type="text" className='focus:outline-none focus:ring-0 focus:border-transparent ps-5 my-2 h-[20px] w-[-webkit-fill-available]' placeholder='Search' />
                    <button className='px-5 bg-[#EAEFF3]'>
                        <FiSearch className="text-gray-500 w-5 h-5" />
                    </button>
                </div>
                {/* Auth Buttons */}
                <div className="flex flex-col lg:flex-row order-1 lg:order-2">
                    <button><FiShoppingCart className="text-black w-5 h-5 lg:me-3 block lg:inline mb-3 lg:mb-0" /></button>
                    <button className='text-start ms-2 lg:ms-0 mb-3 lg:mb-0'>Sign In</button>
                    <button><BsSun className="text-black w-5 h-5 ms-2 lg:ms-7 mb-3 lg:mb-0" /></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
