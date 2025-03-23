import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
    isDark: null,
    setDark: () => {}
});

export const ThemeProvider = ({ children }) => {
    // Initialize state from localStorage, default to false if not found
    const [isDark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });
    
    // Update localStorage whenever theme changes
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDark));
    }, [isDark]);
    
    return (
        <ThemeContext.Provider value={{ 
            isDark, setDark
         }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext);