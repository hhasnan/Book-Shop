import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({linkTo, buttonValue}) => {
  return (
    <Link to={linkTo} className='px-6 py-2 rounded-2xl bg-[#8D6E63] text-white text-sm font-medium shadow-md hover:bg-[#7C5D55] transition duration-300 ease-in-out'>{buttonValue}</Link>
  )
}

export default Button
