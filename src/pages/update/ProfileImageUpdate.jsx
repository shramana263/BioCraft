import React from 'react'
import UploadDoc from '../../components/forms/UploadDoc'
import Gallery from '../../components/dataPreview/Gallery'
import { useDataContext } from '../../contexts.jsx/DataContext'

const ProfileImageUpdate = () => {

    const {currentProfileImage, setCurrentProfileImage}= useDataContext()
    return (
        <div className='flex xl:flex-row md:flex-col sm:flex-col gap-6 w-full justify-center items-center'>
            
            <div className='w-[40%] flex flex-col gap-4 justify-center items-center'>
                <div className='text-2xl font-bold'>Current Profile Picture</div>
                <div className='flex justify-center items-center'>
                    {
                        currentProfileImage && 
                        <div className='h-64 w-64 flex justify-center items-center border-4 rounded-full overflow-hidden border-black'>
                            <img src={currentProfileImage.url} alt="" className='h-full w-full'/>
                        </div>
                    }
                </div>
            </div>
            <div className='w-[40%] h-full flex flex-col justify-center items-center'>
                
                <Gallery />
                
            </div>
        </div>
    )
}

export default ProfileImageUpdate
