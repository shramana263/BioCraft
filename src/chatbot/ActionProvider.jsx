import React from 'react';
import NavigateUser from './components/NavigateUser';

widgets: [
    {
      widgetName: "navigate",
      widgetFunc: (props) => <NavigateUser {...props} />,
    },
    
  ]
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const initialAction = () => {
        const message = createChatBotMessage('You can click on the "Try for free" button to navigate to the template panel, or can simply click on the button below.',{
            widget:"navigate"
        });
        updateState(message, "age");
    };
    const initialAction1 = () => {
        const message = createChatBotMessage('Just type in your name to begin.');
        updateState(message, "age");
    };

    const updateState = (message, checker) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
            checker,
        }));
    };
    

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: { initialAction },
                });
            })}
        </div>
    );
};

export default ActionProvider;