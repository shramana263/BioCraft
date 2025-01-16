import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const MessageParser = ({ children, actions }) => {
    
    const parse = (message) => {
        if (message.includes('start') || message.includes('Start') || message.includes('How to start') || message.includes('how to start') || message.includes('explore') || message.includes('Explore')) {
            actions.initialAction();
        }
        else if(message.includes('hello') || message.includes('Hello') || message.includes('hi') || message.includes('Hi') || message.includes('hey') || message.includes('Hey')) {
            actions.helloAction();
        }
        else if (message.includes('biodata') || message.includes('Biodata') || message.includes('profile') || message.includes('Profile') || message.includes('get my biodata') || message.includes('Get my biodata')) {
            actions.initialAction1();
        }
        else if (message.includes('template') || message.includes('Template') || message.includes('templates') || message.includes('Templates') || message.includes('get my biodata') || message.includes('Get my biodata')) {
            actions.initialAction1();
        }
        else if(message.includes('make') || message.includes('Make') || message.includes('make my profile') || message.includes('Make my profile') || message.includes('make profile') || message.includes('Make profile')) {
            actions.initialAction();
        }
        else if(message.includes('do i need to create account to get biodata?') || message.includes('Do i need to create account to get biodata?') || message.includes('create account') || message.includes('Create account') || message.includes('account') || message.includes('Account')
        || message.includes('login') || message.includes('Login') || message.includes('need to login') || message.includes('Need to login')|| message.includes('need to login to download') || message.includes('Need to login to download')
    || message.includes('signup')|| message.includes('Signup')|| message.includes('create account')|| message.includes('Create account')) {
            actions.createAcc();
        }
        else {
            const message = createChatBotMessage('I am not able to understand this message. Please type "start" to get started or "biodata" to know how to get your biodata.', {
            });
        }
    };



    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: actions,
                });
            })}
        </div>
    );
};

export default MessageParser;