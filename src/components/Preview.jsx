import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { RxCross1 } from "react-icons/rx";

const Preview = ({ image }) => {

    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div className=' bg-blue-700 text-white rounded-l-full 
              rounded-r-full p-3 w-56 flex justify-center items-center font-bold text-xl'
                onClick={() => setOpen(true)}>
                Preview
            </div>
            {isOpen &&
                <PreviewComponent image={image} setOpen={setOpen} isOpen={isOpen} />

            }


        </>
    )
}

export default Preview

export const PreviewComponent = ({ image , setOpen, isOpen }) => {
    return createPortal(
        <>
        {
            isOpen &&
            <div className='flex justify-center flex-col items-center bg-slate-700/50 dark:bg-slate-900/50 p-20 h-screen w-screen'>
                <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center flex-col items-center bg-slate-700/50 dark:bg-slate-900/50 p-20'></div>
                <div className='h-[700px] w-[400px] relative pt-10'>
                <div className='flex justify-end items-end w-[450px] h-[50px] z-10 absolute top-5 right-[-20px]'>
                    <div className='border-2 text-gray-300 dark:text-gray-100 cursor-pointer bg-gray-800 dark:bg-gray-900 text-2xl rounded-full p-3' onClick={() =>setOpen(false)}><RxCross1 /></div>
                </div>
                    <img src={image} alt="" className='h-full w-full' />
                </div>
            </div>
        }
        </>, document.getElementById('portal')
    )
}
