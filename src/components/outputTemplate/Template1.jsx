import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchUser } from '../../services/user-api';

const Template1 = () => {

  const location = useLocation();
  const personalData = location.state.personalData;
  const educationalData = location.state.educationalData;
  const specializationData = location.state.specializationData;
  const experienceData = location.state.experienceData;
  const skillData = location.state.skillData;
  const profileImage = location.state.profileImage
  const socialNetworkData = location.state.socialNetworkData

  const authUser = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser
  })
  // useEffect(()=>{
  //   console.log('authuser-', authUser.data.email)
  //   console.log("personal data: ", location)
  // },[])

  return (
    <>
      <div className='flex justify-center items-center h-full w-full p-5'>

        <div className='flex flex-col w-[90vh] justify-center border-2 pt-3 '>
          <div className='flex justify-center items-center w-full h-[21%] bg-blue-900 pe-3'>
            <div className='h-[135px] w-[120px] border'>

              <img src={profileImage ? profileImage : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"}
                className='h-full w-full'
                alt="" />

            </div>

            <div className='w-[70%] text-white p-3 pb-1 flex flex-col gap-3'>
              <div className='flex flex-col h-[50%]'>
                <span className='text-lg'>{personalData.fname} {personalData.lname}</span>

              </div>
              <div className='flex h-[50%] items-center'>
                <div className='flex flex-col items-start text-[9px] w-[50%]' >
                  <div><span>Phone : </span><span>{personalData.contact_no}</span></div>
                  <div><span>Email : </span><span>{authUser.data.email}</span></div>
                  {
                    socialNetworkData[0].name=='linkedin' &&
                    <div><span>LinkedIn : </span><span>abcdbyugfwekufbvc</span></div>
                  }
                  {
                    socialNetworkData[0].name=='github' &&
                    <div><span>Github : </span><span>abcdbyugfwekufbvc</span></div>
                  }
                </div>
                <div className='h-[50px] m-3 border-l-[1px] border-gray-300'>

                </div>
                <div className='flex flex-col justify-start items-start text-[9px] w-[50%] ' >
                  <div><span>Address : </span><span>{personalData.address}</span></div>
                  <div><span>Date of birth : </span><span>{personalData.DOB}</span></div>
                  <div><span>Gender : </span><span>{personalData.gender}</span></div>
                  <div><span>Nationality:</span><span>Indian</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col p-2 pt-3  h-[80%]'>
            <div className='text-[10px] ps-4 pe-4'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
            </div>
            <div className='ps-4 mt-2 font-bold text-blue-800'>
              Education
            </div>
            <hr className=' border border-black' />
            {
              educationalData && educationalData.map((data, index) => (

                <div className='flex text-[10px] ps-4 pe-4' key={index}>
                  <div className='font-bold w-[20%]'>
                    <span>{data.year_of_passing}</span>
                  </div>
                  <div className='flex flex-col w-[80%]'>
                    <div className='font-bold '>
                      {data.degree}
                    </div>
                    <div>
                      {data.school_university}
                    </div>
                    <div>
                      Marks: {data.gpa ? data.gpa : data.percentage} {data.gpa ? "GPA" : "%"}
                    </div>
                  </div>
                </div>
              ))
            }
            <div className='text-xs ps-3 flex'>
              <span className='font-bold'>Specialization : </span>
              <div className='flex flex-col gap-3'>

                {
                  specializationData && specializationData.map((data, index) => (

                    <span key={index} className='flex'>
                      <div>
                        {index + 1}. &nbsp;
                      </div>
                      <div className='flex flex-col'>
                        <span>
                          {data.certificate}
                        </span>
                        <span><i>( {data.Organisation} )</i></span>
                      </div>
                    </span>
                  ))
                }
              </div>
            </div>

            <div className='ps-4 mt-2 font-bold text-blue-800'>
              Experience
            </div>
            <hr className=' border border-black' />
            {
              experienceData && experienceData.map((data, index) => (

                <div className='flex text-[10px] ps-4 pe-4' key={index}>
                  <div className='font-bold w-[30%]'>
                    <span>{data.starting_date} to {data.ending_date}</span>
                  </div>
                  <div className='flex flex-col w-[80%]'>
                    <div className='font-bold '>
                      {data.role}
                    </div>
                    <div>
                      <i>( {data.organisation} )</i>
                    </div>
                    <div className='ps-2'>
                      {data.description ? data.description : ""}
                    </div>
                  </div>
                </div>
              ))
            }

            <div className='ps-4 mt-2 font-bold text-blue-800'>
              Skills
            </div>
            <hr className=' border border-black' />
            <div className='flex text-[10px] ps-4 pe-4'>
              {
                skillData && skillData.map((data, index) => (

                  <div className='flex flex-col w-[80%]' key={index}>
                    <div className=' '>
                      <span>{index + 1}.&nbsp; </span>
                      <span>{data.skill}</span>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Template1
