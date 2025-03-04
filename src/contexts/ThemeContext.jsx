import { createContext, useContext, useState } from "react";

const ThemeContext= createContext({
    isDark:null,
    setDark:()=>{}
});

export const ThemeProvider=({children})=>{

    const [isDark, setDark]= useState(false)
    
    return(
        <ThemeContext.Provider value={{ 
            isDark, setDark
         }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext=()=>useContext(ThemeContext)