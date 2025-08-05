import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    
    const Navigate = useNavigate();

    useEffect(() => {
        return () => {
            localStorage.removeItem('token')
            Navigate('/');
        };
    }, [])


}

export default Logout
