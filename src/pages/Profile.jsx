import React from 'react'
import DataPreview from './DataPreview'
import { IoDocuments } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import ProfileImageUpdate from './update/ProfileImageUpdate'
import { useDataContext } from '../contexts.jsx/DataContext'

const Profile = () => {
    const navigate = useNavigate()

    const { isOpenProfileImageUpdateModal, setOpenProfileImageUpdateModal } = useDataContext()
    const modalBackgroundClass=isOpenProfileImageUpdateModal?'h-[80vh] overflow-hidden':''

    const handleClick = () => {
        navigate('/make-biodata');
    }
    return (
        <>
            <div className={`${modalBackgroundClass}`}>

                <div>

                    <div className='text-5xl text-orange-900 font-extrabold p-3 pb-0 w-full flex justify-center items-center'>
                        PROFILE
                    </div>
                    <div>
                        <DataPreview />
                    </div>
                </div>
                <div className=' rounded-full p-3 fixed z-10 xl:right-16 xl:top-[610px] sm:top-96 sm:right-2 bg-purple-900 text-white hover:cursor-pointer'
                    onClick={handleClick}
                >
                    <IoDocuments size={30} />
                </div>
            </div>
            {
                isOpenProfileImageUpdateModal &&
                <div className='z-10 h-screen w-full flex justify-center items-center  absolute top-0 left 0 bg-white overflow-y-scroll'>
                    {/* {console.log("hello update profile image")} */}
                    <div className='w-full h-full'>

                    <ProfileImageUpdate />
                    </div>
                </div>
            }
        </>
    )
}

export default Profile
