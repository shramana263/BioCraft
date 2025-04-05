import React from 'react'
import DataPreview from './DataPreview'
import { IoDocuments } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import ProfileImageUpdate from '../components/forms/update/ProfileImageUpdate'
import { useDataContext } from '../contexts/DataContext'

const Profile = () => {
    const navigate = useNavigate()

    const { isOpenProfileImageUpdateModal, setOpenProfileImageUpdateModal } = useDataContext()
    const modalBackgroundClass = isOpenProfileImageUpdateModal ? 'h-[80vh] overflow-hidden' : ''

    const handleClick = () => {
        navigate('/make-biodata');
    }

    return (
        <>
            <div className={`${modalBackgroundClass} bg-gray-50 dark:bg-slate-900 min-h-screen p-6 transition-colors duration-300`}>
                {/* Header */}
                <div className='text-5xl text-orange-900 dark:text-orange-400 font-extrabold p-6 w-full flex justify-center items-center bg-white dark:bg-slate-800 rounded-lg shadow-lg mb-8 dark:shadow-slate-700/50'>
                    PROFILE
                </div>

                {/* Data Preview Section */}
                <div className='bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-slate-700/50 p-6 border dark:border-slate-700'>
                    <DataPreview />
                </div>

                {/* Floating Action Button */}
                <div className='fixed z-10 xl:right-16 sm:right-16 sm:bottom-16 min-[300px]:bottom-8 min-[300px]:right-8'>
                    <div className='rounded-full p-4 bg-purple-900 dark:bg-purple-800 text-white hover:bg-purple-800 dark:hover:bg-purple-700 cursor-pointer transition-colors duration-300 shadow-lg hover:shadow-xl dark:shadow-purple-900/50'
                        onClick={handleClick}
                    >
                        <IoDocuments size={30} className="dark:text-purple-100" />
                    </div>
                </div>
            </div>

            {/* Profile Image Update Modal */}
            {
                isOpenProfileImageUpdateModal &&
                <div className='fixed z-30 inset-0 bg-white dark:bg-slate-900 flex justify-center items-center overflow-y-auto transition-colors duration-300'>
                    <div className='w-full max-w-2xl p-6'>
                        <ProfileImageUpdate />
                    </div>
                </div>
            }
        </>
    )
}

export default Profile