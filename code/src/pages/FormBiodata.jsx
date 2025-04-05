import React, { useEffect } from 'react'
import axiosClient from '../axios-client'
import { useProgressContext } from '../contexts/ProgressContext'
import PersonalDetails from '../components/post/PersonalDetails';
import EducationDetails from '../components/post/EducationDetails';
import Specialization from '../components/post/Specialization';
import Experience from '../components/post/Experience';
import Skills from '../components/post/Skills';
import SocialNetwork from '../components/post/SocialNetwork';
import Profile from './Profile';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';


const FormBiodata =  () => {

  const {isNext, setNext, nextButton}= useProgressContext();
  const navigate= useNavigate()
  
  useEffect( ()=>{
      
      if(isNext==7){
        navigate("/profile")
      }

      console.log("nextButton, isNext: ",nextButton, isNext)      
  },[isNext,nextButton])
  return (
    <>
      <div>
        {
          isNext==0 &&
        <PersonalDetails/>
        }
        {
          (isNext==1 || (isNext==2 && nextButton==false)) &&
          <EducationDetails/>
        }
        {
          
          ((isNext==2 && nextButton==true) || (isNext==3 && nextButton==false)) &&
          <Specialization/> 
        }
        {
          ((isNext==3 && nextButton==true) || (isNext==4 && nextButton==false)) &&
          <Experience/>
        }
        {
          ((isNext==4 && nextButton==true) || (isNext==5 && nextButton == false)) &&
          <Skills/>
        }
        {
          ((isNext == 5 && nextButton==true)||(isNext==6 && nextButton== false))&&
          <SocialNetwork/>
        }
        {/* {
          isNext==7 &&
            <Navigate to="profile"/>
          
        } */}
      </div> 
    </>
  )
}

export default FormBiodata
