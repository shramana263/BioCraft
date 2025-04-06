import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useStateContext } from '../contexts/StateContext'
import axiosClient from '../axios-client'
import { useDataContext } from '../contexts/DataContext'
import TemplateDecider from '../components/TemplateDecider'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { FaPencil } from 'react-icons/fa6'

const bio_templates = [
  {
    id: 1,
    src: "https://cdn-images.zety.com/pages/biodata_format_zety_us_1.jpg"
  },
  {
    id: 2,
    src: "https://resumekraft.com/wp-content/uploads/2023/07/Job-Biodata-template-2-724x1024.jpg"
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/bd/d9/a7/bdd9a772c5609f417fbe2141334147f5.jpg"
  },
  {
    id: 4,
    src: "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/white-biodata-format-for-job-template-93y7sc1c0b2e45.webp"
  }
]

const MakeBiodata = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='bg-indigo-50 dark:bg-slate-900 font-bold text-4xl w-full flex pt-7 justify-center items-center text-purple-950 dark:text-indigo-200'>
        Templates
      </div>
      <div className='flex justify-center items-center bg-indigo-50 dark:bg-slate-900 h-full p-20 pt-0'>
        {/* <div className='grid md:grid-cols-3 min-[412px]:grid-cols-1  gap-10'> */}
        <div className='flex flex-wrap justify-center items-center gap-10'>
          {
            bio_templates && <FormTemplates bio_template={bio_templates}
            // personalData={personalData}
            //       educationalData={educationalData}
            //       specializationData={specializationData}
            //       experienceData={experienceData}
            //       skillData={skillData}
            //       profileImage={profileImage}
            />
          }
        </div>

      </div>

    </>
  )
}

export default MakeBiodata
const isEmpty = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

const FormTemplates = ({ bio_template }) => {
  let responses = []
  let [
    response1,
    response2,
    response3,
    response4,
    response5,
    response6
  ] = [];
  const [personalData, setPersonalData] = useState(null)
  const [educationalData, setEducationalData] = useState(null)
  const [specializationData, setSpecializationData] = useState(null)
  const [experienceData, setExperienceData] = useState(null)
  const [skillData, setSkillData] = useState(null)
  const { profileImage, setProfileImage, isOpenProfileIMageUpdateModal, setOpenProfileImageUpdateModal, currentProfileImage } = useDataContext()

  const [socialNetworkData, setSocialNetworkData] = useState(null)
  const [isFetched, setFetched] = useState(false)


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
      // console.log("response6 : ", response6)
      setPersonalData(response1.data.data);
      setEducationalData(response2.data.data);
      setSpecializationData(response3.data.data);
      setExperienceData(response4.data.data);
      setSkillData(response5.data.data);
      setProfileImage(response6.data.url);
      setSocialNetworkData(response7.data.data)
      setFetched(true)
    };

    fetchData();
  }, [currentProfileImage])

  return (
    <>
      {bio_template.map((img, index) => (
        <>
          <div key={index} className='h-[600px] w-[400px] group relative'>
            <img src={img.src} alt="" className='h-full w-full' />
            <div className='absolute invisible group-hover:visible h-full w-full bg-slate-600/10 dark:bg-slate-900/30 top-0 backdrop-blur-sm'>
              <div className='invisible group-hover:visible h-full flex justify-center items-center hover:cursor-pointer'>
                {console.log("data : ", socialNetworkData)}

                <div>
                  <div>
                    {!isEmpty(socialNetworkData) && (
                      <NavLink
                        to={{
                          pathname: `/template-${img.id}`,
                        }}
                        state={{ 
                          personalData: personalData[0], 
                          educationalData, 
                          specializationData, 
                          experienceData, 
                          skillData, 
                          profileImage, 
                          socialNetworkData 
                        }}
                        className='border-4 rounded-r-full rounded-l-full p-2 text-xl border-black dark:border-white text-black dark:text-white font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-colors'
                      >
                        Use template
                      </NavLink>
                    )}
                    {isEmpty(socialNetworkData) && (
                      <NavLink
                        to={{
                          pathname: `/formbiodata`,
                        }}
                        className='border-4 rounded-r-full rounded-l-full p-2 text-xl border-black dark:border-white text-black dark:text-white font-bold hover:bg-black/10 dark:hover:bg-white/10 transition-colors'
                      >
                        Use template
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  )
}

