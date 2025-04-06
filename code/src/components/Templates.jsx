import React from 'react'
import Preview from './Preview'
import { Link } from 'react-router-dom'
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
  const { token } = useStateContext();
  // useEffect(() => {
  //   if (!token) {
  //     navigate('/signup')
  //   }

  // }, [])
  return (
    <>
      <div className='flex justify-center items-center bg-indigo-50 dark:bg-gray-900 h-full p-20'>
        <div className='flex flex-wrap justify-center gap-10'>
          {
            bio_templates && <FormTemplates bio_template={bio_templates} />
          }
        </div>
      </div>
      {
        token &&
        <Link to="/formbiodata" className=''>
          <div className='fixed bg-black dark:bg-white text-white dark:text-black motion-preset-wobble rounded-full p-3 flex justify-center items-center bottom-[10%] right-[5%] hover:cursor-pointer font-bold text-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors'>
            <MdOutlineStart size={30} />
          </div>
        </Link>
      }
      {
        !token &&
        <Link to="/signin" className=''>
          <div className='fixed bg-black dark:bg-white text-white dark:text-black motion-preset-wobble rounded-full p-3 flex justify-center items-center bottom-[10%] right-[5%] hover:cursor-pointer font-bold text-xl hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors'>
            <MdOutlineStart size={30} />
          </div>
        </Link>
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
            <div key={index} className='h-[600px] w-[400px] group relative motion-preset-pop'>
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
