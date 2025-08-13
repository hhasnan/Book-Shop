import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiSearch } from 'react-icons/fi'
import { FiShoppingCart } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { FaUser } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Books from '../data/books.json'

const Navbar = () => {

    const { darkTheme, toggleTheme } = useContext(ThemeContext);

    const token = localStorage.getItem('token')

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [searchTerm, setSearchTerm] = useState('')
    // const [inputFocus, setInputFocus] = useState(false)


    const filteredBooks = Books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const filterBooks = new Set()
    const cartBooks = JSON.parse(localStorage.getItem('cart')) || []

    cartBooks.map(id => {
        const book = Books.find(b => b.id === id)
        if (book) {
            filterBooks.add(book)
        }
    })

    return (
        <>
            <div>
                <div className={`text-center font-semibold ${darkTheme ? 'dark-text-2 dark-2' : 'text-white bg-[#8D6E63]'} `}>
                    <marquee className="text-[10px] lg:text-sm mb-[2px] md:mb-[5px] lg:mb-[0px]" behavior="scroll" direction="left"><pre>Pakistan's Best Online Book Store                                               Your next favorite book is just a click away                                            From classics to new arrivals — we have it all</pre></marquee>
                </div>
                <nav className={`relative flex items-center justify-between flex-wrap ${darkTheme ? 'dark-1 dark-text-1' : 'bg-white border-[#261060]'} py-4 lg:px-12 shadow border-solid border-t-2 `}>
                    {/* Navbar header */}
                    <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                        <Link to='/' className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                            {/* <span className="font-semibold text-xl tracking-tight">Book Shop</span> */}
                            {/* <img src="../../logo-black.svg" alt="" className='h-[4dvh] sm:h-[7dvh] md:h-[4dvh] lg:h-[7dvh]' /> */}
                            <h1 className='font-bold text-lg text-amber-400'><span className='text-[36px] font-extrabold text-amber-600'>B</span>ookly</h1>
                        </Link>
                        {/* Mobile menu toggle */}
                        <div className={`block lg:hidden my-auto ${darkTheme ? 'dark-text-1' : 'text-black'}`}>
                            <button
                                onClick={toggleMenu}
                                className="flex items-center px-3 py-2 border-2 rounded  border-black-700 hover:shadow-lg "
                            >
                                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className={`absolute lg:relative top-[100%] ${darkTheme ? ' dark-1 dark-text-2' : 'bg-white text-dark'} lg:bg-none border-b-2 lg:border-0 border-gray-400 shadow-2xl lg:shadow-none menu w-full  flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${isMenuOpen ? 'block' : 'hidden'} `}>
                        <div className='mx-auto relative '>
                            <div className='border-[#EAEFF3] border-2 rounded-4xl flex overflow-hidden mx-auto order-2 lg:order-1 mb-3 lg:mb-0 mt-5 lg:mt-0'>
                                <input type="text" className='focus:outline-none focus:ring-0 focus:border-transparent ps-5 my-2 h-[20px] w-[-webkit-fill-available] w-[-moz-available]' placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
                                <button className='px-5 bg-[#EAEFF3]'>
                                    <FiSearch className="text-gray-500 w-5 h-5" />
                                </button>
                            </div>
                            {searchTerm === '' ? null : <div className={`w-[250px] md:w-full lg:w-full h-[360px] ${darkTheme ? 'dark-2 dark-text-2' : 'bg-[#F5F5F5]'} shadow-2xl absolute z-100 top-[100%] mt-0 lg:mt-2 overflow-auto scrollbar-hide`}>
                                {filteredBooks >= 0 ? <p className='text-center mx-10 mt-5'>Book with this name is not available for now 😓</p> : filteredBooks.map(book => {
                                    return (
                                        <Link to={`/explore/read-more/${encodeURIComponent(book.id)}`} className='mx-2 px-1 lg:mx-4 lg:px-2 my-2 py-2 flex' key={book.id}>
                                            <img src={book.image_url} alt="" className='w-[60px] h-[80px]' />
                                            <div className='ms-2'>
                                                <h1 className='text-sm'>{book.title}</h1>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>}
                        </div>
                        {/* Auth Buttons */}
                        <div className="flex flex-col lg:flex-row order-1 lg:order-2 ms-2 lg:ms-0 mt-5 lg:mt-0">
                            <Link to='/add-to-cart' className='flex lg:inline relative'><div className='absolute flex items-center text-[10px] w-[14px] h-[14px] rounded-2xl bg-red-500 dark-text-1 left-[10px] top-[-5px]' style={{justifyContent:'center'}}>{filterBooks.size}</div><FiShoppingCart className={`${darkTheme ? 'dark-text-2' : 'text-black'} w-5 h-5 lg:me-5  mb-3 lg:mb-0 `} /> <p className='dark-text-2 flex lg:hidden ms-1'>Cart</p></Link>
                            <button onClick={toggleTheme} className='flex lg:inline'>{darkTheme ? <BsSun className='dark-text-2 w-5 h-5 mb-3 lg:mb-0  ms-0' /> : <BsMoon className='text-black w-5 h-4 mb-3 lg:mb-0  ms-0' />}<p className='dark-text-2 flex lg:hidden ms-1'>Theme</p></button>
                            {token ? <Link to="/log-out" className='text-start ms-0 lg:ms-5 mb-3 lg:mb-0 flex lg:inline'><FaSignOutAlt className={`${darkTheme ? 'dark-text-2' : 'text-black'} w-5 h-5 mb-3 lg:mb-0 lg:hidden me-1 lg:me-0`} />logout</Link> : <Link to="/sign-in" className='text-start ms-0 lg:ms-5 mb-3 lg:mb-0 flex lg:inline'><FaUser className={`${darkTheme ? 'dark-text-2' : 'text-black'} w-5 h-5 mb-3 lg:mb-0 lg:hidden me-1 lg:me-0`} />Sign In</Link>}
                        </div>
                    </div>
                </nav>
            </div>
        </>

    );
};

export default Navbar;
