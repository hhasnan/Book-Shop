import React, { useContext } from 'react'
import SwiperCarousel from '../components/SwiperCarousel'
import Button from '../components/Button'
import LatestBooks from '../components/LatestBooks'
import { FaArrowRight } from 'react-icons/fa';
import BookData from '../data/books.json'
import { HiOutlineBookOpen } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {

  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  const latestBooks = [...BookData].sort((a, b) => b.year - a.year).slice(0, 7);

  return (
    <>
    <div className={`${darkTheme ? 'dark-1 dark-text-2' : 'bg-white text-black'}`}>
      <div className={` flex flex-col lg:flex-row container mx-auto pt-10 lg:pt-15 overflow-hidden`}>
        <div className='w-[100%] lg:w-[50%] text-center mt-0 lg:mt-17 mb-10 px-10 lg:px-0'>
          <h1 className={`${darkTheme ? 'dark-text-2' : 'text-primary'} text-2xl font-bold mb-5`}>Your Next Favorite Book Is Just a Click Away!</h1>
          <p className={`${darkTheme ? 'dark-text-2' : 'text-paragraph'} font-semibold`}>Discover bestsellers, classics, and hidden gems.</p>
          <p className='mt-10 hidden lg:block'>
            <Button linkTo='/explore' buttonValue='Explore Books' />
          </p>
        </div>
        <div className='mx-10 lg:mx-auto'>
          <SwiperCarousel />
        </div>
      </div>
      <div className={`${darkTheme ? 'dark-2 dark-text-2' : 'bg-[#F5F5F5]'} mt-20 latest-book`}>
        <div className='container mx-auto py-10'>
          <div className='flex justify-between items-center px-5 lg:px-0 mb-0 lg:mb-5'>
            <h2 className={`${darkTheme ? 'dark-text-2' : 'text-primary'} text-start text-lg lg:text-2xl font-bold py-5`}>Latest Books</h2>
            <Link to='/explore' className='text-sm lg:text-md underline explore-button relative'>Explore Now <FaArrowRight className='text-[10px] inline-block absolute right-arrow' /></Link>
          </div>
          <div className='mx-5 lg:mx-0 overflow-hidden'>
            <div className="hidden md:block">
              <LatestBooks />
            </div>
            <div className='md:hidden'>
              {latestBooks.map((book, index) => (
                <div className='w-[full] h-[290px] relative mb-5 text-white' key={index}>
                  <img src={book.image_url} alt="" className='w-[100%] h-[100%] border-0 outline-0 swiper-img' />
                  <div className='absolute top-0 left-0 w-[100%] h-[100%] border-0 outline-0 swiper-hover-div'>
                    <div className='w-[100%] h-[100%] text-[rgba(255, 255, 255, 1)] card-bg absolute z-50 top-0  '>
                    </div>
                    <div className='absolute top-0 left-0 z-50 swiper-hover-text flex flex-col w-[100%] h-[100%]' style={{ justifyContent: 'space-between' }}>
                      <div className='title absolute top-[-2%] px-4 w-[100%] flex items-center' style={{ justifyContent: 'space-between' }}>
                        <h3 className='text-sm font-bold'>Name : {book.title}</h3>
                        <Link to={`/explore/read-more/${encodeURIComponent(book.id)}`} className='bg-white text-black p-2 rounded-[50%] w-fit h-fit'><HiOutlineBookOpen/></Link>
                      </div>
                      <div>

                      </div>
                      <p className='text-sm author absolute bottom-[-2%] mx-4'>
                        Year : {book.year} <br />
                        Author : {book.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
