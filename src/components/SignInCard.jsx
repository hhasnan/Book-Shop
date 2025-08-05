import React, { useState, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'

const SignInCard = ({ signin }) => {

    const Navigate = useNavigate();

    
    useEffect(() => {
        return () => {
            const token = localStorage.getItem('token')
            if (token) {
                Navigate('/')
            }
        };
    }, [])


    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [warning, setWarning] = useState("")

    const login = () => {

        if (email === '' && password === '') {
            setWarning('both fields are empty please fill them')
        } else if (password === '') {
            setWarning('you password filed is empty')
        } else if (email === '') {
            setWarning('your email field is empty')
        } else if (email === 'hasnan@gmail.com' && password === '123') {
            localStorage.setItem("token", "v89j34r9wfjef293wehff23r")
            Navigate('/')
        } else {
            setWarning("your username or password is incorrect")
        }
    }

    useEffect(() => {
        return () => {
            setWarning('')
        };
    }, [email, password])

    return (
        <div className='bg-white shadow rounded-2xl px-10 pb-5'>
            <div className='py-7 flex items-center'>
                <h1 className='text-2xl mx-auto'>Login</h1>
            </div>
            <h3>Email</h3>
            <input type="text" placeholder='E-mail : hasnan@gmail.com' className='border px-2 py-1 rounded-md' onChange={(e) => { setEmail(e.target.value) }} />
            <h3 className='mt-3'>Password</h3>
            <input type="password" placeholder='password : 123' className='border px-2 py-1 rounded-md' onChange={(e) => { setpassword(e.target.value) }} />
            <br />
            <div className='w-[100%] mt-8'>
                <button onClick={login} className={`px-10 py-2 rounded-md bg-[#8D6E63] text-white text-sm font-medium shadow-md hover:bg-[#7C5D55] transition duration-300 ease-in-out w-[100%] block text-center`}>Sign In</button>
                <h4 className="text-sm mt-4 ">Don't have an account? <button className="underline text-[#7C5D55] cursor-pointer" onClick={() => signin(false)}>Sign Up</button></h4>
            </div>
            <h6 className='text-red-700 mt-4 text-sm'>{warning}</h6>
        </div>
    )
}

export default SignInCard
