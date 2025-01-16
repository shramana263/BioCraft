import React, { useState } from 'react'
import Chat from './Chat'

const BotIcon = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            {
                visible &&
                <div className='absolute right-32 top-20 motion-preset-pop'>
                    <Chat />
                </div>
            }
            <div className='h-16 w-16 rounded-full overflow-hidden cursor-pointer' onClick={()=>{setVisible(prev=>!prev);console.log(visible)}} >
                <img src="src/assets/images/chatbot1.jpg" alt="" className='h-full w-full' />
            </div>
        </>
    )
}

export default BotIcon
