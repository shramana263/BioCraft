import React from 'react'
import PersonalDetails from '../components/PersonalDetails'
import axiosClient from '../axios-client'

const FormBiodata = () => {

  // const token = localStorage.getItem('ACCESS_TOKEN');
  // try{
  //   const response=await axiosClient.get('http://biodatamakerapi.local/api/index/progress',{
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Authorization': `Bearer ${token}`
  //     },
  //   })
  //   console.log("progress",response.data)
    
  // }
  // catch(error){
  //   console.log(error)
  // }
  return (
    <>
      <div>
        <PersonalDetails/>
      </div> 
    </>
  )
}

export default FormBiodata
