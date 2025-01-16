import React from 'react'
import DataPreview from './DataPreview'
import { IoDocuments } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import ProfileImageUpdate from '../components/forms/update/ProfileImageUpdate'
import { useDataContext } from '../contexts/DataContext'

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

                    <div className='text-5xl text-orange-900 font-extrabold p-3 md:pt-5 pb-0 w-full flex justify-center items-center'>
                        PROFILE
                    </div>
                    <div>
                        <DataPreview />
                    </div>
                </div>
                <div className=' rounded-full p-3 fixed z-10 xl:right-16 h-14 sm:right-16 sm:bottom-16 min-[300px]:bottom-[30px] min-[300px]:right-[30px] bg-purple-900 text-white hover:cursor-pointer'
                    onClick={handleClick}
                >
                    <IoDocuments size={30} />
                </div>
            </div>
            {
                isOpenProfileImageUpdateModal &&
                <div className='z-30 h-screen w-full flex justify-center items-center  absolute top-0 left 0 bg-white overflow-y-scroll'>
                    {/* {console.log("hello update profile image")} */}
                    <div className='w-full h-screen flex justify-center items-center'>

                    <ProfileImageUpdate />
                    </div>
                </div>
            }
        </>
    )
}

export default Profile
