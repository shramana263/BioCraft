import React from 'react'
import UploadDoc from '../../components/forms/UploadDoc'
import Gallery from '../../components/dataPreview/Gallery'
import { useDataContext } from '../../contexts.jsx/DataContext'
import { LuMinimize2 } from 'react-icons/lu'

const ProfileImageUpdate = () => {

    const {currentProfileImage, setCurrentProfileImage, isOpenProfileIMageUpdateModal, setOpenProfileImageUpdateModal}= useDataContext()
    return (
        <div className='h-full flex xl:flex-row md:flex-col sm:flex-col min-[412px]:flex-col min-[412px]:overflow-y-scroll md:p-10 min-[412px]:pt-5 shadow-lg gap-6 w-full justify-center items-center'>
            
            <div className='md:w-[30%] flex flex-col gap-4 justify-center items-center'>
                <div className='text-2xl font-bold'>Current Profile Picture</div>
                <div className='flex justify-center items-center'>
                    {
                        currentProfileImage && 
                        <div className='md:h-64 md:w-64 min-[412px]:w-36 min-[412px]:h-36 flex justify-center items-center border-4 rounded-full overflow-hidden border-black'>
                            <img src={currentProfileImage.url} alt="" className='h-full w-full'/>
                        </div>
                    }
                </div>
            </div>
            <div className='md:w-[70%] h-full flex flex-col justify-center items-center'>
                
                <Gallery />
                
            </div>
            <div className='absolute md:top-8 md:right-8 min-[412px]:top-5 min-[412px]:right-5 hover:text-red-700 hover:cursor-pointer'
            onClick={()=>setOpenProfileImageUpdateModal(false)}
            >
            <LuMinimize2 size={30} />
            </div>
        </div>
    )
}

export default ProfileImageUpdate
