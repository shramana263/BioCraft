import React, { useEffect } from 'react'
import PersonalDetails from '../components/PersonalDetails'
import axiosClient from '../axios-client'
import { useProgressContext } from '../contexts.jsx/ProgressContext'
import EducationDetails from '../components/EducationDetails'
import Specialization from '../components/Specialization'
import Experience from '../components/Experience'

const FormBiodata =  () => {

  const {isNext, setNext, nextButton}= useProgressContext();

  const func=()=>{
    return (axiosClient.get('/index/progress'))
        .then(response => {
          console.log(response.data.step)
          setNext(response.data.step)
            return response.data;
        })
        .catch(err => {
            throw err;
        });
  }
  useEffect( ()=>{
      // const response= axiosClient.get('/index/progress')
      // console.log("progress",response?.data)
      func();
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
      </div> 
    </>
  )
}

export default FormBiodata
