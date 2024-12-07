import React from 'react'
import Preview from './Preview'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useStateContext } from '../contexts/StateContext'
import { MdOutlineStart } from 'react-icons/md'

const bio_templates = [
  {
    src: "https://cdn-images.zety.com/pages/biodata_format_zety_us_1.jpg"
  },
  {
    src: "https://resumekraft.com/wp-content/uploads/2023/07/Job-Biodata-template-2-724x1024.jpg"
  },
  {
    src: "https://i.pinimg.com/736x/bd/d9/a7/bdd9a772c5609f417fbe2141334147f5.jpg"
  },
  {
    src: "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/white-biodata-format-for-job-template-93y7sc1c0b2e45.webp"
  }
]

const Templates = () => {
  const navigate = useNavigate()
  const { user, token, setUser, setToken } = useStateContext();
  // useEffect(() => {
  //   if (!token) {
  //     navigate('/signup')
  //   }

  // }, [])
  return (
    <>
      <div className='flex justify-center items-center bg-indigo-50 h-full p-20'>
        <div className='flex flex-wrap justify-center gap-10'>
          {
            bio_templates && <FormTemplates bio_template={bio_templates} />
          }
        </div>

        {/* <div class="group relative bg-gray-300 w-60 h-40 m-3">
          <button class="invisible group-hover:visible  
            absolute pr-10 pl-10 pt-2 pb-2 mt-24  
            ml-4 bg-blue-500 text-white">
            Button
          </button>
        </div> */}
      </div>
      {
        token &&
        <Link to="/formbiodata" className=''>
          <div className='fixed bg-black text-white motion-preset-wobble   rounded-full p-3  flex justify-center items-center bottom-[10%] right-[5%] hover:cursor-pointer font-bold text-xl'>
            <MdOutlineStart size={30} />
          </div>
        </Link>
      }
      {
        !token &&
        <div className='fixed bg-black text-white rounded-full p-3 w-56 flex justify-center items-center bottom-[100px] right-[100px] hover:cursor-pointer font-bold text-xl'>
          <Link to="/signin" className=''>
            Get Started
          </Link>
        </div>
      }

    </>
  )
}

export default Templates

const FormTemplates = ({ bio_template }) => {
  return (
    <>
      {
        bio_template.map((img, index) => (
          <>
            <div key={index} className='h-[600px] w-[400px] group relative'>
              <img src={img.src} alt="" className='h-full w-full' />
              <div className='absolute invisible group-hover:visible h-full w-full bg-slate-600/10 top-0 backdrop-blur-sm'>
                <div className='absolute invisible  group-hover:visible top-[430px] right-[100px] hover:cursor-pointer '>
                  <Preview image={img.src} />
                </div>

              </div>

            </div>

          </>
        ))

      }

    </>
  )
}
