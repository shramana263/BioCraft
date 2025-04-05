import { createChatBotMessage } from 'react-chatbot-kit';
import { useStateContext } from '../contexts/StateContext';
import Avatar from './components/Avatar';
import UserAvatar from './components/UserAvatar';
import StartBtn from './components/Start';
import { Navigate } from 'react-router-dom';
import NavigateUser from './components/NavigateUser';
import NavigateToProfile from './components/NavigateToProfile';
import NavigateToSignUp from './components/NavigateToSignUp';

const config = {
  botName: "BioCraft Explorer",
  initialMessages: [createChatBotMessage(`Welcome to BioCraft!`, {
    widget: "startBtn"
  })],
  customComponents: {
    botAvatar: (props) => <Avatar {...props} />,
    userAvatar: (props) => <UserAvatar {...props} />,
    header: () => <div className='bg-purple-950 text-purple-50 py-4 px-4 font-bold'>Chat With BioCraft Assistant</div>
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
    {
      widgetName: "navigateToProfile",
      widgetFunc: (props) => <NavigateToProfile {...props} />,
    },
    {
      widgetName: "navigateToSignUp",
      widgetFunc: (props) => <NavigateToSignUp {...props} />,
    },
    
  ]
};

export default config;