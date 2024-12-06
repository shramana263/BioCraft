import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../axios-client";

const PanelContext = createContext({
    isSidebarOpen:null,
    setSidebarOpen:()=>{}

});

export const PanelProvider = ({ children }) => {

    const [isSidebarOpen, setSidebarOpen]=useState(false)
    
    return(
        <PanelContext.Provider value={{
            isSidebarOpen, setSidebarOpen
        }} >
            {children}
        </PanelContext.Provider>
    )

}

export const usePanelContext=()=>useContext(PanelContext)