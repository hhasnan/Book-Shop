import React from 'react'
import { FaTools } from "react-icons/fa"

const Build = () => {
    return (
        <div className='text-center flex items-center h-[100dvh] dark-1' style={{justifyContent: 'center'}}>
            <div className='w-fit flex flex-col h-fit items-center'>
                <FaTools className='text-6xl dark-text-1'/>
                <p className='text-2xl mt-9 dark-text-2'>This is only a demo website for the Book Shop application...</p>
            </div>
        </div>
    )
}

export default Build
