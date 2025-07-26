import React from 'react'
import Navbar from '../components/Navbar'
import SwiperCarousel from '../components/SwiperCarousel'

const Home = () => {
  return (
    <div className='flex w-[90%] mx-auto mt-15'>
      <div className='w-[100%] lg:w-[50%] text-center mt-17'>
        <h1 className='text-2xl font-bold mb-5 text-paragraph text-bold '>Your Next Favorite Book Is Just a Click Away!</h1>
        <p className='text-paragraph font-semibold'>Discover bestsellers, classics, and hidden gems.</p>
      </div>
      <div className='mx-auto'>
        <SwiperCarousel/>
      </div>
    </div>
  )
}

export default Home
