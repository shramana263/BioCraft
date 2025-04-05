import React, { useEffect, useRef, useState } from 'react'
import { useDataContext } from '../../../contexts/DataContext';
import axiosClient from '../../../axios-client';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useMessageContext } from '../../../contexts/MessageContext';

const PersonalDetailsUpdate = () => {

    const {  setPersonalDetailsUpdateModalOpen } = useDataContext()
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
           <div className='h-screen w-full absolute z-50 flex justify-center items-center top-0 left-0 dark:bg-black/50'>
    <div className='fixed grid grid-rows-[50px_1fr_50px] gap-3 border dark:border-slate-700 sm:p-10 min-[300px]:p-3 pt-8 rounded-xl shadow-xl h-[620px] w-[90%] m-5 items-center md:h-[600px] md:w-[780px] xl:h-[560px] xl:w-[800px] bg-white dark:bg-slate-800 motion-preset-expand'>
        <div className='border-b-2 dark:border-slate-600 ps-2 pe-2 font-bold sm:text-2xl text-lg pb-2 dark:text-white'>
            Update Your Personal Details
        </div>
        
        <div className='h-full sm:pt-0 w-full flex justify-center items-center overflow-y-scroll dark:scrollbar-dark'>
            {data ? (
                <form action="" className='sm:text-lg text-sm gap-2 sm:gap-7 h-full flex flex-col w-full' onChange={() => { setUpdateButton(true) }}>
                    <div className='flex gap-4 flex-col md:flex-row'>
                        <div className='flex min-[300px]:flex-col sm:flex-row sm:items-center gap-4'>
                            <label className='dark:text-gray-300'>First Name:</label>
                            <input 
                                type="text" 
                                ref={fnameRef} 
                                defaultValue={data.fname} 
                                className='h-12 sm:w-56 border-2 dark:border-slate-600 rounded ps-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
                            />
                        </div>
                        <div className='flex min-[300px]:flex-col sm:flex-row sm:items-center gap-4'>
                            <label className='dark:text-gray-300'>Last Name:</label>
                            <input 
                                type="text" 
                                ref={lnameRef} 
                                defaultValue={data.lname} 
                                className='h-12 sm:w-56 border-2 dark:border-slate-600 rounded ps-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
                            />
                        </div>
                    </div>
                    
                    <div className='flex gap-4 justify-start min-[300px]:flex-col sm:flex-row sm:items-center w-full'>
                        <label className='dark:text-gray-300'>Address:</label>
                        <input 
                            type='text' 
                            ref={addressRef} 
                            defaultValue={data.address} 
                            className='border-2 dark:border-slate-600 rounded sm:w-5/6 h-12 ps-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
                        />
                    </div>
                    
                    <div className='flex min-[300px]:flex-col sm:flex-row sm:items-center gap-4'>
                        <label className='dark:text-gray-300'>Mobile Number:</label>
                        <input 
                            type="number" 
                            ref={mobileRef} 
                            defaultValue={data.contact_no} 
                            className='h-12 sm:w-56 border-2 dark:border-slate-600 rounded ps-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
                        />
                    </div>
                    
                    <div className='flex min-[300px]:flex-col sm:flex-row sm:items-center gap-4'>
                        <label className='dark:text-gray-300'>Date of Birth:</label>
                        <input 
                            type="date" 
                            ref={dobRef} 
                            defaultValue={data.DOB} 
                            className='h-12 sm:w-56 border-2 dark:border-slate-600 rounded ps-2 pe-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
                        />
                    </div>
                    
                    <div className='flex min-[300px]:flex-col sm:flex-row sm:items-center gap-4'>
                        <label className='dark:text-gray-300'>Gender:</label>
                        <input 
                            type="text" 
                            ref={genderRef} 
                            defaultValue={data.gender} 
                            className='h-12 sm:w-56 border-2 dark:border-slate-600 rounded ps-2 pe-2 focus:outline-none dark:bg-slate-900 dark:text-white' 
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
                    onClick={() => setPersonalDetailsUpdateModalOpen(false)}>
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

export default PersonalDetailsUpdate
