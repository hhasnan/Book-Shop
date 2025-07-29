import React from 'react'
import SwiperCarousel from '../components/SwiperCarousel'
import Button from '../components/Button'
import LatestBooks from '../components/LatestBooks'
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row container mx-auto mt-10 lg:mt-15 overflow-hidden'>
        <div className='w-[100%] lg:w-[50%] text-center mt-0 lg:mt-17 mb-10 px-10 lg:px-0'>
          <h1 className='text-2xl font-bold mb-5 text-primary text-bold '>Your Next Favorite Book Is Just a Click Away!</h1>
          <p className='text-paragraph font-semibold'>Discover bestsellers, classics, and hidden gems.</p>
          <p className='mt-10'>
            <Button linkTo='/books' buttonValue='Explore Books' />
          </p>
        </div>
        <div className='mx-10 lg:mx-auto'>
          <SwiperCarousel />
        </div>
      </div>
      <div className='bg-[#F5F5F5] mt-20 latest-book'>
        <div className='container mx-auto py-10'>
          <div className='flex justify-between items-center px-5 lg:px-0 mb-0 lg:mb-5'>
            <h2 className='text-start text-lg lg:text-2xl font-bold text-primary py-5'>Latest Books</h2>
            <button className='text-sm lg:text-md underline explore-button relative'>Explore Now <FaArrowRight className='text-[10px] inline-block absolute right-arrow'/></button>
          </div>
          <div className='mx-5 lg:mx-0'>
            <LatestBooks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
