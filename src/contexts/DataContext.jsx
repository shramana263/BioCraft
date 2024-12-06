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
    isSocialDetailsUpdateModalOpen:null,
    setSocialDetailsUpdateModalOpen:()=>{},  
    isNewEntry:null,
    setNewEntry:()=>{}  

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
    const [ isSocialDetailsUpdateModalOpen,setSocialDetailsUpdateModalOpen] =useState(false)
    const [isNewEntry, setNewEntry]= useState(null)
    
    return(
        <DataContext.Provider value={{
            profileImage, setProfileImage, currentProfileImage, setCurrentProfileImage, isOpenProfileImageUpdateModal, setOpenProfileImageUpdateModal,
            isPersonalDetailsUpdateModalOpen, setPersonalDetailsUpdateModalOpen, isEducationalDetailsUpdateModalOpen, setEducationalDetailsUpdateModalOpen,
            isSpecializationDetailsUpdateModalOpen, setSpecializationDetailsUpdateModalOpen,
            isExperienceDetailsUpdateModalOpen, setExperienceDetailsUpdateModalOpen,
            isSkillDetailsUpdateModalOpen, setSkillDetailsUpdateModalOpen, isSocialDetailsUpdateModalOpen,
            setSocialDetailsUpdateModalOpen,isNewEntry, setNewEntry
        }} >
            {children}
        </DataContext.Provider>
    )

}

export const useDataContext=()=>useContext(DataContext)