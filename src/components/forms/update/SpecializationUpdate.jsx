import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../../axios-client';
import { useDataContext } from '../../../contexts/DataContext';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const SpecializationUpdate = ({ id }) => {
  const certificateRef = useRef();
  const organisationRef = useRef();

  const { isSpecializationDetailsUpdateModalOpen, setSpecializationDetailsUpdateModalOpen } = useDataContext()
  const [data, setData] = useState(null)
  const [updateButton, setUpdateButton] = useState(false)

  const handleSubmit = async () => {
    const payload = {
      certificate: certificateRef.current.value,
      organisation: organisationRef.current.value
    }
    // console.log(payload)
    const token = localStorage.getItem('ACCESS_TOKEN');
    try {
      const response = await axiosClient.put(`/update/specialization/${data.id}`, payload, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        },
      });
      if (response.status === 200) {
        console.log("data updated successfully")
        setSpecializationDetailsUpdateModalOpen(false)
      }
      console.log(response.status)

    } catch (error) {
      console.error('Error updating data:', error);
    }

  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosClient.get(`/show/specialization/${id}`)

      setData(response.data.data)
      // console.log(response.data.data[0])
    }
    fetchData();
  }, [])



  return (
    <>
      <div className='h-screen w-full absolute z-50 flex justify-center items-center top-0 left-0'>


        <div className=' fixed grid grid-rows-[60px_1fr_50px] gap-3 border  sm:p-10 min-[300px]:p-3 pt-8  rounded-xl shadow-xl h-[450px] w-[90%] m-5 items-center md:w-[780px]  xl:w-[800px] bg-white motion-preset-expand'>
          <div className='border-b-2 ps-2 font-bold pe-2 sm:text-2xl text-lg pb-2'>
            Update Your Specialization Details
          </div>

          <div className='h-full sm:pt-0 w-full flex justify-center items-center overflow-y-scroll'>
            {
              data ?
                <form action="" className='sm:text-lg text-sm gap-2 sm:gap-7 h-full flex flex-col w-full' onChange={() => { setUpdateButton(true) }}>

                  <div className='flex sm:flex-row flex-col gap-4 justify-start sm:items-center w-full'>
                    <label htmlFor="">Name of Certification:</label>
                    <input type='text' ref={certificateRef} defaultValue={data.certificate} className='border-2 rounded w-full h-12 ps-2 focus:outline-none' />
                  </div>
                  <div className='flex sm:flex-row flex-col sm:items-center gap-3 sm:gap-4'>
                    <label>Name of Organisation:</label>
                    <input type="text" ref={organisationRef} defaultValue={data.Organisation} className='h-12 w-full border-2 rounded ps-2 focus:outline-none' />
                  </div>
                </form>
                :
                <div>
                  <AiOutlineLoading3Quarters size={40} className='motion-preset-spin' />
                </div>
            }
          </div>
          <div>
            <div className='w-full flex justify-end items-center gap-4'>
              <div className='hover:cursor-pointer text-red-600 border-red-600 border-2 ps-5 pe-5 pt-2 pb-2 rounded-lg'
                onClick={() => setSpecializationDetailsUpdateModalOpen(false)}>
                Cancel
              </div>
              {
                updateButton &&
                <div className='hover:cursor-pointer rounded-lg bg-blue-700 ps-5 pe-5 pt-3 pb-3 text-white'
                  onClick={handleSubmit}>
                  UPDATE
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default SpecializationUpdate