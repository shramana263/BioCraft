import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../../../contexts/DataContext';
import axiosClient from '../../../axios-client';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useMessageContext } from '../../../contexts/MessageContext';

const PersonalDetailsUpdate = () => {

    const { isPersonalDetailsUpdateModalOpen, setPersonalDetailsUpdateModalOpen } = useDataContext()
    const [data, setData] = useState(null)
    const [updateButton, setUpdateButton] = useState(false)
    const {message, setMessage}= useMessageContext()

    const fnameRef = useRef();
    const lnameRef = useRef();
    const addressRef = useRef();
    const mobileRef = useRef();
    const genderRef = useRef();
    const dobRef = useRef();

    const handleSubmit = async () => {
        const payload = {
            fname: fnameRef.current.value,
            lname: lnameRef.current.value,
            address: addressRef.current.value,
            contact_no: mobileRef.current.value,
            gender: genderRef.current.value,
            dob: dobRef.current.value
        }
        // console.log(payload)
        const token = localStorage.getItem('ACCESS_TOKEN');
        try {
            const response = await axiosClient.put('http://biodatamakerapi.local/api/update/personaldetails', payload, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${token}`
                },
            });
            if (response.status === 200 || response.status===201) {
                console.log("data updated successfully")
            }
            console.log(response.status)
            setPersonalDetailsUpdateModalOpen(false)
            setMessage('Data Updated Successfully')

        } catch (error) {
            console.error('Error updating data:', error);
            setMessage('Error in Data Updating')
        }


    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosClient.get('/show/personaldetails')

            setData(response.data.data[0])
            // console.log(response.data.data[0])
        }
        fetchData();
    }, [])

    return (

        <>
            <div className='h-screen w-full absolute z-50 flex justify-center items-center top-0 left-0'>


                <div className=' fixed grid grid-rows-[50px_1fr_50px] gap-3 border  sm:p-10 min-[300px]:p-3 pt-8  rounded-xl shadow-xl h-[620px] w-[90%] m-5 items-center md:h-[600px] md:w-[780px] xl:h-[560px] xl:w-[800px] bg-white motion-preset-expand'>
                    <div className='border-b-2 ps-2 pe-2 font-bold sm:text-2xl text-lg pb-2'>
                        Update Your Personal Details
                    </div>
                    <div className='h-full sm:pt-0 w-full flex justify-center items-center overflow-y-scroll'>

                        {
                            data ? <form action="" className='sm:text-lg text-sm gap-2 sm:gap-7 h-full flex flex-col w-full' onChange={() => { setUpdateButton(true) }}>
                                <div className='flex gap-4 flex-col md:flex-row'>
                                    <div className='flex min-[300px]:flex-col sm:flex-row sm:items-center gap-4'>
                                        <label>First Name:</label>
                                        <input type="text" ref={fnameRef} defaultValue={data.fname} className='h-12 sm:w-56 border-2 rounded ps-2 focus:outline-none' />
                                    </div>
                                    <div className='flex min-[300px]:flex-col sm:flex-row sm:items-center gap-4 '>
                                        <label>Last Name:</label>
                                        <input type="text" ref={lnameRef} defaultValue={data.lname} className='h-12 sm:w-56 border-2 rounded ps-2 focus:outline-none' />
                                    </div>
                                </div>
                                <div className='flex gap-4 justify-start min-[300px]:flex-col sm:flex-row sm:items-center w-full'>
                                    <label htmlFor="">Address:</label>
                                    <input type='text' ref={addressRef} defaultValue={data.address} className='border-2 rounded sm:w-5/6 h-12 ps-2 focus:outline-none' />
                                </div>
                                <div className='flex min-[300px]:flex-col sm:flex-row sm:items-center gap-4'>
                                    <label>Mobile Number:</label>
                                    <input type="number" ref={mobileRef} defaultValue={data.contact_no} className='h-12 sm:w-56 border-2 rounded ps-2 focus:outline-none' />
                                </div>
                                <div className='flex min-[300px]:flex-col sm:flex-row sm:items-center gap-4'>
                                    <label>Date of Birth:</label>
                                    <input type="date" ref={dobRef} defaultValue={data.DOB} className='h-12 sm:w-56 border-2 rounded ps-2 pe-2 focus:outline-none' />
                                </div>
                                <div className='flex min-[300px]:flex-col sm:flex-row sm:items-center gap-4'>
                                    <label>Gender:</label>
                                    <input type="text" ref={genderRef} defaultValue={data.gender} className='h-12 sm:w-56 border-2 rounded ps-2 pe-2 focus:outline-none' />
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
                                onClick={() => setPersonalDetailsUpdateModalOpen(false)}>
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

export default PersonalDetailsUpdate
