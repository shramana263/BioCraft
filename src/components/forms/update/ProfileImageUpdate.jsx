import React from 'react'
import Gallery from '../../dataPreview/Gallery'
import { useDataContext } from '../../../contexts/DataContext'
import { LuMinimize2 } from 'react-icons/lu'

const ProfileImageUpdate = () => {

    const { currentProfileImage, setOpenProfileImageUpdateModal } = useDataContext()
    return (
        <div className=' border p-20 flex xl:flex-row md:flex-col sm:flex-col min-[412px]:flex-col min-[412px]:overflow-y-scroll no-scrollbar md:p-10 min-[412px]:pt-5 shadow-lg gap-6 sm:w-[80%] w-full  sm:h-[90%] justify-center items-center motion-preset-pop'>

            <div className='md:w-[40%] w-[100%] max-[700px]:pt-9 flex flex-col gap-4 justify-center items-center'>
                <div className='text-2xl font-bold max-[700px]:w-full text-center'>Current Profile Picture</div>
                <div className='flex justify-center items-center'>
                    {
                        currentProfileImage &&
                        <div className='md:h-64 md:w-64 min-[412px]:w-36 min-[412px]:h-36 flex justify-center items-center border-4 rounded-full overflow-hidden border-black'>
                            <img src={currentProfileImage.url} alt="" className='h-full w-full' />
                        </div>
                    }
                </div>
            </div>
            <div className='md:w-[60%] w-[100%] h-full flex flex-col justify-center items-center'>

                <Gallery />

            </div>
                <div className='absolute md:top-5 md:right-8 min-[412px]:top-14 min-[412px]:right-5 hover:text-red-700 hover:cursor-pointer'
                    onClick={() => setOpenProfileImageUpdateModal(false)}
                >
                    <LuMinimize2 size={30} />
                </div>
        </div>
    )
}

export default ProfileImageUpdate
