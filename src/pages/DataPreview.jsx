import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client'
import { FaPencil } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { useDataContext } from '../contexts/DataContext'
import PersonalDetailsUpdate from '../components/forms/update/PersonalDetailsUpdate'
import EducationDetailsUpdate from '../components/forms/update/EducationalDetailsUpdate'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import SpecializationUpdate from '../components/forms/update/SpecializationUpdate'
import ExperienceUpdate from '../components/forms/update/ExperienceUpdate'
import SkillsUpdate from '../components/forms/update/SkillsUpdate'
import { IoAddCircleOutline } from 'react-icons/io5'
import SocialDetailsUpdate from '../components/forms/update/SocialDetailsUpdate'
import EducationDetails, { EducationDetailsForm } from '../components/post/EducationDetails'
import { ExperienceForm } from '../components/post/Experience'
import { SpecializationForm } from '../components/post/Specialization'
import { SkillsForm } from '../components/post/Skills'
import { SocialNetworkForm } from '../components/post/SocialNetwork'
import { MdDeleteForever } from 'react-icons/md'

const DataPreview = () => {

    const [personalData, setPersonalData] = useState(null)
    const [educationalData, setEducationalData] = useState(null)
    const [specializationData, setSpecializationData] = useState(null)
    const [experienceData, setExperienceData] = useState(null)
    const [skillData, setSkillData] = useState(null)
    const [socialNetworkData, setSocialNetworkData] = useState(null)
    const [index, setIndex] = useState(0)
    const { profileImage, setProfileImage, isOpenProfileIMageUpdateModal, setOpenProfileImageUpdateModal, currentProfileImage } = useDataContext()
    const { isPersonalDetailsUpdateModalOpen, setPersonalDetailsUpdateModalOpen, isEducationalDetailsUpdateModalOpen, setEducationalDetailsUpdateModalOpen, isSpecializationDetailsUpdateModalOpen, setSpecializationDetailsUpdateModalOpen,
        isExperienceDetailsUpdateModalOpen, setExperienceDetailsUpdateModalOpen, isSkillDetailsUpdateModalOpen, setSkillDetailsUpdateModalOpen,
        isSocialDetailsUpdateModalOpen, setSocialDetailsUpdateModalOpen, isNewEntry, setNewEntry
    } = useDataContext()
    const navigate = useNavigate();

    const handleProfileImageUpdate = () => {
        // navigate('/update-profile-image');
        setOpenProfileImageUpdateModal(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            const [response1, response2, response3, response4, response5, response6, response7] = await Promise.all([
                axiosClient.get('/show/personaldetails'),
                axiosClient.get('/index/educationaldetails'),
                axiosClient.get('/index/specialization'),
                axiosClient.get('/index/experience'),
                axiosClient.get('/index/skill'),
                axiosClient.get('/show/profile-image'),
                axiosClient.get('/index/social-network')
            ])
            // console.log("response1 : ", response1.data.data)
            // console.log("response2 : ", response2.data.data)
            // console.log("response3 : ", response3.data.data[0].id)
            // console.log("response4 : ", response4.data.data)
            // console.log("response6 : ", response7.data.data[0])
            setPersonalData(response1.data.data);
            setEducationalData(response2.data.data);
            setSpecializationData(response3.data.data);
            setExperienceData(response4.data.data);
            setSkillData(response5.data.data);
            setProfileImage(response6.data.url);
            setSocialNetworkData(response7.data.data)
        };

        fetchData();
    }, [currentProfileImage, isNewEntry])

    return (
        <>
            <div className='flex w-full p-5 h-full flex-col gap-5'>
                {/* <div className='text-4xl font-bold ps-3 pe-3 max-[300px]:flex max-[300px]:justify-center'>Your Information</div> */}
                {/* Profile Image */}

                {/* Personal details */}
                <div className='flex md:flex-row min-[300px]:flex-col sm:flex-row justify-center items-center gap-5'>
                    <div className="flex justify-center items-center md:w-[30%]">

                        <div className='h-56 w-56 border-2 border-black rounded-full overflow-hidden motion-preset-pop'>
                            {
                                profileImage ?
                                    <img src={profileImage} alt="hello" className='h-full w-full' />
                                    :
                                    <div className='h-full w-full flex justify-center items-center'>
                                        <AiOutlineLoading3Quarters size={80} className='motion-preset-spin' />
                                    </div>
                            }
                        </div>
                        {/* <div className=''> */}
                        <div className='border p-3 rounded-full hover:cursor-pointer absolute bg-purple-200' onClick={handleProfileImageUpdate}><FaPencil /></div>
                        {/* </div> */}
                    </div>

                    <div className='border-2 rounded p-3 bg-green-100 sm:w-[70%] w-full motion-preset-slide-left'>

                        <div className='flex text-3xl mb-3'>
                            Personal Details
                        </div>


                        {/* <div className='flex justify-center items-center '> */}
                        {
                            personalData ? personalData.map((item, index) => (

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
                                        <div className='border p-3 rounded hover:cursor-pointer'
                                            onClick={() => { setPersonalDetailsUpdateModalOpen(prev => true) }}
                                        ><FaPencil /></div>
                                    </div>

                                </div>
                            ))
                                :
                                <div>
                                    <AiOutlineLoading3Quarters size={40} className='motion-preset-spin' />
                                </div>
                        }


                        {/* </div> */}


                    </div>
                </div>

                {/* Educational details */}
                <div className='border-2 rounded p-3 bg-pink-100 motion-preset-slide-left'>
                    <div className='flex justify-between items-center text-3xl mb-3'>
                        <div className='flex justify-center items-center'>

                            Education
                        </div>
                        <div className='flex justify-center items-center' onClick={() => setNewEntry('addEducation')}>
                            <IoAddCircleOutline />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {
                            educationalData ? educationalData.map((item, index) => (
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
                                    <div className='flex gap-3'>
                                        <div className='border p-3 rounded hover:cursor-pointer'
                                            onClick={() => { setEducationalDetailsUpdateModalOpen(true); setIndex(index) }}
                                        ><MdDeleteForever size={20} /></div>
                                        <div className='border p-3 rounded hover:cursor-pointer'
                                            onClick={() => { setEducationalDetailsUpdateModalOpen(true); setIndex(index) }}
                                        ><FaPencil /></div>
                                    </div>

                                </div>
                            ))
                                :
                                <div>
                                    <AiOutlineLoading3Quarters size={40} className='motion-preset-spin' />
                                </div>
                        }

                    </div>
                </div>

                {/* Specialization details */}
                <div className='border-2 rounded p-3 bg-purple-100 motion-preset-slide-left'>
                    <div className='flex justify-between items-center text-3xl mb-3'>
                        <div className='flex justify-center items-center'>

                            Specialization
                        </div>
                        <div className='flex justify-center items-center' onClick={() => setNewEntry('addSpecialization')}>
                            <IoAddCircleOutline />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {
                            specializationData ? specializationData.map((item, index) => (
                                <div key={index} className='flex justify-between items-center border rounded p-3 bg-white'>
                                    <div>

                                        <div>
                                            <span className='font-bold'>Certificate name : </span> <span>{item.certificate}</span>
                                        </div>
                                        <div>
                                            <span className='font-bold'>Organisation name : </span> <span>{item.Organisation}</span>
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='border p-3 rounded hover:cursor-pointer'
                                            onClick={() => { setEducationalDetailsUpdateModalOpen(true); setIndex(index) }}
                                        ><MdDeleteForever size={20} /></div>
                                        <div className='border p-3 rounded hover:cursor-pointer'
                                            onClick={() => { setSpecializationDetailsUpdateModalOpen(true); setIndex(index) }}
                                        ><FaPencil /></div>
                                    </div>
                                </div>
                            ))
                                :
                                <div>
                                    <AiOutlineLoading3Quarters size={40} className='motion-preset-spin' />
                                </div>
                        }

                    </div>
                </div>

                {/* Experience details */}
                <div className='border-2 rounded p-3 bg-yellow-100 motion-preset-slide-left'>
                    <div className='flex justify-between items-center text-3xl mb-3'>
                        <div className='flex justify-center items-center'>

                            Experience
                        </div>
                        <div className='flex justify-center items-center' onClick={() => setNewEntry('addExperience')}>
                            <IoAddCircleOutline />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>

                        {
                            experienceData ? experienceData.map((item, index) => (
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
                                    <div className='flex gap-3'>
                                        <div className='border p-3 rounded hover:cursor-pointer'
                                            onClick={() => { setEducationalDetailsUpdateModalOpen(true); setIndex(index) }}
                                        ><MdDeleteForever size={20} /></div>
                                        <div className='border p-3 rounded hover:cursor-pointer'
                                            onClick={() => { setExperienceDetailsUpdateModalOpen(true); setIndex(index) }}

                                        ><FaPencil /></div>
                                    </div>
                                </div>
                            ))
                                :
                                <div>
                                    <AiOutlineLoading3Quarters size={40} className='motion-preset-spin' />
                                </div>
                        }
                    </div>

                </div>

                {/* Skills details */}
                <div className='border-2 rounded p-3 bg-rose-100 motion-preset-slide-left'>
                    <div className='flex justify-between items-center text-3xl mb-3'>
                        <div className='flex justify-center items-center'>

                            Skills
                        </div>
                        <div className='flex justify-center items-center' onClick={() => setNewEntry('addSkill')}>
                            <IoAddCircleOutline />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>

                        {
                            skillData ? skillData.map((item, index) => (
                                <div key={index} className='flex justify-between items-center border rounded p-3 bg-white'>
                                    <div>

                                        <div>
                                            <span className='font-bold'>Skills : </span> <span>{item.skill}</span>
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='border p-3 rounded hover:cursor-pointer'
                                            onClick={() => { setEducationalDetailsUpdateModalOpen(true); setIndex(index) }}
                                        ><MdDeleteForever size={20} /></div>
                                        <div className='border p-3 rounded hover:cursor-pointer'
                                            onClick={() => { setSkillDetailsUpdateModalOpen(true); setIndex(index) }}

                                        ><FaPencil /></div>
                                    </div>
                                </div>
                            ))
                                :
                                <div>
                                    <AiOutlineLoading3Quarters size={40} className='motion-preset-spin' />
                                </div>
                        }
                    </div>

                </div>
                {/* Social network details */}
                <div className='border-2 rounded p-3 bg-lime-100 motion-preset-slide-left'>
                    <div className='flex justify-between items-center text-3xl mb-3'>
                        <div className='flex justify-center items-center'>

                            Social Networks
                        </div>
                        <div className='flex justify-center items-center' onClick={() => setNewEntry('addSocial')}>
                            <IoAddCircleOutline />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>

                        {
                            socialNetworkData ? socialNetworkData.map((item, index) => (
                                <div key={index} >
                                    {
                                        // item.github &&
                                        <div className='flex justify-between items-center border rounded p-3 bg-white'>

                                            <div className='min-[300px]:w-[60%] overflow-x-scroll no-scrollbar'>

                                                <div>
                                                    <span className='font-bold capitalize '>{item.name} : </span> <span>{item.link}</span>
                                                </div>
                                            </div>
                                            <div className='flex gap-3'>
                                                <div className='border p-3 rounded hover:cursor-pointer'
                                                    onClick={() => { setEducationalDetailsUpdateModalOpen(true); setIndex(index) }}
                                                ><MdDeleteForever size={20} /></div>
                                                <div className='border p-3 rounded hover:cursor-pointer'
                                                    onClick={() => { setSocialDetailsUpdateModalOpen(true); setIndex(index) }}

                                                ><FaPencil /></div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            ))
                                :
                                <div>
                                    <AiOutlineLoading3Quarters size={40} className='motion-preset-spin' />
                                </div>
                        }
                    </div>

                </div>
            </div>
            <Link to='/' className='flex w-full p-3'>
                <div className="flex justify-center max-[300px]:w-full items-center w-56 p-3 bg-green-800 text-white font-bold rounded-r-full rounded-l-full">

                    Back to Home
                </div>
            </Link>

            {/* Personal-details-update form */}
            {
                isPersonalDetailsUpdateModalOpen &&
                <div className='w-full flex justify-center items-center'>
                    <PersonalDetailsUpdate />
                </div>
            }

            {/* Educational-details-update form */}
            {
                isEducationalDetailsUpdateModalOpen &&
                <div className='w-full flex justify-center items-center'>
                    <EducationDetailsUpdate id={educationalData[index].id} />
                </div>
            }

            {/* Specialization-details-update form */}
            {
                isSpecializationDetailsUpdateModalOpen &&
                <div className='w-full flex justify-center items-center'>
                    <SpecializationUpdate id={specializationData[index].id} />
                </div>
            }

            {/* Experience-details-update form */}
            {
                isExperienceDetailsUpdateModalOpen &&
                <div className='w-full flex justify-center items-center'>
                    <ExperienceUpdate id={experienceData[index].id} />
                </div>
            }

            {/* Skills-details-update form */}
            {
                isSkillDetailsUpdateModalOpen &&
                <div className='w-full flex justify-center items-center'>
                    <SkillsUpdate id={skillData[index].id} />
                </div>
            }
            {/* Skills-details-update form */}
            {
                isSocialDetailsUpdateModalOpen &&
                <div className='w-full flex justify-center items-center'>
                    <SocialDetailsUpdate id={socialNetworkData[index].id} />
                </div>
            }


            {/* Add Data Forms */}
            {
                isNewEntry == 'addEducation' &&
                <div className='fixed top-0 left-0 bg-white w-full flex justify-center items-center'>

                    <EducationDetailsForm setNewEntry={setNewEntry} isNewEntry={isNewEntry} />



                </div>
            }
            {
                isNewEntry == 'addExperience' &&
                <div className='fixed top-0 left-0 bg-white w-full flex justify-center items-center'>

                    <ExperienceForm setNewEntry={setNewEntry} isNewEntry={isNewEntry} />



                </div>
            }
            {
                isNewEntry == 'addSpecialization' &&
                <div className='fixed top-0 left-0 bg-white w-full flex justify-center items-center'>

                    <SpecializationForm setNewEntry={setNewEntry} isNewEntry={isNewEntry} />



                </div>
            }
            {
                isNewEntry == 'addSkill' &&
                <div className='fixed top-0 left-0 bg-white w-full flex justify-center items-center'>

                    <SkillsForm setNewEntry={setNewEntry} isNewEntry={isNewEntry} />



                </div>
            }
            {
                isNewEntry == 'addSocial' &&
                <div className='fixed top-0 left-0 bg-white w-full flex justify-center items-center'>

                    <SocialNetworkForm setNewEntry={setNewEntry} isNewEntry={isNewEntry} />



                </div>
            }




        </>
    )
}

export default DataPreview
