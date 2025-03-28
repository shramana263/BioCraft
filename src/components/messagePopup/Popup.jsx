import React from 'react'
import { useMessageContext } from '../../contexts/MessageContext'

const Popup = () => {

    const {message}= useMessageContext()

    return (
        <>
            <div className='fixed z-50 font-semibold border bg-white rounded-lg px-5 py-3 bottom-5 right-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] motion-preset-slide-left'>
                {message}
            </div>

        </>
    )
}

export default Popup
