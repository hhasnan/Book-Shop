import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import Books from '../data/books.json'

const ReadMore = () => {

    const { id } = useParams();
    console.log(id);
    const decodedId = decodeURIComponent(id);

    const book = Books.find((b) => b.id === decodedId);

    if (!book) return <p>Book Not Found In Database</p>

    return (
        <div className='container mx-auto mt-10 flex flex-col md:flex-row'>
            <div className='w-[100%] md:w-[50%]'>
                <div className='mx-auto w-fit'>
                    <Link to="/explore"><FaArrowLeft /></Link>
                    <img src={book.image_url} alt="" className='w-[240px] h-[320px] mt-10' />
                </div>
            </div>
            <div className='w-[100%] md:w-[35%] flex flex-col' style={{justifyContent:'space-between'}}>
                <div className='mt-12 w-[100%] px-4'>
                    <h1 className='mb-1'>Book's Name : <span className='font-bold'>{book.title}</span></h1>
                    <h1 className='mb-1'>Book's Author : <span className='font-bold'>{book.author}</span></h1>
                    <h1 className='mb-1'>Release Date : <span className='font-bold'>{book.year}</span></h1>
                    <h1 className='mb-1'>Book's Price : <span className='font-bold'>{Math.round(book.price)} $</span></h1>
                    <div className='flex flex-row flex-wrap mt-5'>
                        <p>Genres : </p>
                        {book.genres.map((g, i) => {
                            return <p key={i} className='bg-[#F5F5F5] w-fit px-2 rounded shadow ms-2 mb-2'>{g}</p>
                        })}
                    </div>
                </div>
                <div className='w-[90%] mx-auto md:w-[65%] mt-10 md:mt-0 mb-7 md:mb-0'>
                    <button className='px-10 py-2 rounded-md bg-[#8D6E63] text-white text-sm font-medium shadow-md hover:bg-[#7C5D55] transition duration-300 ease-in-out w-[100%] block text-center flex items-center' style={{justifyContent:'center'}}><FiShoppingCart className='me-2'/>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ReadMore
