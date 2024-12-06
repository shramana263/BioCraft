import React, { useEffect, useRef, useState } from 'react'
import { FaCirclePlus, FaPencil } from "react-icons/fa6";
import axiosClient from '../../axios-client';
import axios from 'axios';
import { useProgressContext } from '../../contexts/ProgressContext';
const Specialization = () => {
  const [isOpen, setOpen] = useState(false)
  const [data, setData] = useState(null)
  const { nextButton, isNext, setNextButton } = useProgressContext()
  // const []
  useEffect(() => {
    // console.log("hello")
    axiosClient.get('/index/specialization')
      .then(response => {
        console.log(response.data.data)
        setData(response.data.data)
        // setNext(response.data.step)
        //   return response.data;
      })
      .catch(err => {
        throw err;
      });

  }, [!isOpen])
  return (
    <>
      <div className='border flex justify-center items-center h-full w-full md:p-20 p-8'>
        <div className='border rounded-lg  xl:w-[900px] md:w-[700px] p-10'>
          <div className='flex flex-col gap-4 mb-12'>
            <div className='flex justify-start items-center md:text-4xl xl:text-5xl font-bold'>Provide Your Specialization Details Here</div>
            <div className='flex justify-start items-center text-gray-400 md:text-xl xl:text-2xl'>Click on the + to add the details</div>

          </div>

          <div >


            {
              data && data.map((item, index) => (
                <>
                  <div className='border rounded flex justify-between items-center pt-3 pb-3 ps-7 pe-7 mb-4'>
                    <div>

                      <SpecializationData data={item} />
                    </div>
                    <div className='border p-3 rounded hover:cursor-pointer'><FaPencil /></div>
                  </div>
                </>
              ))
            }


          </div>


          <div className='flex-col border-dashed hover:cursor-pointer border-gray-400 text-gray-400 border-2 bg-gray-100 rounded-lg md:h-[250px] md:w-[400px] xl:h-[300px] xl:w-[500px] flex justify-center items-start gap-5 p-10'
            onClick={() => setOpen(true)}>
            <div className='text-green-600 block w-full'>
              <FaCirclePlus size={50} />
            </div>
            <div className='text-xl font-bold'>ADD SPECIALIZATION DETAILS</div>
          </div>


          <div className='border bg-green-900 text-white rounded-lg p-3 w-20 mt-3 flex justify-center items-center hover:cursor-pointer'
            onClick={() => { setNextButton(true); }}
          >Next</div>


        </div>
        {
          isOpen && <SpecializationForm setOpen={setOpen} setData={setData} />
        }


      </div>
    </>
  )
}

export default Specialization

const SpecializationForm = ({ setOpen, setData }) => {
  const certificateRef = useRef();
  const organisationRef = useRef();

  const handleSubmit = async () => {
    const payload = {
      certificate: certificateRef.current.value,
      organisation: organisationRef.current.value
    }
    // console.log(payload)
    const token = localStorage.getItem('ACCESS_TOKEN');
    try {
      const response = await axiosClient.post('/store/specialization', payload, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        },
      });
      if (response.status === 201) {
        console.log("data uploaded successfully")
        setNextButton(false)
      }
      console.log(response.status)

    } catch (error) {
      console.error('Error uploading data:', error);
    }
    setOpen(false)

  }



  return (
    <>
      <div className='absolute top-30 border p-10 z-10 rounded-xl shadow-xl h-[400px] w-[90%] m-5 justify-center items-center md:h-[400px] md:w-[780px] xl:w-[900px] bg-white motion-preset-expand '>
        <form action="" className='text-lg gap-7 flex flex-col h-full justify-center'>

          <div className='flex gap-4 justify-start items-center w-full'>
            <label htmlFor="">Name of Certification:</label>
            <input type='text' ref={certificateRef} className='border-2 rounded w-full h-12 ps-2 focus:outline-none' />
          </div>
          <div className='flex items-center gap-4 text-lg'>
            <label>Name of Organisation:</label>
            <input type="text" ref={organisationRef} className='h-12 w-full border-2 rounded ps-2 focus:outline-none' />
          </div>


          <div className='w-full flex justify-end items-center gap-4'>
            <div className='hover:cursor-pointer text-red-600 border-red-600 border-2 ps-5 pe-5 pt-2 pb-2 rounded-lg'
              onClick={() => setOpen(false)}>
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

const SpecializationData = ({ data }) => {



  return (
    <>
      <div>
        <span className='font-bold'>Certificate name : </span> <span>{data.certificate}</span>
      </div>
      <div>
        <span className='font-bold'>Organisation name : </span> <span>{data.Organisation}</span>
      </div>
    </>
  )
}
