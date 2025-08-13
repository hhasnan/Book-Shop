import React, { useState, useEffect, useContext } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import Books from '../data/books.json'
import { FaExclamationTriangle } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext'


const ReadMore = () => {

    const { darkTheme } = useContext(ThemeContext)
    const [warning, setWarning] = useState('')

    const Navigate = useNavigate()
    const { id } = useParams();
    console.log(id);
    const decodedId = decodeURIComponent(id);

    const book = Books.find((b) => b.id === decodedId);

    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])


    if (!book) return <div className='h-[100dvh] flex items-center text-center' style={{ justifyContent: 'center' }}><div><FaExclamationTriangle className='text-[48px] text-[orange] mx-auto' /><h1 className='font-bold text-xl mt-3'>Book Not Found In Database</h1></div></div>

    return (
        <div className={`${darkTheme ? 'dark-1 dark-text-1 ' : 'bg-white text-dark'} h-[100dvh]`}>
            <div className={`container mx-auto pt-10 flex flex-col md:flex-row`}>
                <div className='w-[100%] md:w-[40%]'>
                    <div className='mx-auto w-fit'>
                        <button onClick={() => Navigate(-1)}><FaArrowLeft /></button>
                        <img src={book.image_url} alt="" className='w-[240px] h-[320px] mt-10' />
                    </div>
                </div>
                <div className='w-[100%] md:w-[40%] flex flex-col' style={{ justifyContent: 'space-between' }}>
                    <div className='mt-12 w-[100%] px-4'>
                        <h1 className='mb-1'>Book's Name : <span className='font-bold'>{book.title}</span></h1>
                        <h1 className='mb-1'>Book's Author : <span className='font-bold'>{book.author}</span></h1>
                        <h1 className='mb-1'>Release Date : <span className='font-bold'>{book.year}</span></h1>
                        <h1 className='mb-1'>Book's Price : <span className='font-bold'>{Math.round(book.price)} $</span></h1>
                        <div className='flex flex-row flex-wrap mt-5'>
                            <p className='mt-1'>Genres : </p>
                            {book.genres.map((g, i) => {
                                return <p key={i} className={`w-fit px-3 py-1 rounded shadow ms-2 mb-2 ${darkTheme ? 'dark-2 dark-text-1' : 'bg-white text-dark'}`}>{g}</p>
                            })}
                        </div>
                    </div>
                    <div className='w-[90%] mx-auto md:w-[65%] mt-10 md:mt-0 mb-7 md:mb-0'>
                        <button onClick={() => {
                            setCart([...cart, book.id]); setWarning('successfully added to cart'); 
                            setTimeout(() => {
                                setWarning('');
                            }, 3000);
                        }} className='px-10 py-2 rounded-md bg-[#8D6E63] text-white text-sm font-medium shadow-md hover:bg-[#7C5D55] transition duration-300 ease-in-out w-[100%] block text-center flex items-center' style={{ justifyContent: 'center' }}><FiShoppingCart className='me-2' />Add To Cart</button>
                        <h1 className='text-center text-md text-green-500 pt-3 '>{warning}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadMore
