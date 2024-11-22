import { createContext, useContext, useState } from "react";

const ProgressContext = createContext({
    isNext:null,
    setNext:()=>{},
    nextButton:false,
    setNextButton:()=>{}

});

export const ProgressProvider = ({ children }) => {

    const [isNext, setNext]=useState(null)
    const [nextButton, setNextButton]=useState(false)

    
    return(
        <ProgressContext.Provider value={{
            isNext, setNext, nextButton, setNextButton
        }} >
            {children}
        </ProgressContext.Provider>
    )

}

export const useProgressContext=()=>useContext(ProgressContext)