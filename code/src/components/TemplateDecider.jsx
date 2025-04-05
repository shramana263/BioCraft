import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const TemplateDecider = (data, userData) => {
    const navigate = useNavigate();
    useEffect(()=>{

        console.log("userData - ", userData)
    },[userData])
  
    return (
      <>
        {/* <div className='border-4 rounded-r-full rounded-l-full p-2 text-xl border-black font-bold'
          onClick={handleClick}
        >
          Use Template
        </div> */}
        <NavLink
          to={{
            pathname: `/template-${data.data}`,
            // state: { personalData: personalData, educationalData: educationalData, specializationData: specializationData, experienceData: experienceData, skillData: skillData, profileImage: profileImage }
          }}
          className='border-4 rounded-r-full rounded-l-full p-2 text-xl border-black font-bold'
        >
          Use template
        </NavLink>
      </>
    )
  }
  

export default TemplateDecider
