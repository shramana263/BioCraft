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
                <PreviewComponent image={image} setOpen={setOpen} />

            }


        </>
    )
}

export default Preview

export const PreviewComponent = ({ image , setOpen }) => {
    return createPortal(
        <>
            <div className='flex justify-center flex-col items-center bg-slate-700 p-20 h-screen w-screen'>
                
                <div className='h-[700px] w-[400px] relative pt-10'>
                <div className=' flex justify-end items-end w-[450px] h-[50px] z-10 absolute top-3'>
                    <div className='border-2 text-gray-300 cursor-pointer bg-gray-800 text-2xl rounded-full p-5' onClick={() =>setOpen(false)}><RxCross1 /></div>
                </div>
                    <img src={image} alt="" className='h-full w-full' />
                </div>
            </div>


        </>, document.getElementById('portal')
    )
}
