import React, { useEffect, useRef, useState } from 'react'
import { FaCirclePlus, FaPencil } from "react-icons/fa6";
import axiosClient from '../../axios-client';
import { useProgressContext } from '../../contexts/ProgressContext';
import { useMessageContext } from '../../contexts/MessageContext';
const Skills = () => {
  const [isOpen, setOpen] = useState(false)
  const [data, setData] = useState(null)
  const { setNextButton } = useProgressContext()
  // const []

  // const handleFinish = () => {
  //   // console.log("handlefinish")
  //   navigate('/datapreview');
  // }


  useEffect(() => {
    // console.log("hello")
    axiosClient.get('/index/skill')
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
            <div className='flex justify-start items-center md:text-4xl xl:text-5xl font-bold'>Provide Your Skills Details Here</div>
            <div className='flex justify-start items-center text-gray-400 md:text-xl xl:text-2xl'>Click on the + to add the details</div>

          </div>

          <div >


            {
              data && data.map((item, index) => (
                <>
                  <div className='border rounded flex justify-between items-center pt-3 pb-3 ps-7 pe-7 mb-4'>
                    <div>

                      <SkillsData data={item} />
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
            <div className='text-xl font-bold'>ADD SKILLS DETAILS</div>
          </div>


          {/* <div className='border bg-green-900 text-white rounded-lg p-3 w-20 mt-3 flex justify-center items-center hover:cursor-pointer'
            onClick={handleFinish}
          >Finish</div> */}

          <div className='border bg-green-900 text-white rounded-lg p-3 w-20 mt-3 flex justify-center items-center hover:cursor-pointer'
            onClick={() => { setNextButton(true); }}
          >Next</div>


        </div>
        {
          isOpen && <SkillsForm setOpen={setOpen} setData={setData} isOpen={isOpen} />
        }


      </div>
    </>
  )
}

export default Skills

export const SkillsForm = ({ setOpen, setData, isOpen, isNewEntry, setNewEntry }) => {
  const skillRef = useRef();
  const {message, setMessage}= useMessageContext()

  const handleSubmit = async () => {
    const payload = {
      skill: skillRef.current.value
    }
    // console.log(payload)
    const token = localStorage.getItem('ACCESS_TOKEN');
    try {
      const response = await axiosClient.post('/store/skill', payload, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        },
      });
      if (response.status === 201 || response.status===200) {
        console.log("data uploaded successfully")
        setNextButton(false)
        setMessage('Data Uploaded Successfully')
      }
    

    } catch (error) {
      console.error('Error uploading data:', error);
      setMessage('Error in Uploading data')
    }
    if (isOpen == true) {

      setOpen(false)
    }
    if (isNewEntry != null) {

      setNewEntry(null)
    }

  }



  return (
    <>
      <div className='h-screen w-full absolute z-50 flex justify-center items-center top-0 left-0'>


        <div className=' fixed grid grid-rows-[50px_1fr_50px] gap-3 border  sm:p-10 min-[300px]:p-3 pt-8  rounded-xl shadow-xl h-[300px] w-[90%] m-5 items-center md:w-[780px] xl:w-[800px] bg-white motion-preset-expand'>

          <div className='border-b-2 ps-2 pe-2 font-bold sm:text-2xl text-lg pb-2'>
            Add Skill Details
          </div>
          <div className='h-full sm:pt-0 w-full flex justify-center items-center overflow-y-scroll'>
            
                <form action="" className='text-lg gap-7 flex flex-col h-full w-full justify-center'>

                  <div className='flex flex-col gap-4 justify-start w-full'>
                    <label htmlFor="">Your Skills:</label>
                    <input type='text' ref={skillRef}  className='border-2 rounded w-full h-12 ps-2 focus:outline-none' />
                  </div>


                </form>
            
          </div>
          {
            isOpen &&
            <div>
              <div className='w-full flex justify-end items-center gap-4'>
                <div className='hover:cursor-pointer text-red-600 border-red-600 border-2 ps-5 pe-5 pt-2 pb-2 rounded-lg'
                  onClick={() => { setOpen(false) }}>
                  Cancel
                </div>
                {

                  <div className='hover:cursor-pointer rounded-lg bg-blue-700 ps-5 pe-5 pt-3 pb-3 text-white'
                    onClick={handleSubmit}>
                    SUBMIT
                  </div>
                }
              </div>
            </div>
          }
          {
            isNewEntry == 'addSkill' &&
            <div>
              <div className='w-full flex justify-end items-center gap-4'>
                <div className='hover:cursor-pointer text-red-600 border-red-600 border-2 ps-5 pe-5 pt-2 pb-2 rounded-lg'
                  onClick={() => { setNewEntry(null) }}>
                  Cancel
                </div>
                {

                  <div className='hover:cursor-pointer rounded-lg bg-blue-700 ps-5 pe-5 pt-3 pb-3 text-white'
                    onClick={handleSubmit}>
                    SUBMIT
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

const SkillsData = ({ data }) => {



  return (
    <>
      <div>
        <span>Skills : </span> <span>{data.skill}</span>
      </div>
    </>
  )
}
