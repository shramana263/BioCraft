import React from 'react'
import DataPreview from './DataPreview'
import { IoDocuments } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/make-biodata');
    }
    return (
        <>
            <div>

                <div className='text-5xl text-orange-900 font-extrabold p-3 pb-0 w-full flex justify-center items-center'>
                    PROFILE
                </div>
                <div>
                    <DataPreview />
                </div>
            </div>
            <div className=' rounded-full p-3 fixed z-10 right-16 top-[610px] bg-purple-900 text-white hover:cursor-pointer'
            onClick={handleClick}
            >
                <IoDocuments size={30} />
            </div>
        </>
    )
}

export default Profile
