import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../../../contexts/DataContext';
import axiosClient from '../../../axios-client';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const SkillsUpdate = ({ id }) => {
    const skillRef = useRef();
    const { isSkillDetailsUpdateModalOpen, setSkillDetailsUpdateModalOpen } = useDataContext()
    const [data, setData] = useState(null)
    const [updateButton, setUpdateButton] = useState(false)
    const handleSubmit = async () => {
        const payload = {
            skill: skillRef.current.value
        }
        // console.log(payload)
        const token = localStorage.getItem('ACCESS_TOKEN');
        try {
            const response = await axiosClient.put(`/store/skill/${data.id}`, payload, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${token}`
                },
            });
            if (response.status === 200) {
                console.log("data updated successfully")
                setSkillDetailsUpdateModalOpen(false)

            }
            console.log(response.status)

        } catch (error) {
            console.error('Error updated data:', error);
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosClient.get(`/show/skill/${id}`)

            setData(response.data.data)
        }
        fetchData();
    }, [])



    return (
        <>
            <div className='h-screen w-full absolute z-50 flex justify-center items-center top-0 left-0'>


                <div className=' fixed grid grid-rows-[50px_1fr_50px] gap-3 border  sm:p-10 min-[300px]:p-3 pt-8  rounded-xl shadow-xl h-[300px] w-[90%] m-5 items-center md:w-[780px] xl:w-[800px] bg-white motion-preset-expand'>

                    <div className='border-b-2 ps-2 pe-2 font-bold sm:text-2xl text-lg pb-2'>
                        Update Your Skill Details
                    </div>
                    <div className='h-full sm:pt-0 w-full flex justify-center items-center overflow-y-scroll'>
                        {
                            data ?
                                <form action="" className='text-lg gap-7 flex flex-col h-full w-full justify-center'>

                                    <div className='flex flex-col gap-4 justify-start w-full'>
                                        <label htmlFor="">Your Skills:</label>
                                        <input type='text' ref={skillRef} defaultValue={data.skill} className='border-2 rounded w-full h-12 ps-2 focus:outline-none' />
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
                                onClick={() => setSkillDetailsUpdateModalOpen(false)}>
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

export default SkillsUpdate
