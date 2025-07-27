import React from 'react'
import Navbar from '../components/Navbar'
import SwiperCarousel from '../components/SwiperCarousel'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className='flex flex-col lg:flex-row container mx-auto mt-10 lg:mt-15 overflow-hidden'>
      <div className='w-[100%] lg:w-[50%] text-center mt-0 lg:mt-17 mb-10 px-10 lg:px-0'>
        <h1 className='text-2xl font-bold mb-5 text-primary text-bold '>Your Next Favorite Book Is Just a Click Away!</h1>
        <p className='text-paragraph font-semibold'>Discover bestsellers, classics, and hidden gems.</p>
        <p className='mt-10'>
          <Button linkTo='/books' buttonValue='Explore Books' />
        </p>
      </div>
      <div className='mx-10 lg:mx-auto'>
        <SwiperCarousel/>
      </div>
    </div>
  )
}

export default Home
