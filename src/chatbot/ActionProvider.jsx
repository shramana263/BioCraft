import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const initialAction = () => {
        const message = createChatBotMessage('You can click on the "Try for free" button to navigate to the template panel, or can simply click on the button below.', {
            widget: "navigate"
        });
        updateState(message);
    };

    const helloAction = () => {
        const message = createChatBotMessage('Hello! How can I help you today?', {
            widget:"startBtn"
        });
        updateState(message);
    }

    const initialAction1 = () => {
        const message = createChatBotMessage('Click on the button below and fill necessary data to get your biodata.', {
            widget: "navigateToProfile"
        });
        updateState(message);
    };

    const createAcc = () => {
        const message = createChatBotMessage('You need to login to your account before downloading the biodata. If you don\'t have an account, click below to create one!', {
            widget: "navigateToSignUp"
        });
        updateState(message);
    };

    const updateChatbotState = (message) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    };

    const updateState = (message) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, message],
        }));
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: { initialAction, initialAction1, createAcc, updateChatbotState,helloAction },
                });
            })}
        </div>
    );
};

export default ActionProvider;