import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client'
import { FaPencil } from 'react-icons/fa6'

const DataPreview = () => {

    const [personalData, setPersonalData] = useState(null)
    const [educationalData, setEducationalData] = useState(null)
    const [specializationData, setSpecializationData] = useState(null)
    const [experienceData, setExperienceData] = useState(null)
    const [skillData, setSkillData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const [response1, response2, response3, response4, response5] = await Promise.all([
                axiosClient.get('/show/personaldetails'),
                axiosClient.get('/index/educationaldetails'),
                axiosClient.get('/index/specialization'),
                axiosClient.get('/index/experience'),
                axiosClient.get('/index/skill')
            ])
            console.log("response1 : ", response1.data.data)
            console.log("response2 : ", response2.data.data)
            console.log("response3 : ", response3.data.data)
            console.log("response4 : ", response4.data.data)
            console.log("response5 : ", response5.data.data)
            setPersonalData(response1.data.data);
            setEducationalData(response2.data.data);
            setSpecializationData(response3.data.data);
            setExperienceData(response4.data.data);
            setSkillData(response5.data.data);
        };

        fetchData();
    }, [])

    return (
        <>
            <div className='flex w-full p-5 h-full flex-col gap-5'>
                <div className='text-4xl font-bold'>Your Details</div>
                {/* Personal details */}
                <div className='border-2 rounded p-3 bg-green-100'>
                    <div className='flex text-3xl mb-3'>
                        Personal Details
                    </div>
                    {
                        personalData && personalData.map((item, index) => (

                            <div key={index} className='flex justify-between items-center border p-3 rounded bg-white'>
                                <div>

                                    <div>
                                        <span className='font-bold'>First Name : </span> <span>{item.fname}</span>
                                    </div>
                                    <div>
                                        <span className='font-bold'>Last Name : </span> <span>{item.lname}</span>
                                    </div>
                                    <div>
                                        <span className='font-bold'>Address: </span> <span>{item.address}</span>
                                    </div>
                                    <div>
                                        <span className='font-bold'>Contact no : </span> <span>{item.contact_no}</span>
                                    </div>
                                    <div>
                                        <span className='font-bold'>Date of Birth : </span> <span>{item.DOB}</span>
                                    </div>
                                    <div>
                                        <span className='font-bold'>Gender : </span> <span>{item.gender}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='border p-3 rounded hover:cursor-pointer'><FaPencil /></div>
                                </div>

                            </div>
                        ))
                    }

                </div>

                {/* Educational details */}
                <div className='border-2 rounded p-3 bg-pink-100'>
                    <div className='flex text-3xl mb-3'>
                        Educational Details
                    </div>
                    <div className='flex flex-col gap-4'>
                        {
                            educationalData && educationalData.map((item, index) => (
                                <div key={index} className='flex justify-between items-center border rounded p-3 bg-white'>
                                    <div>
                                        <div>
                                            <span className='font-bold'>Degree : </span> <span>{item.degree}</span>
                                        </div>
                                        <div>
                                            <span className='font-bold'>School/University : </span> <span>{item.school_university}</span>
                                        </div>
                                        <div>
                                            <span className='font-bold'>Year of Passing : </span> <span>{item.year_of_passing}</span>
                                        </div>
                                        {
                                            educationalData.percentage &&
                                            <div>
                                                <span className='font-bold'>Marks(in percentage) : </span> <span>{item.percentage}</span>
                                            </div>
                                        }
                                        {
                                            educationalData.gpa &&
                                            <div>
                                                <span className='font-bold'>Marks(in GPA) : </span> <span>{item.gpa}</span>
                                            </div>
                                        }
                                    </div>
                                    <div>
                                        <div className='border p-3 rounded hover:cursor-pointer'><FaPencil /></div>
                                    </div>

                                </div>
                            ))
                        }

                    </div>
                </div>

                {/* Specialization details */}
                <div className='border-2 rounded p-3 bg-purple-100'>
                    <div className='flex text-3xl mb-3'>
                        Specialization Details
                    </div>
                    <div className='flex flex-col gap-4'>
                        {
                            specializationData && specializationData.map((item, index) => (
                                <div key={index} className='flex justify-between items-center border rounded p-3 bg-white'>
                                    <div>

                                        <div>
                                            <span className='font-bold'>Certificate name : </span> <span>{item.certificate}</span>
                                        </div>
                                        <div>
                                            <span className='font-bold'>Organisation name : </span> <span>{item.Organisation}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='border p-3 rounded hover:cursor-pointer'><FaPencil /></div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                {/* Experience details */}
                <div className='border-2 rounded p-3 bg-yellow-100'>
                    <div className='flex text-3xl mb-3'>
                        Experience Details
                    </div>
                    <div className='flex flex-col gap-4'>

                        {
                            experienceData && experienceData.map((item, index) => (
                                <div key={index} className='flex justify-between items-center border rounded p-3 bg-white'>
                                    <div>

                                        <div>
                                            <span className='font-bold'>Starting Date : </span> <span>{item.starting_date}</span>
                                        </div>
                                        <div>
                                            <span className='font-bold'>Ending Date : </span> <span>{item.ending_date}</span>
                                        </div>
                                        <div>
                                            <span className='font-bold'>Role/Position: </span> <span>{item.role}</span>
                                        </div>
                                        <div>
                                            <span className='font-bold'>Organisation : </span> <span>{item.organisation}</span>
                                        </div>
                                        <div>
                                            <span className='font-bold'>Description : </span> <span>{item.description}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='border p-3 rounded hover:cursor-pointer'><FaPencil /></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>

                {/* Skills details */}
                <div className='border-2 rounded p-3 bg-rose-100'>
                    <div className='flex text-3xl mb-3'>
                        Skills Details
                    </div>
                    <div className='flex flex-col gap-4'>

                        {
                            skillData && skillData.map((item, index) => (
                                <div key={index} className='flex justify-between items-center border rounded p-3 bg-white'>
                                    <div>

                                        <div>
                                            <span className='font-bold'>Skills : </span> <span>{item.skill}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='border p-3 rounded hover:cursor-pointer'><FaPencil /></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
            <div className='flex w-full  p-3'>
                <div className="flex justify-center items-center w-56 p-3 bg-green-800 text-white font-bold rounded-r-full rounded-l-full">

                    Back to Home
                </div>
            </div>
        </>
    )
}

export default DataPreview
