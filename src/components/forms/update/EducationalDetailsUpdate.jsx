import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../../../contexts/DataContext';
import axiosClient from '../../../axios-client';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useMessageContext } from '../../../contexts/MessageContext';


const EducationDetailsUpdate = ({id}) => {
  const { setEducationalDetailsUpdateModalOpen } = useDataContext()
  const [data, setData] = useState(null)
  const [updateButton, setUpdateButton]= useState(false)
  const {message, setMessage}= useMessageContext()

  const degreeRef = useRef();
  const school_universityRef = useRef();
  const year_of_passingRef = useRef();
  const percentageRef = useRef();
  const gpaRef = useRef();

  const handleSubmit = async () => {

    const payload = {
      degree: degreeRef.current.value,
      school_university: school_universityRef.current.value,
      year_of_passing: year_of_passingRef.current.value,
      percentage: percentageRef.current.value==0?null: percentageRef.current.value,
      gpa: gpaRef.current.value==0?null : gpaRef.current.value
    }
    // console.log(payload)
    const token = localStorage.getItem('ACCESS_TOKEN');
    try {
      const response = await axiosClient.put(`/update/educationaldetails/${data.id}`, payload, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        },
      });
      if (response.status === 200 || response.status===201) {
        console.log("data updated successfully")
        setEducationalDetailsUpdateModalOpen(false)
        setMessage('Data Updated Successfully')
      }
      console.log(response.status)

    } catch (error) {
      console.error('Error updating data:', error);
      setMessage('Error in Data Updating')
    }

  }

  useEffect(() => {
    // console.log("id: ", id)
    const fetchData = async () => {
      const response = await axiosClient.get(`/show/educationaldetails/${id}`)

      setData(response.data.data)
      // console.log(response.data.data)
    }
    fetchData();
  }, [])



  return (
    <>
      <div className='h-screen w-full absolute z-50 flex justify-center items-center top-0 left-0 dark:bg-black/50'>
    <div className='fixed grid grid-rows-[50px_1fr_50px] gap-3 border dark:border-slate-700 top-20 sm:p-10 min-[300px]:p-3 pt-8 rounded-xl shadow-xl h-[610px] w-[90%] m-5 items-center md:h-[600px] md:w-[780px] xl:h-[550px] xl:w-[800px] bg-white dark:bg-slate-800 motion-preset-expand'>
        <div className='border-b-2 dark:border-slate-600 ps-2 pe-2 font-bold sm:text-2xl text-lg pb-2 dark:text-white'>
            Update Your Educational Details
        </div>
        
        <div className='h-full sm:pt-0 w-full flex justify-center items-center overflow-y-scroll dark:scrollbar-dark'>
            {data ? (
                <form action="" className='sm:text-lg text-sm gap-2 sm:gap-7 h-full flex flex-col w-full' onChange={() => { setUpdateButton(true) }}>
                    <div className='flex gap-4 xl:flex-row flex-col'>
                        <div className='flex sm:flex-row flex-col sm:items-center gap-4'>
                            <label className='dark:text-gray-300'>Degree Name:</label>
                            <input 
                                type="text" 
                                ref={degreeRef} 
                                defaultValue={data.degree} 
                                className='h-12 xl:w-56 w-full border-2 dark:border-slate-600 rounded ps-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
                            />
                        </div>
                        <div className='flex sm:flex-row flex-col sm:items-center gap-4'>
                            <label className='dark:text-gray-300'>School/University Name:</label>
                            <input 
                                type="text" 
                                ref={school_universityRef} 
                                defaultValue={data.school_university} 
                                className='h-12 xl:w-56 w-full border-2 dark:border-slate-600 rounded ps-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
                            />
                        </div>
                    </div>
                    
                    <div className='flex gap-4 justify-start sm:flex-row flex-col sm:items-center w-full'>
                        <label className='dark:text-gray-300'>Year of Passing:</label>
                        <input 
                            type='text' 
                            ref={year_of_passingRef} 
                            defaultValue={data.year_of_passing} 
                            className='border-2 dark:border-slate-600 rounded xl:w-56 w-full h-12 ps-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
                        />
                    </div>
                    
                    <div className='flex sm:flex-row flex-col sm:items-center gap-4'>
                        <label className='dark:text-gray-300'>Percentage marks:</label>
                        <input 
                            type="text" 
                            ref={percentageRef} 
                            defaultValue={data.percentage ? data.percentage : 0} 
                            className='h-12 xl:w-56 w-full border-2 dark:border-slate-600 rounded ps-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
                        />
                    </div>
                    
                    <div className='flex sm:flex-row flex-col sm:items-center gap-4'>
                        <label className='dark:text-gray-300'>Marks in GPA:</label>
                        <input 
                            type="text" 
                            ref={gpaRef} 
                            defaultValue={data.gpa ? data.gpa : 0.0} 
                            className='h-12 xl:w-56 w-full border-2 dark:border-slate-600 rounded ps-2 pe-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
                        />
                    </div>
                </form>
            ) : (
                <div>
                    <AiOutlineLoading3Quarters size={40} className='motion-preset-spin dark:text-purple-400' />
                </div>
            )}
        </div>
        
        <div>
            <div className='w-full flex justify-end items-center gap-4'>
                <div className='hover:cursor-pointer text-red-600 dark:text-red-400 border-red-600 dark:border-red-500 border-2 ps-5 pe-5 pt-2 pb-2 rounded-lg transition-colors duration-300 dark:hover:bg-red-900/30'
                    onClick={() => setEducationalDetailsUpdateModalOpen(false)}>
                    Cancel
                </div>
                {updateButton && (
                    <div className='hover:cursor-pointer rounded-lg bg-blue-700 dark:bg-blue-600 ps-5 pe-5 pt-3 pb-3 text-white transition-colors duration-300 hover:bg-blue-800 dark:hover:bg-blue-700'
                        onClick={handleSubmit}>
                        UPDATE
                    </div>
                )}
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default EducationDetailsUpdate
