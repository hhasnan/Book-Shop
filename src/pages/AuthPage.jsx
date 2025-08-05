import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SignInCard from '../components/SignInCard'
import SignUpCard from '../components/SignUpCard'

const AuthPage = () => {

  const [signin , setSignin] = useState(true)

  return (
    <div className='bg-[#F5F5F5] h-[100dvh] flex items-center' style={{ justifyContent: 'center' }}>
      <div>
        {signin ? <SignInCard signin={setSignin}/> : <SignUpCard signin={setSignin}/>}
      </div>
    </div>
  )
}

export default AuthPage
