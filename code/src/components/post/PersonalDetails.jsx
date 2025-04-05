import React, { useRef, useState } from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import { useProgressContext } from '../../contexts/ProgressContext';
import { useMessageContext } from '../../contexts/MessageContext';
const PersonalDetails = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div className='border flex justify-center items-center h-full w-full md:p-20 p-8'>
        <div className='border rounded-lg xl:h-[600px] xl:w-[900px] md:h-[600px] md:w-[700px] p-10'>
          <div className='flex flex-col gap-4 mb-12'>
            <div className='flex justify-start items-center md:text-4xl xl:text-5xl font-bold'>Provide Your Personal Details Here</div>
            <div className='flex justify-start items-center text-gray-400 md:text-xl xl:text-2xl'>Click on the + to add the details</div>

          </div>

          <div className='flex-col border-dashed hover:cursor-pointer border-gray-400 text-gray-400 border-2 bg-gray-100 rounded-lg md:h-[250px] md:w-[400px] xl:h-[300px] xl:w-[500px] flex justify-center items-start gap-5 p-10'
            onClick={() => setOpen(true)}>
            <div className='text-green-600 block w-full'>
              <FaCirclePlus size={50} />
            </div>
            <div className='text-xl font-bold'>ADD PERSONAL DETAILS</div>
          </div>
        </div>
        {
          isOpen && <PersonalDetailsForm setOpen={setOpen} />
        }

      </div>
    </>
  )
}

export default PersonalDetails

const PersonalDetailsForm = ({setOpen}) => {

  const {isNext, setNext}= useProgressContext()
  const fnameRef= useRef();
  const lnameRef= useRef();
  const addressRef= useRef();
  const mobileRef= useRef();
  const genderRef= useRef();
  const dobRef= useRef();
  const {message, setMessage}= useMessageContext()

  const handleSubmit=async()=>{
    const payload={
      fname: fnameRef.current.value,
      lname: lnameRef.current.value,
      address:addressRef.current.value,
      contact_no:mobileRef.current.value,
      gender:genderRef.current.value,
      dob:dobRef.current.value
    }
    // console.log(payload)
    const token = localStorage.getItem('ACCESS_TOKEN');
    try {
      const response = await axiosClient.post('http://biodatamakerapi.local/api/store/personaldetails',payload,{
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        },
      });
      if (response.status === 201 || response.status===200) {
        // console.log("data uploaded successfully")
        setNext(1)
        setMessage('Data Uploaded Successfully')
      }
      // console.log(response.status)
      
    } catch (error) {
      // console.error('Error uploading data:', error);
      setMessage('Error in Data Uploading')
    }

    
  }
  return (
    <>
      <div className='absolute top-20 p-10 z-10 rounded-xl shadow-xl h-[700px] w-[90%] m-5 justify-center items-center md:h-[650px] md:w-[780px] xl:h-[700px] xl:w-[900px] bg-white motion-preset-expand '>
        <form action="" className='text-lg gap-7 flex flex-col'>
          <div className='flex gap-4 flex-col md:flex-row'>
            <div className='flex items-center gap-4 '>
              <label>First Name:</label>
              <input type="text" ref={fnameRef} className='h-12 w-56 border-2 rounded ps-2 focus:outline-none' />
            </div>
            <div className='flex items-center gap-4 text-lg'>
              <label>Last Name:</label>
              <input type="text" ref={lnameRef} className='h-12 w-56 border-2 rounded ps-2 focus:outline-none' />
            </div>
          </div>
          <div className='flex gap-4 justify-start items-center w-full'>
            <label htmlFor="">Address:</label>
            <input type='text' ref={addressRef} className='border-2 rounded w-5/6 h-28 ps-2 focus:outline-none' />
          </div>
          <div className='flex items-center gap-4 text-lg'>
            <label>Mobile Number:</label>
            <input type="number" ref={mobileRef} className='h-12 w-56 border-2 rounded ps-2 focus:outline-none' />
          </div>
          <div className='flex items-center gap-4 text-lg'>
            <label>Date of Birth:</label>
            <input type="date" ref={dobRef} className='h-12 w-56 border-2 rounded ps-2 pe-2 focus:outline-none' />
          </div>
          <div className='flex items-center gap-4 text-lg'>
            <label>Gender:</label>
            <input type="text" ref={genderRef} className='h-12 w-56 border-2 rounded ps-2 pe-2 focus:outline-none' />
          </div>
          
          <div className='w-full flex justify-end items-center gap-4'>
            <div className='hover:cursor-pointer text-red-600 border-red-600 border-2 ps-5 pe-5 pt-2 pb-2 rounded-lg'
            onClick={() =>setOpen(false)}>
              Cancel
            </div>
            <div className='hover:cursor-pointer rounded-lg bg-blue-700 ps-5 pe-5 pt-3 pb-3 text-white'
            onClick={handleSubmit}>
              SUBMIT
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
