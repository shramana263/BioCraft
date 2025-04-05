import React, { useState } from 'react'
import Chat from './Chat'

const BotIcon = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            {
                visible &&
                <div className='absolute sm:right-32 top-20 right-0 motion-preset-pop'>
                    <Chat />
                </div>
            }
            <div className='sm:h-16 sm:w-16 h-10 w-10 rounded-full overflow-hidden cursor-pointer dark:border dark:bg-neutral-200' onClick={()=>{setVisible(prev=>!prev);console.log(visible)}} >
                <img src="src/assets/images/chatbot1.jpg" alt="" className='h-full w-full' />
            </div>
        </>
    )
}

export default BotIcon
