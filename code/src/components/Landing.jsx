import React from 'react'
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ImageSlider from './ImageSlider'
import IMAGES from '../data/data'
import { useMobileContext } from '../contexts/MobileContext'
import { usePanelContext } from '../contexts/PanelContext'
import { useStateContext } from '../contexts/StateContext'

const Landing = () => {

    const { isMobile, setMobile } = useMobileContext()
    const { isSidebarOpen } = usePanelContext()
    // const { message, setMessage } = useMessageContext()
    const { token } = useStateContext()

    const openSidebar = (!isMobile && isSidebarOpen) ? 'xl:ps-10' : 'xl-ps-20'
    const adjustTextSizeofTitle = (!isMobile && isSidebarOpen) ? 'xl:text-5xl' : 'xl:text-6xl'
    const adjustTextSizeofBody = (!isMobile && isSidebarOpen) ? 'xl:text-xl' : 'xl:text-2xl'
    return (
        <>
            <div className={`${openSidebar} bg-[#EFF2F9] dark:bg-neutral-900 md:ps-20 sm:ps-10 md:h-[630px] min-[412px]:h-96`}>
                <div className={`${openSidebar} ms-10 flex gap-28 md:ps-20 ps-0 min-[412px]:ms-0`}>
                    <div className='md:w-1/3 md:pt-10 md:pb-20 xl:pt-26 xl:pb-28 sm:pt-10 sm:w-1/2 min-[412px]:w-full min-[412px]:p-5 md:p-0 '>
                        <div className='motion-preset-slide-right'>

                            <div className={`flex flex-wrap font-bold ${adjustTextSizeofTitle} md:text-3xl min-[412px]:text-4xl min-[412px] dark:text-neutral-200`}>
                                The Ultimate Biodata Builder
                            </div>
                            <div className={`flex flex-wrap ${adjustTextSizeofBody} md:text-lg text-lg mt-6 font-roboto dark:text-neutral-300`}>
                                Build beautiful, recruiter-tested bio-datas in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.
                            </div>
                        </div>
                        {
                            token &&
                            <div className='flex pt-5 max-[500px]:justify-center motion-preset-shrink'>
                                <Link to="/templates" className='rounded-md bg-blue-600 hover:bg-blue-800 text-white w-48 flex justify-center items-center md:p-5 min-[412px]:p-2 md:text-2xl min-[412px]:text-lg hover:cursor-pointer'
                                >
                                    Try For Free</Link>
                            </div>
                        }
                        {
                            !token &&
                            <div className='flex pt-5 max-[500px]:justify-center motion-preset-shrink'>
                                <Link to="/guest-templates" className='rounded-md bg-blue-600 hover:bg-blue-800 text-white w-48 flex justify-center items-center md:p-5 min-[412px]:p-2 md:text-2xl min-[412px]:text-lg hover:cursor-pointer'
                                >Try For Free</Link>
                            </div>
                        }

                    </div>
                    {
                        !isMobile &&
                        <div className='w-2/3  h-[630px]'>
                            <div className='flex justify-center h-full items-center rounded-l-full overflow-hidden motion-preset-slide-left'>
                                <img src="https://resources.biginterview.com/wp-content/uploads/2022/12/Resume-Template-for-a-Tech-Support.jpg" alt="" className=' w-full h-full' />
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className='flex gap-7 xl:text-5xl md:text-4xl text-xl justify-center items-center p-7 text-gray-400 dark:bg-neutral-900 dark:text-gray-300'>
                <div>
                    <span className=' font-serif font-bold'>Forbes</span>
                </div>
                <div className='flex justify-center items-center'>
                    <span className='  font-bold'>the</span>
                    <span className=''>muse</span>
                </div>
                <div>
                    <span className='font-serif'>Entrepreneur</span>

                </div>

            </div>
            <hr className='dark:border-gray-700' />

            <div className='flex flex-col md:flex-col xl:flex-row justify-between items-center md:p-24 xl:p-28 xl:ps-48 xl:pe-48 gap-16 min-[412px]:p-4 dark:bg-neutral-900'>
                <div className='h-[420px] xl:w-1/2 motion-preset-pop'>
                    <img src="src/assets/images/img1.png" alt="" className='h-full w-full' />
                </div>
                <div className={`xl:w-1/2 flex flex-col gap-7 ${(!isMobile && isSidebarOpen) ? 'xl:ps-10 xl:pe-10' : 'xl:ps-20 xl:pe-20 motion-preset-slide-left'} `}>
                    <div className={`${(!isMobile && isSidebarOpen) ? 'xl:text-4xl' : 'xl:text-5xl'} flex justify-center items-center flex-wrap text-4xl font-bold dark:text-white`}>Create a biodata to land your next oppotunity</div>
                    <div className='text-xl font-thin flex justify-center items-center dark:text-gray-300'>We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment.</div>

                    <div className='flex justify-start items-center'>
                        <Link to="/make-biodata" className='hover:cursor-pointer rounded bg-[#1A91F0] hover:bg-[#1a68f0] text-white w-64 p-5 flex justify-center items-center text-2xl font-bold'>
                            Build Your Biodata
                        </Link>
                    </div>

                </div>
            </div>
            <div className='flex xl:flex-row md:flex-row min-[412px]:flex-col min-[412px]:p-4 min-[412px]:gap-10 sm:p-10 justify-between items-center xl:ps-52 xl:pe-52 xl:gap-20 pb-24 dark:bg-neutral-800'>
                <div className='flex flex-col md:w-1/3 '>
                    <div className="h-24">
                        <div className='h-20 w-20'>
                            <img src="src/assets/images/sword.png" alt="" className='h-full w-full rounded-full' />
                        </div>
                    </div>
                    <div className='flex flex-wrap xl:gap-4 text-xl'>
                        <span className='font-semibold text-3xl dark:text-white'>Powerful and easy-to-use</span>
                        <span className='dark:text-gray-300'>Created to be suitable for all levels of job seekers. Our host of powerful features ranges from an excellent spell-checker, to job tracking, multi-format export, auto-generated summaries and more.</span>
                    </div>
                </div>
                <div className='flex flex-col md:w-1/3 '>
                    <div className="h-24">
                        <div className='h-20 w-20'>
                            <img src="src/assets/images/star.png" alt="" className='h-full w-full rounded-full' />
                        </div>
                    </div>
                    <div className='flex flex-wrap xl:gap-4 text-xl'>
                        <span className='font-semibold text-3xl dark:text-white'>Customization made simple</span>
                        <span className='dark:text-gray-300'>
                            Fine-tune your resume for a specific job with ease. We help you turn a generic document into a cutting-edge instrument that wins interviews. Transform universal resumes into perfect sales pitches with a few key-strokes.                            </span>
                    </div>

                </div>
                <div className='flex flex-col md:w-1/3'>
                    <div className="h-24">
                        <div className='h-20 w-20'>
                            <img src="src/assets/images/letter.png" alt="" className='h-full w-full rounded-full' />
                        </div>
                    </div>
                    <div className='flex flex-wrap xl:gap-4 text-xl'>
                        <span className='font-semibold text-3xl dark:text-white'>Templates designed by experts</span>
                        <span className='dark:text-gray-300'>
                            Our designed templates and examples are reviewed by recruiters. This gives you a powerful boost in resume creation, straight from the other side of the job market - the people responsible for hiring and candidate evaluation.                        </span>
                    </div>
                </div>
            </div>

            <div className=' bg-slate-800 flex flex-col gap-8 justify-center items-center md:h-[930px] min-[412px]:h-[1000px] overflow-hidden pt-8'>
                <div className='flex justify-center items-center'>
                    <div className='font-bold text-white text-5xl p-8'>Glimpses of Our Awesome Templates</div>
                </div>
                <div className='md:w-[1200px] min-[412px]:w-[400px]'>
                    <ImageSlider images={IMAGES} slidesToShow={3} />
                </div>
                <Link to="/make-biodata" className='flex justify-center items-center gap-5 text-white text-3xl hover:cursor-pointer group'>
                    <span className='flex justify-center items-center font-bold'>Try Out</span>
                    <span className='flex justify-center items-center p-3 rounded-full bg-slate-600 animate-slide group-hover:bg-white group-hover:text-slate-700'><FaArrowRight /></span>
                </Link>

            </div>

            <div className='flex justify-center items-center p-20 dark:bg-neutral-800'>
                <div className='flex flex-col justify-center items-center w-[600px] gap-5'>
                    <div className='flex justify-center items-center'>
                        <div className="flex h-32 w-32 rounded-full overflow-hidden">
                            <img src="src/assets/images/love.png" alt="" className='h-full w-full' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <span className='font-bold xl:text-5xl text-center dark:text-white'>Why our customers love our biodata builder</span>
                        <span className='text-center text-xl font-light dark:text-gray-300'>
                            Our online builder tool and collection of elegant, recruiter-tested templates are used by more than 10 million people around the globe! We are incredibly proud to empower so many active professionals.
                        </span>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        <Link to="/formbiodata" className='p-5 text-white rounded-lg bg-blue-600 hover:bg-blue-800 text-xl font-semibold hover:cursor-pointer'>Get Started</Link>
                    </div>

                </div>
            </div>

            <div className='flex justify-center items-center bg-black xl:ps-48 xl:pe-48 text-white dark:bg-neutral-900'>
                <div className='flex md:flex-row min-[412px]:flex-col min-[412px]:gap-5 md:gap-0 justify-between w-full items-center pt-10 pb-10 ms-10 me-10'>
                    <div className='flex flex-col gap-4'>
                        <div className='font-bold text-2xl dark:text-gray-400'>Connect With Us on Social Media</div>
                        <div className='flex flex-wrap gap-3'>
                            <div className='bg-slate-700 rounded-full p-3 hover:bg-blue-600'><FaLinkedinIn size={22} /></div>
                            <div className="bg-slate-700 rounded-full p-3 hover:bg-white hover:text-red-600"><FaYoutube size={22} /></div>
                            <div className="bg-slate-700 rounded-full p-3 hover:bg-blue-700"><FaFacebookF size={22} /></div>
                            <div className="bg-slate-700 rounded-full p-3 hover:bg-red-700"><FaPinterestP size={22} /></div>
                            <div className="bg-slate-700 rounded-full p-3 hover:bg-gradient-to-tr hover:from-orange-300 hover:via-red-500 hover:to-rose-600"><FaInstagram size={22} /></div>
                        </div>
                    </div>
                    <div className='flex gap-5 '>
                        <div className='flex flex-col gap-3'>
                            <div className='text-gray-600 font-bold dark:text-gray-400'>OUR COMPANY</div>
                            <div className='flex flex-col gap-2 text-xl dark:text-gray-300'>
                                <Link to="/about-us" className='hover:text-blue-600 hover: cursor-pointer'>About Us</Link>
                                <Link to="#" className='hover:text-blue-600 hover: cursor-pointer'>Pricing</Link>
                                <Link className='hover:text-blue-600 hover: cursor-pointer'>Product Updates</Link>
                                <Link className='hover:text-blue-600 hover: cursor-pointer'>Sponsorship Program</Link>
                                <Link className='hover:text-blue-600 hover: cursor-pointer'>Media kit</Link>
                                <Link className='hover:text-blue-600 hover: cursor-pointer'>Affiliates</Link>

                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='text-gray-600 font-bold dark:text-gray-400'>SUPPORT</div>
                            <div className='flex flex-col gap-2 text-xl dark:text-gray-300'>
                                <Link className='hover:text-blue-600 hover: cursor-pointer'>FAQ</Link>
                                <Link to="/contact-us" className='hover:text-blue-600 hover: cursor-pointer'>Contact Us</Link>
                                <Link className='hover:text-blue-600 hover: cursor-pointer'>Terms of Service</Link>
                                <Link className='hover:text-blue-600 hover: cursor-pointer'>Privacy</Link>

                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>


            </div>
            <div className="flex justify-center items-center bg-black xl:ps-48 xl:pe-48 dark:bg-neutral-900">
                <div className='flex xl:flex-row md:flex-row flex-col justify-between w-full ms-10 me-10'>
                    <div className='text-gray-600 text-xl dark:text-gray-400'>
                        Copyright 2024 - BIOdataMaker
                    </div>
                    <div className=' flex text-gray-600 text-xl pb-14 dark:text-gray-400'>
                        <div className='border-r border-gray-600 ps-3 pe-3 dark:border-gray-700'>About</div>
                        <div className='border-r border-gray-600 ps-3 pe-3 dark:border-gray-700'>Accessibility</div>
                        <div className='border-r border-gray-600 ps-3 pe-3 dark:border-gray-700'>Contact</div>
                        <div className='ps-3 pe-3'>Privacy Policy</div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Landing