import { createContext, useContext, useEffect, useState } from "react";

const MessageContext = createContext({
    message: null,
    setMessage: () => { },
});

export const MessageProvider = ({ children }) => {

    const [message, setMessage] = useState(null)
    // const [nextButton, setNextButton]=useState(false)

    // const messagePopup = () => {
        
    // }

    useEffect(()=>{
        if(message!=null){
          setTimeout(() => {
            setMessage(null)
          }, 2000);
        }
      },[message])

    return (
        <MessageContext.Provider value={{
            message, setMessage
        }} >
            {children}
        </MessageContext.Provider>
    )

}

export const useMessageContext = () => useContext(MessageContext)