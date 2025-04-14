import { createContext, useContext, useEffect, useState } from "react";

const MobileContext = createContext({
    isMobile:null,
    setMobile:()=>{},
});

export const MobileProvider = ({ children }) => {

    const [isMobile, setMobile]=useState(false)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);
    
    return(
        <MobileContext.Provider value={{
            isMobile, setMobile
        }} >
            {children}
        </MobileContext.Provider>
    )

}

export const useMobileContext=()=>useContext(MobileContext)