import React, { useState } from 'react'
import Books from '../data/books.json'

const ExploreBookSection = () => {

    const cardPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(Books.length / cardPerPage);

    const indexOfLastBook = currentPage * cardPerPage;
    const indexOfFirstPage = indexOfLastBook - cardPerPage;
    const currentCards = Books.slice(indexOfFirstPage, indexOfLastBook);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <div>
                <div className='pt-7 container mx-auto flex flex-wrap' style={{ justifyContent: 'center' }}>
                    {currentCards.map((book, index) => (
                        <div key={index} className='w-min mx-auto md:mx-2 lg:mx-5'>
                            <div className='w-[220px] h-[300px] rounded-md border'>
                                <img src={book.image_url} alt="" className='w-[inherit] h-[inherit] rounded-md' />
                            </div>
                            <h1 className='text-center mt-2 mb-4'>{book.title.slice(0, 20)}{book.title.length >= 20 && `...`}</h1>
                        </div>
                    ))}
                </div>
                <div className='w-fit mx-auto flex mt-4'>
                    {Array.from({ length: totalPages}, (_, index) => index + 1).map((pageNumber) => (
                        <button className={`px-4 py-2 shadow rounded ms-3 ${currentPage === pageNumber ? "bg-[rgb(141,110,99)] text-white" : "bg-white text-black hover:bg-[rgba(141,110,99,0.5)]"}`} onClick={() => {handlePageChange(pageNumber)}}>{pageNumber}</button>
                    ))}
                </div>
            </div>

        </>
    )
}

export default ExploreBookSection
