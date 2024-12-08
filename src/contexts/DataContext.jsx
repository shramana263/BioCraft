import { createContext, useContext, useState } from "react";
import axiosClient from "../axios-client";
import { useMessageContext } from "./MessageContext";

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
    setNewEntry:()=>{},
    deleteData:null,
    setDeleteData:()=>{},
    deleteUserData:()=>{}

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
    const [deleteData, setDeleteData]= useState(null)
    const {message, setMessage}= useMessageContext()

    const deleteUserData=(option, id)=>{
        if(option=='deleteEducation'){
            axiosClient.delete(`/delete/educationaldetails/${id}`)
            .then((response)=>{
                if(response.status==200)
                {
                    setMessage('Data Deleted Successfully')
                }
            })
            .catch((err)=>{
                console.log("Error : ", err)
                setMessage('Error in Deleting Data')
            })
        }
        if(option=='deleteSpecialization'){
            axiosClient.delete(`/delete/specialization/${id}`)
            .then((response)=>{
                if(response.status==200)
                {
                    setMessage('Data Deleted Successfully')
                }
            })
            .catch((err)=>{
                console.log("Error : ", err)
                setMessage('Error in Deleting Data')
            })
        }
        if(option=='deleteExperience'){
            axiosClient.delete(`/delete/experience/${id}`)
            .then((response)=>{
                if(response.status==200)
                {
                    setMessage('Data Deleted Successfully')
                }
            })
            .catch((err)=>{
                console.log("Error : ", err)
                setMessage('Error in Deleting Data')
            })
        }
        if(option=='deleteSkill'){
            axiosClient.delete(`/delete/skill/${id}`)
            .then((response)=>{
                if(response.status==200)
                {
                    setMessage('Data Deleted Successfully')
                }
            })
            .catch((err)=>{
                console.log("Error : ", err)
                setMessage('Error in Deleting Data')
            })
        }
        if(option=='deleteSocial'){
            axiosClient.delete(`/delete/social-network/${id}`)
            .then((response)=>{
                if(response.status==200)
                {
                    setMessage('Data Deleted Successfully')
                }
            })
            .catch((err)=>{
                console.log("Error : ", err)
                setMessage('Error in Deleting Data')
            })
        }
    }
    
    return(
        <DataContext.Provider value={{
            profileImage, setProfileImage, currentProfileImage, setCurrentProfileImage, isOpenProfileImageUpdateModal, setOpenProfileImageUpdateModal,
            isPersonalDetailsUpdateModalOpen, setPersonalDetailsUpdateModalOpen, isEducationalDetailsUpdateModalOpen, setEducationalDetailsUpdateModalOpen,
            isSpecializationDetailsUpdateModalOpen, setSpecializationDetailsUpdateModalOpen,
            isExperienceDetailsUpdateModalOpen, setExperienceDetailsUpdateModalOpen,
            isSkillDetailsUpdateModalOpen, setSkillDetailsUpdateModalOpen, isSocialDetailsUpdateModalOpen,
            setSocialDetailsUpdateModalOpen,isNewEntry, setNewEntry, deleteData, setDeleteData, deleteUserData
        }} >
            {children}
        </DataContext.Provider>
    )

}

export const useDataContext=()=>useContext(DataContext)