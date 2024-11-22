import { createContext, useContext, useState } from "react";

const ProgressContext = createContext({
    isNext:null,
    setNext:()=>{}

});

export const ProgressProvider = ({ children }) => {

    const [isNext, setNext]=useState(null)

    
    return(
        <ProgressContext.Provider value={{
            isNext, setNext
        }} >
            {children}
        </ProgressContext.Provider>
    )

}

export const useStateContext=()=>useContext(StateContext)