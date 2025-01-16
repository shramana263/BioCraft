import React from 'react';
import NavigateUser from './components/NavigateUser';

// widgets: [
//     {
//       widgetName: "navigate",
//       widgetFunc: (props) => <NavigateUser {...props} />,
//     },
    
//   ]
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const initialAction = () => {
        const message = createChatBotMessage('You can click on the "Try for free" button to navigate to the template panel, or can simply click on the button below.',{
            widget:"navigate"
        });
        updateState(message, "age");
    };
    const initialAction1 = () => {
        const message = createChatBotMessage('Click on the button below and fill necessary data to get your biodata.',{
            widget:"navigateToProfile"
        });

        updateState(message);
    };
    const createAcc = () => {
        const message = createChatBotMessage('You need to login to your account before downloading the biodata. If you don\'t have and account, click below to create one!',{
            widget:"navigateToSignUp"
        });

        updateState(message);
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
                    actions: { 
                        initialAction,
                        initialAction1,
                        createAcc
                     },
                });
            })}
        </div>
    );
};

export default ActionProvider;