import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const SignUpCard = ({ signin }) => {
    return (
        <div className='bg-white shadow rounded-2xl px-10 pb-5'>
            <div className='py-7 flex items-center'>
                <h1 className='text-2xl mx-auto'>Sign up</h1>
            </div>
            <h3>Email</h3>
            <input type="text" placeholder='Please input your E-mail' className='border px-2 py-1 rounded-md' />
            <h3 className='mt-3'>Password</h3>
            <input type="password" placeholder='please input Your Password' className='border px-2 py-1 rounded-md' />
            <br />
            <h3 className='mt-3'>Re-type Password</h3>
            <input type="password" placeholder='please Re-enter Your Password' className='border px-2 py-1 rounded-md' />
            <br />
            <div className='w-[100%] mt-8'>
                <Link to='/' className={`px-10 py-2 rounded-md bg-[#8D6E63] text-white text-sm font-medium shadow-md hover:bg-[#7C5D55] transition duration-300 ease-in-out w-[100%] block text-center`}>Sign Up</Link>
                <h4 className="text-sm mt-4">Already have an account? <button onClick={() => signin(true)} className="underline text-[#7C5D55] cursor-pointer">Sign In</button></h4>
            </div>
        </div>
    )
}

export default SignUpCard
