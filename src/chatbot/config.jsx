import { createChatBotMessage } from 'react-chatbot-kit';
import { useStateContext } from '../contexts/StateContext';
import Avatar from './components/Avatar';
import UserAvatar from './components/UserAvatar';
import StartBtn from './components/Start';
import { Navigate } from 'react-router-dom';
import NavigateUser from './components/NavigateUser';

const config = {
  botName: "BioCraft Explorer",
  initialMessages: [createChatBotMessage(`Welcome to BioCraft!`, {
    widget: "startBtn"
  })],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "startBtn",
      widgetFunc: (props) => <StartBtn {...props} />,
    },
    {
      widgetName: "navigate",
      widgetFunc: (props) => <NavigateUser {...props} />,
    },
    
  ]
};

export default config;