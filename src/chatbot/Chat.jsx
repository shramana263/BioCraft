import React from 'react'
import config from './config'
import MessageParser from './MessageParser'
import ActionProvider from './ActionProvider'
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css';
import './Chat.css'

const Chat = () => {
    return (
        <div className='flex justify-center items-center h-full w-full p-10'>
            {/* <ActionProvider> */}

                <Chatbot
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            {/* </ActionProvider> */}
        </div>
    )
}

export default Chat
