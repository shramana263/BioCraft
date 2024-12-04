import { createContext, useContext, useState } from "react";

const DataContext = createContext({
    profileImage:null,
    setProfileImage:()=>{},
    currentProfileImage:null,
    setCurrentProfileImage:()=>{},
    isOpenProfileIMageUpdateModal:null,
    setOpenProfileImageUpdateModal:()=>{}    

});

export const DataProvider = ({ children }) => {

    const [profileImage, setProfileImage] = useState(null)
    const [currentProfileImage, setCurrentProfileImage] = useState(null)
    const [isOpenProfileImageUpdateModal, setOpenProfileImageUpdateModal]= useState(false)

    
    return(
        <DataContext.Provider value={{
            profileImage, setProfileImage, currentProfileImage, setCurrentProfileImage, isOpenProfileImageUpdateModal, setOpenProfileImageUpdateModal
        }} >
            {children}
        </DataContext.Provider>
    )

}

export const useDataContext=()=>useContext(DataContext)