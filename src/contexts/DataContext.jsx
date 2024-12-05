import { createContext, useContext, useState } from "react";

const DataContext = createContext({
    profileImage:null,
    setProfileImage:()=>{},
    currentProfileImage:null,
    setCurrentProfileImage:()=>{},
    isOpenProfileIMageUpdateModal:null,
    setOpenProfileImageUpdateModal:()=>{},
    isPersonalDetailsUpdateModalOpen:null,
    setPersonalDetailsUpdateModalOpen:()=>{},    
    isEducationalDetailsUpdateModalOpen:null,
    setEducationalDetailsUpdateModalOpen:()=>{},    
    isSpecializationDetailsUpdateModalOpen:null,
    setSpecializationDetailsUpdateModalOpen:()=>{},    
    isExperienceDetailsUpdateModalOpen:null,
    setExperienceDetailsUpdateModalOpen:()=>{},    
    isSkillDetailsUpdateModalOpen:null,
    setSkillDetailsUpdateModalOpen:()=>{},    

});

export const DataProvider = ({ children }) => {

    const [profileImage, setProfileImage] = useState(null)
    const [currentProfileImage, setCurrentProfileImage] = useState(null)
    const [isOpenProfileImageUpdateModal, setOpenProfileImageUpdateModal]= useState(false)
    const [isPersonalDetailsUpdateModalOpen, setPersonalDetailsUpdateModalOpen]= useState(false)
    const [isEducationalDetailsUpdateModalOpen, setEducationalDetailsUpdateModalOpen]= useState(false)
    const [isSpecializationDetailsUpdateModalOpen, setSpecializationDetailsUpdateModalOpen]= useState(false)
    const [isExperienceDetailsUpdateModalOpen, setExperienceDetailsUpdateModalOpen]= useState(false)
    const [isSkillDetailsUpdateModalOpen, setSkillDetailsUpdateModalOpen]= useState(false)
    
    return(
        <DataContext.Provider value={{
            profileImage, setProfileImage, currentProfileImage, setCurrentProfileImage, isOpenProfileImageUpdateModal, setOpenProfileImageUpdateModal,
            isPersonalDetailsUpdateModalOpen, setPersonalDetailsUpdateModalOpen, isEducationalDetailsUpdateModalOpen, setEducationalDetailsUpdateModalOpen,
            isSpecializationDetailsUpdateModalOpen, setSpecializationDetailsUpdateModalOpen,
            isExperienceDetailsUpdateModalOpen, setExperienceDetailsUpdateModalOpen,
            isSkillDetailsUpdateModalOpen, setSkillDetailsUpdateModalOpen
        }} >
            {children}
        </DataContext.Provider>
    )

}

export const useDataContext=()=>useContext(DataContext)