import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client'
import { FaPencil } from 'react-icons/fa6'
import { useDataContext } from '../contexts/DataContext'
import PersonalDetailsUpdate from '../components/forms/update/PersonalDetailsUpdate'
import EducationDetailsUpdate from '../components/forms/update/EducationalDetailsUpdate'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import SpecializationUpdate from '../components/forms/update/SpecializationUpdate'
import ExperienceUpdate from '../components/forms/update/ExperienceUpdate'
import SkillsUpdate from '../components/forms/update/SkillsUpdate'
import { IoAddCircleOutline } from 'react-icons/io5'
import SocialDetailsUpdate from '../components/forms/update/SocialDetailsUpdate'
import { EducationDetailsForm } from '../components/post/EducationDetails'
import { ExperienceForm } from '../components/post/Experience'
import { SpecializationForm } from '../components/post/Specialization'
import { SkillsForm } from '../components/post/Skills'
import { SocialNetworkForm } from '../components/post/SocialNetwork'
import { MdDeleteForever } from 'react-icons/md'
import DeleteData from '../components/delete/DeleteData'

const DataPreview = () => {

    const [personalData, setPersonalData] = useState(null)
    const [educationalData, setEducationalData] = useState(null)
    const [specializationData, setSpecializationData] = useState(null)
    const [experienceData, setExperienceData] = useState(null)
    const [skillData, setSkillData] = useState(null)
    const [socialNetworkData, setSocialNetworkData] = useState(null)
    const [index, setIndex] = useState(0)
    const { profileImage, setProfileImage,  setOpenProfileImageUpdateModal, currentProfileImage } = useDataContext()
    const { isPersonalDetailsUpdateModalOpen, setPersonalDetailsUpdateModalOpen, isEducationalDetailsUpdateModalOpen, setEducationalDetailsUpdateModalOpen, isSpecializationDetailsUpdateModalOpen, setSpecializationDetailsUpdateModalOpen,
        isExperienceDetailsUpdateModalOpen, setExperienceDetailsUpdateModalOpen, isSkillDetailsUpdateModalOpen, setSkillDetailsUpdateModalOpen,
        isSocialDetailsUpdateModalOpen, setSocialDetailsUpdateModalOpen, isNewEntry, setNewEntry
    } = useDataContext()

    const { deleteData, setDeleteData } = useDataContext()

    const handleProfileImageUpdate = () => {
        setOpenProfileImageUpdateModal(true)
    }
    const isEmpty = (obj) => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    };

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
            setPersonalData(response1.data.data);
            setEducationalData(response2.data.data);
            setSpecializationData(response3.data.data);
            setExperienceData(response4.data.data);
            setSkillData(response5.data.data);
            setProfileImage(response6.data.url);
            setSocialNetworkData(response7.data.data)
        };

        fetchData();
    }, [currentProfileImage, isNewEntry, isPersonalDetailsUpdateModalOpen, isEducationalDetailsUpdateModalOpen, isSpecializationDetailsUpdateModalOpen
        , isExperienceDetailsUpdateModalOpen, isSkillDetailsUpdateModalOpen, isSocialDetailsUpdateModalOpen, deleteData
    ])

    return (
        <>
            <div className='w-full p-6 h-full flex flex-col gap-8 bg-gray-50 dark:bg-slate-900 transition-colors duration-300'>
                {/* Profile Image and Personal Details */}
                <div className='flex md:flex-row min-[300px]:flex-col sm:flex-row justify-center items-center gap-8'>
                    <div className="flex justify-center items-center md:w-[30%] relative">
                        <div className='h-64 w-64 border-4 border-purple-200 dark:border-purple-800 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            {profileImage ? (
                                <img src={profileImage} alt="Profile" className='h-full w-full object-cover' />
                            ) : (
                                <div className='h-full w-full flex justify-center items-center bg-gray-100 dark:bg-slate-800'>
                                    <AiOutlineLoading3Quarters size={80} className='animate-spin text-purple-500 dark:text-purple-400' />
                                </div>
                            )}
                        </div>
                        <div className='absolute bottom-2 right-2 bg-purple-500 dark:bg-purple-600 p-3 rounded-full hover:bg-purple-600 dark:hover:bg-purple-700 transition-colors duration-300 cursor-pointer shadow-md' onClick={handleProfileImageUpdate}>
                            <FaPencil className='text-white' />
                        </div>
                    </div>

                    <div className='border-2 border-purple-100 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 shadow-xl w-full md:w-[70%]'>
                        <div className='flex justify-between items-center text-2xl mb-4'>
                            <div className='font-bold text-purple-700 dark:text-purple-400 uppercase'>
                                Personal Details
                            </div>
                            {isEmpty(personalData) && (
                                <div className='text-purple-500 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 cursor-pointer transition-colors duration-300' onClick={() => setNewEntry('addEducation')}>
                                    <IoAddCircleOutline size={28} />
                                </div>
                            )}
                        </div>

                        {personalData ? (
                            isEmpty(personalData) ? (
                                <div className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-300'>No data Found</div>
                            ) : (
                                personalData.map((item, index) => (
                                    <div key={index} className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300'>
                                        <div className='space-y-2'>
                                            <div><span className='font-semibold text-purple-600 dark:text-purple-400'>First Name:</span> <span className='dark:text-gray-300'>{item.fname}</span></div>
                                            <div><span className='font-semibold text-purple-600 dark:text-purple-400'>Last Name:</span> <span className='dark:text-gray-300'>{item.lname}</span></div>
                                            <div><span className='font-semibold text-purple-600 dark:text-purple-400'>Address:</span> <span className='dark:text-gray-300'>{item.address}</span></div>
                                            <div><span className='font-semibold text-purple-600 dark:text-purple-400'>Contact No:</span> <span className='dark:text-gray-300'>{item.contact_no}</span></div>
                                            <div><span className='font-semibold text-purple-600 dark:text-purple-400'>Date of Birth:</span> <span className='dark:text-gray-300'>{item.DOB}</span></div>
                                            <div><span className='font-semibold text-purple-600 dark:text-purple-400'>Gender:</span> <span className='dark:text-gray-300'>{item.gender}</span></div>
                                        </div>
                                        <div className='p-2 rounded-lg bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 cursor-pointer transition-colors duration-300' onClick={() => setPersonalDetailsUpdateModalOpen(true)}>
                                            <FaPencil className='text-purple-600 dark:text-purple-400' />
                                        </div>
                                    </div>
                                ))
                            )
                        ) : (
                            <div className='flex justify-center items-center'>
                                <AiOutlineLoading3Quarters size={40} className='animate-spin text-purple-500 dark:text-purple-400' />
                            </div>
                        )}
                    </div>
                </div>

                {/* Educational Details */}
                <div className='border-2 border-pink-100 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 shadow-xl'>
                    <div className='flex justify-between items-center text-2xl mb-4'>
                        <div className='font-bold text-pink-700 dark:text-pink-400 uppercase'>
                            Education
                        </div>
                        <div className='text-pink-500 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 cursor-pointer transition-colors duration-300' onClick={() => setNewEntry('addEducation')}>
                            <IoAddCircleOutline size={28} />
                        </div>
                    </div>
                    <div className='space-y-4'>
                        {educationalData ? (
                            isEmpty(educationalData) ? (
                                <div className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-300'>No data Found</div>
                            ) : (
                                educationalData.map((item, index) => (
                                    <div key={index} className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300'>
                                        <div className='space-y-2'>
                                            <div><span className='font-semibold text-pink-600 dark:text-pink-400'>Degree:</span> <span className='dark:text-gray-300'>{item.degree}</span></div>
                                            <div><span className='font-semibold text-pink-600 dark:text-pink-400'>School/University:</span> <span className='dark:text-gray-300'>{item.school_university}</span></div>
                                            <div><span className='font-semibold text-pink-600 dark:text-pink-400'>Year of Passing:</span> <span className='dark:text-gray-300'>{item.year_of_passing}</span></div>
                                            {item.percentage && <div><span className='font-semibold text-pink-600 dark:text-pink-400'>Marks (in %):</span> <span className='dark:text-gray-300'>{item.percentage}</span></div>}
                                            {item.gpa && <div><span className='font-semibold text-pink-600 dark:text-pink-400'>Marks (in GPA):</span> <span className='dark:text-gray-300'>{item.gpa}</span></div>}
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='p-2 rounded-lg bg-pink-100 dark:bg-pink-900 hover:bg-pink-200 dark:hover:bg-pink-800 cursor-pointer transition-colors duration-300' onClick={() => { setDeleteData('deleteEducation'); setIndex(item.id) }}>
                                                <MdDeleteForever className='text-pink-600 dark:text-pink-400' size={20} />
                                            </div>
                                            <div className='p-2 rounded-lg bg-pink-100 dark:bg-pink-900 hover:bg-pink-200 dark:hover:bg-pink-800 cursor-pointer transition-colors duration-300' onClick={() => { setEducationalDetailsUpdateModalOpen(true); setIndex(index) }}>
                                                <FaPencil className='text-pink-600 dark:text-pink-400' />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        ) : (
                            <div className='flex justify-center items-center'>
                                <AiOutlineLoading3Quarters size={40} className='animate-spin text-pink-500 dark:text-pink-400' />
                            </div>
                        )}
                    </div>
                </div>

                {/* Specialization Details */}
                <div className='border-2 border-purple-100 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 shadow-xl'>
                    <div className='flex justify-between items-center text-2xl mb-4'>
                        <div className='font-bold text-purple-700 dark:text-purple-400 uppercase'>
                            Specialization
                        </div>
                        <div className='text-purple-500 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 cursor-pointer transition-colors duration-300' onClick={() => setNewEntry('addSpecialization')}>
                            <IoAddCircleOutline size={28} />
                        </div>
                    </div>
                    <div className='space-y-4'>
                        {specializationData ? (
                            isEmpty(specializationData) ? (
                                <div className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-300'>No data Found</div>
                            ) : (
                                specializationData.map((item, index) => (
                                    <div key={index} className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300'>
                                        <div className='space-y-2'>
                                            <div><span className='font-semibold text-purple-600 dark:text-purple-400'>Certificate Name:</span> <span className='dark:text-gray-300'>{item.certificate}</span></div>
                                            <div><span className='font-semibold text-purple-600 dark:text-purple-400'>Organisation:</span> <span className='dark:text-gray-300'>{item.Organisation}</span></div>
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='p-2 rounded-lg bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 cursor-pointer transition-colors duration-300' onClick={() => { setDeleteData('deleteSpecialization'); setIndex(item.id) }}>
                                                <MdDeleteForever className='text-purple-600 dark:text-purple-400' size={20} />
                                            </div>
                                            <div className='p-2 rounded-lg bg-purple-100 dark:bg-purple-900 hover:bg-purple-200 dark:hover:bg-purple-800 cursor-pointer transition-colors duration-300' onClick={() => { setSpecializationDetailsUpdateModalOpen(true); setIndex(index) }}>
                                                <FaPencil className='text-purple-600 dark:text-purple-400' />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        ) : (
                            <div className='flex justify-center items-center'>
                                <AiOutlineLoading3Quarters size={40} className='animate-spin text-purple-500 dark:text-purple-400' />
                            </div>
                        )}
                    </div>
                </div>

                {/* Experience Details */}
                <div className='border-2 border-yellow-100 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 shadow-xl'>
                    <div className='flex justify-between items-center text-2xl mb-4'>
                        <div className='font-bold text-yellow-700 dark:text-yellow-400 uppercase'>
                            Experience
                        </div>
                        <div className='text-yellow-500 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 cursor-pointer transition-colors duration-300' onClick={() => setNewEntry('addExperience')}>
                            <IoAddCircleOutline size={28} />
                        </div>
                    </div>
                    <div className='space-y-4'>
                        {experienceData ? (
                            isEmpty(experienceData) ? (
                                <div className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-300'>No data Found</div>
                            ) : (
                                experienceData.map((item, index) => (
                                    <div key={index} className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300'>
                                        <div className='space-y-2'>
                                            <div><span className='font-semibold text-yellow-600 dark:text-yellow-400'>Starting Date:</span> <span className='dark:text-gray-300'>{item.starting_date}</span></div>
                                            <div><span className='font-semibold text-yellow-600 dark:text-yellow-400'>Ending Date:</span> <span className='dark:text-gray-300'>{item.ending_date}</span></div>
                                            <div><span className='font-semibold text-yellow-600 dark:text-yellow-400'>Role/Position:</span> <span className='dark:text-gray-300'>{item.role}</span></div>
                                            <div><span className='font-semibold text-yellow-600 dark:text-yellow-400'>Organisation:</span> <span className='dark:text-gray-300'>{item.organisation}</span></div>
                                            <div><span className='font-semibold text-yellow-600 dark:text-yellow-400'>Description:</span> <span className='dark:text-gray-300'>{item.description}</span></div>
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900 hover:bg-yellow-200 dark:hover:bg-yellow-800 cursor-pointer transition-colors duration-300' onClick={() => { setDeleteData('deleteExperience'); setIndex(item.id) }}>
                                                <MdDeleteForever className='text-yellow-600 dark:text-yellow-400' size={20} />
                                            </div>
                                            <div className='p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900 hover:bg-yellow-200 dark:hover:bg-yellow-800 cursor-pointer transition-colors duration-300' onClick={() => { setExperienceDetailsUpdateModalOpen(true); setIndex(index) }}>
                                                <FaPencil className='text-yellow-600 dark:text-yellow-400' />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        ) : (
                            <div className='flex justify-center items-center'>
                                <AiOutlineLoading3Quarters size={40} className='animate-spin text-yellow-500 dark:text-yellow-400' />
                            </div>
                        )}
                    </div>
                </div>

                {/* Skills Details */}
                <div className='border-2 border-rose-100 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 shadow-xl'>
                    <div className='flex justify-between items-center text-2xl mb-4'>
                        <div className='font-bold text-rose-700 dark:text-rose-400 uppercase'>
                            Skills
                        </div>
                        <div className='text-rose-500 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 cursor-pointer transition-colors duration-300' onClick={() => setNewEntry('addSkill')}>
                            <IoAddCircleOutline size={28} />
                        </div>
                    </div>
                    <div className='space-y-4'>
                        {skillData ? (
                            isEmpty(skillData) ? (
                                <div className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-300'>No data Found</div>
                            ) : (
                                skillData.map((item, index) => (
                                    <div key={index} className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300'>
                                        <div className='space-y-2'>
                                            <div><span className='font-semibold text-rose-600 dark:text-rose-400'>Skill:</span> <span className='dark:text-gray-300'>{item.skill}</span></div>
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='p-2 rounded-lg bg-rose-100 dark:bg-rose-900 hover:bg-rose-200 dark:hover:bg-rose-800 cursor-pointer transition-colors duration-300' onClick={() => { setDeleteData('deleteSkill'); setIndex(item.id) }}>
                                                <MdDeleteForever className='text-rose-600 dark:text-rose-400' size={20} />
                                            </div>
                                            <div className='p-2 rounded-lg bg-rose-100 dark:bg-rose-900 hover:bg-rose-200 dark:hover:bg-rose-800 cursor-pointer transition-colors duration-300' onClick={() => { setSkillDetailsUpdateModalOpen(true); setIndex(index) }}>
                                                <FaPencil className='text-rose-600 dark:text-rose-400' />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        ) : (
                            <div className='flex justify-center items-center'>
                                <AiOutlineLoading3Quarters size={40} className='animate-spin text-rose-500 dark:text-rose-400' />
                            </div>
                        )}
                    </div>
                </div>

                {/* Social Network Details */}
                <div className='border-2 border-lime-100 dark:border-slate-700 rounded-lg p-6 bg-white dark:bg-slate-800 shadow-xl'>
                    <div className='flex justify-between items-center text-2xl mb-4'>
                        <div className='font-bold text-lime-700 dark:text-lime-400 uppercase'>
                            Social Networks
                        </div>
                        <div className='text-lime-500 dark:text-lime-400 hover:text-lime-700 dark:hover:text-lime-300 cursor-pointer transition-colors duration-300' onClick={() => setNewEntry('addSocial')}>
                            <IoAddCircleOutline size={28} />
                        </div>
                    </div>
                    <div className='space-y-4'>
                        {socialNetworkData ? (
                            isEmpty(socialNetworkData) ? (
                                <div className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 text-gray-600 dark:text-gray-300'>No data Found</div>
                            ) : (
                                socialNetworkData.map((item, index) => (
                                    <div key={index} className='flex justify-between items-center border p-4 rounded bg-gray-50 dark:bg-slate-700 shadow-sm hover:shadow-md transition-shadow duration-300'>
                                        <div className='min-[300px]:w-[60%] overflow-x-scroll no-scrollbar'>
                                            <div><span className='font-semibold text-lime-600 dark:text-lime-400 capitalize'>{item.name}:</span> <span className='dark:text-gray-300'>{item.link}</span></div>
                                        </div>
                                        <div className='flex gap-3'>
                                            <div className='p-2 rounded-lg bg-lime-100 dark:bg-lime-900 hover:bg-lime-200 dark:hover:bg-lime-800 cursor-pointer transition-colors duration-300' onClick={() => { setDeleteData('deleteSocial'); setIndex(item.id) }}>
                                                <MdDeleteForever className='text-lime-600 dark:text-lime-400' size={20} />
                                            </div>
                                            <div className='p-2 rounded-lg bg-lime-100 dark:bg-lime-900 hover:bg-lime-200 dark:hover:bg-lime-800 cursor-pointer transition-colors duration-300' onClick={() => { setSocialDetailsUpdateModalOpen(true); setIndex(index) }}>
                                                <FaPencil className='text-lime-600 dark:text-lime-400' />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                        ) : (
                            <div className='flex justify-center items-center'>
                                <AiOutlineLoading3Quarters size={40} className='animate-spin text-lime-500 dark:text-lime-400' />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Back to Home Button
            <Link to='/' className='fixed bottom-4 right-4'>
                <div className="flex justify-center items-center w-56 p-3 bg-green-800 dark:bg-green-900 text-white font-bold rounded-full shadow-lg hover:bg-green-900 dark:hover:bg-green-800 transition-colors duration-300">
                    Back to Home
                </div>
            </Link> */}

            {/* Update Modals */}
            {isPersonalDetailsUpdateModalOpen && <PersonalDetailsUpdate />}
            {isEducationalDetailsUpdateModalOpen && <EducationDetailsUpdate id={educationalData[index].id} />}
            {isSpecializationDetailsUpdateModalOpen && <SpecializationUpdate id={specializationData[index].id} />}
            {isExperienceDetailsUpdateModalOpen && <ExperienceUpdate id={experienceData[index].id} />}
            {isSkillDetailsUpdateModalOpen && <SkillsUpdate id={skillData[index].id} />}
            {isSocialDetailsUpdateModalOpen && <SocialDetailsUpdate id={socialNetworkData[index].id} />}

            {/* Add Data Forms */}
            {isNewEntry === 'addEducation' && <EducationDetailsForm setNewEntry={setNewEntry} isNewEntry={isNewEntry} />}
            {isNewEntry === 'addExperience' && <ExperienceForm setNewEntry={setNewEntry} isNewEntry={isNewEntry} />}
            {isNewEntry === 'addSpecialization' && <SpecializationForm setNewEntry={setNewEntry} isNewEntry={isNewEntry} />}
            {isNewEntry === 'addSkill' && <SkillsForm setNewEntry={setNewEntry} isNewEntry={isNewEntry} />}
            {isNewEntry === 'addSocial' && <SocialNetworkForm setNewEntry={setNewEntry} isNewEntry={isNewEntry} />}

            {/* Delete Data Modal */}
            {deleteData && <DeleteData id={index} setDeleteData={setDeleteData} />}
        </>
    )
}

export default DataPreview