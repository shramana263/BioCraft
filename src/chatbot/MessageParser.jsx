import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if(message.includes('start')) {
      actions.initialAction();
    }
  };

  

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions:actions,
        });
      })}
    </div>
  );
};

export default MessageParser;