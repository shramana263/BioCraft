import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useStateContext } from '../contexts.jsx/StateContext'

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
      <div className='bg-indigo-50 font-bold text-4xl w-full flex pt-7 justify-center items-center text-purple-950'>
        Templates
      </div>
      <div className='flex justify-center items-center bg-indigo-50 h-full p-20 pt-0'>
        <div className='flex flex-wrap gap-10'>
          {
            bio_templates && <FormTemplates bio_template={bio_templates} />
          }
        </div>

      </div>

    </>
  )
}

export default MakeBiodata

const FormTemplates = ({ bio_template }) => {
  // useEffect(()=>{
  //   console.log("image id : ", bio_template[0].id)
  // })
  return (
    <>
      {
        bio_template.map((img, index) => (
          <>
            <div key={index} className='h-[600px] w-[400px] group relative'>
              <img src={img.src} alt="" className='h-full w-full' />
              <div className='absolute invisible group-hover:visible h-full w-full bg-slate-600/10 top-0 backdrop-blur-sm'>
                <div className='absolute invisible  group-hover:visible top-[430px] right-[100px] hover:cursor-pointer '>
                  {/* {console.log("image id : ", img.id)} */}
                  <TemplateDecider data={img.id} />
                </div>

              </div>

            </div>

          </>
        ))

      }

    </>
  )
}

const TemplateDecider = ( data ) => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/template{$}`)
  // }
  //  useEffect(()=>{
  //   console.log("image id : ", data)
  // })

  return (
    <>
      {/* <div className='border-4 rounded-r-full rounded-l-full p-2 text-xl border-black font-bold'
        onClick={handleClick}
      >
        Use Template
      </div> */}
      <NavLink to={`/template-${data.data}`} className='border-4 rounded-r-full rounded-l-full p-2 text-xl border-black font-bold'>
        Use template
      </NavLink>
    </>
  )
}
