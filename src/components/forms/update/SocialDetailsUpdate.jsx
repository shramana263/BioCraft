import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../../../contexts/DataContext';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import axiosClient from '../../../axios-client';
import { useMessageContext } from '../../../contexts/MessageContext';

const SocialDetailsUpdate = ({ id }) => {
    const nameRef = useRef();
    const linkRef= useRef()
    const { isSocialDetailsUpdateModalOpen, setSocialDetailsUpdateModalOpen } = useDataContext()
    const [data, setData] = useState(null)
    const [updateButton, setUpdateButton] = useState(false)
    const {message, setMessage}= useMessageContext()

    const handleSubmit = async () => {
        const payload = {
            name: nameRef.current.value,
            link:linkRef.current.value
        }
        // console.log(payload)
        const token = localStorage.getItem('ACCESS_TOKEN');
        try {
            const response = await axiosClient.put(`/update/social-network/${data.id}`, payload, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${token}`
                },
            });
            if (response.status === 200 || response.status===201) {
                console.log("data updated successfully")
                setSocialDetailsUpdateModalOpen(false)
                setMessage('Data Updated Successfully')
            }
            console.log(response.status)

        } catch (error) {
            console.error('Error updated data:', error);
            setMessage('Error in Data Updating')
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            console.log(id)
            const response = await axiosClient.get(`/show/social-network/${id}`)
            console.log(response.data.data)
            setData(response.data.data)
        }
        fetchData();
    }, [])



    return (
        <>
            <div className='h-screen w-full absolute z-50 flex justify-center items-center top-0 left-0'>


                <div className=' fixed grid grid-rows-[50px_1fr_50px] gap-3 border  sm:p-10 min-[300px]:p-3 pt-8  rounded-xl shadow-xl sm:h-[500px] h-[400px] w-[90%] m-5 items-center md:w-[780px] xl:w-[800px] bg-white motion-preset-expand'>

                    <div className='border-b-2 ps-2 pe-2 font-bold sm:text-2xl text-lg pb-2'>
                        Update Your Social Network Details
                    </div>
                    <div className='h-full sm:pt-0 w-full flex justify-center items-center overflow-y-scroll'>
                        {
                            data ?
                                <form action="" className='text-lg gap-7 flex flex-col h-full w-full justify-center' onChange={() => { setUpdateButton(true) }}>

                                    <div className='flex flex-col gap-4 justify-start w-full'>
                                        <label htmlFor="">Name:</label>
                                        <input type='text' ref={nameRef} defaultValue={data.name} className='border-2 rounded w-full h-12 ps-2 focus:outline-none' />
                                    </div>
                                    <div className='flex flex-col gap-4 justify-start w-full'>
                                        <label htmlFor="">Link:</label>
                                        <input type='text' ref={linkRef} defaultValue={data.link} className='border-2 rounded w-full h-12 ps-2 focus:outline-none' />
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
                                onClick={() => setSocialDetailsUpdateModalOpen(false)}>
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


export default SocialDetailsUpdate