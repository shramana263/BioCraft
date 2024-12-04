import { createContext, useContext, useState } from "react";

const MobileContext = createContext({
    isMobile:null,
    setMobile:()=>{},
});

export const MobileProvider = ({ children }) => {

    const [isMobile, setMobile]=useState(false)
    // const [nextButton, setNextButton]=useState(false)

    
    return(
        <MobileContext.Provider value={{
            isMobile, setMobile
        }} >
            {children}
        </MobileContext.Provider>
    )

}

export const useMobileContext=()=>useContext(MobileContext)