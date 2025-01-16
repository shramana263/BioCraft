import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const NavigateUser = ({ children, actions }) => {
    const navigate = useNavigate();
    const func=() => {
        navigate('/templates')
    }
    return (
        <div className='flex flex-wrap ms-16 gap-3'>
            <button className='border border-neutral-900 rounded-r-full rounded-l-full px-3 py-2' onClick={func}>Explore</button>
        </div>
    );
}

export default NavigateUser;