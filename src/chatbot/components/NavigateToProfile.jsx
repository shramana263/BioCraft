import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavigateToProfile = () => {
    const navigate=useNavigate();
    const func=()=>{
        navigate('/profile')
    }
  return (
    <>
      <div className='flex flex-wrap ms-16 gap-3'>
            <button className='border border-neutral-900 rounded-r-full rounded-l-full px-3 py-2' onClick={func}>Click here!</button>
        </div>
    </>
  )
}

export default NavigateToProfile
