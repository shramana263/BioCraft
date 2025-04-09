import React, { useState } from 'react';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './Chat.css';

const Chat = () => {
   
   
    return (
        <div className='flex flex-col items-center'>
            {/* <button
                className='border border-neutral-900 rounded-full px-3 py-2 mb-4'
                onClick={startListening}
                disabled={isListening}
            >
                {isListening ? 'Listening...' : 'Start Voice Search'}
            </button> */}
            <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
            />
        </div>
    );
};

export default Chat;