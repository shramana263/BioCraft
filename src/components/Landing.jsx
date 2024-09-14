import React from 'react'
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ImageSlider from './ImageSlider'
import IMAGES from '../data/data'

const Landing = () => {
    return (
        <>
            <div className=' bg-[#EFF2F9] xl:ps-48 md:ps-20 sm:ps-10 h-[630px]'>
                <div className='ms-10 flex gap-28 ps-20 sm:ps-0 min-[412px]:ms-0'>
                    <div className='md:w-1/3 md:pt-10 md:pb-20 xl:pt-26 xl:pb-28 sm:pt-10 sm:w-1/2 min-[412px]:w-full'>
                        <div className='flex flex-wrap font-bold xl:text-6xl md:3xl sm:text-5xl min-[412px]:text-2xl'>
                            The Ultimate Biodata Builder
                        </div>
                        <div className='flex flex-wrap xl:text-2xl md:text-lg sm:text-lg mt-6 font-roboto'>
                            Build beautiful, recruiter-tested bio-datas in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.
                        </div>
                        <div className='flex pt-5'>
                            <Link to="/templates" className='rounded-md bg-blue-600 hover:bg-blue-800 text-white w-48 flex justify-center items-center p-5 text-2xl hover:cursor-pointer'>Try For Free</Link>
                        </div>

                    </div>
                    <div className='w-2/3  h-[630px]'>
                        <div className='flex justify-center h-full items-center rounded-l-full overflow-hidden'>
                            <img src="https://resources.biginterview.com/wp-content/uploads/2022/12/Resume-Template-for-a-Tech-Support.jpg" alt="" className=' w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap-7 justify-center items-center p-7 text-gray-400'>
                <div>
                    <span className='text-4xl xl:text-5xl font-serif font-bold'>Forbes</span>
                </div>
                <div className='flex justify-center items-center'>
                    <span className='text-4xl xl:text-5xl font-bold'>the</span>
                    <span className='text-4xl xl:text-5xl'>muse</span>
                </div>
                <div>
                    <span className='text-4xl xl:text-5xl font-serif'>Entrepreneur</span>

                </div>

            </div>
            <hr />

            <div className='flex md:flex-col xl:flex-row justify-between items-center p-24 xl:p-28 xl:ps-48 xl:pe-48 gap-16'>
                <div className='h-[420px] xl:w-1/2'>
                    <img src="src/assets/images/img1.png" alt="" className='h-full w-full' />
                </div>
                <div className='xl:w-1/2 flex flex-col gap-7 xl:ps-20 xl:pe-20'>
                    <div className='flex justify-center items-center flex-wrap md:text-4xl xl:text-5xl font-bold '>Create a biodata to land your next oppotunity</div>
                    <div className='text-xl font-thin flex justify-center items-center'>We have developed a resume builder based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment.</div>

                    <div className='flex justify-start items-center'>
                        <div className='hover:cursor-pointer rounded bg-[#1A91F0] hover:bg-[#1a68f0] text-white w-64 p-5 flex justify-center items-center text-2xl font-bold'>
                            Build Your Biodata
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-between items-center xl:ps-52 xl:pe-52 xl:gap-20 mb-8'>
                <div className='flex flex-col w-1/3'>
                    <div className="h-24">
                        <div className='h-20 w-20'>
                            <img src="src/assets/images/sword.png" alt="" className='h-full w-full' />
                        </div>
                    </div>
                    <div className='flex flex-wrap xl:gap-4 text-xl'>
                        <span className='font-semibold text-3xl'>Powerful and easy-to-use</span>
                        <span className=''>Created to be suitable for all levels of job seekers. Our host of powerful features ranges from an excellent spell-checker, to job tracking, multi-format export, auto-generated summaries and more.</span>
                    </div>
                </div>
                <div className='flex flex-col w-1/3'>
                    <div className="h-24">
                        <div className='h-20 w-20'>
                            <img src="src/assets/images/star.png" alt="" className='h-full w-full' />
                        </div>
                    </div>
                    <div className='flex flex-wrap xl:gap-4 text-xl'>
                        <span className='font-semibold text-3xl'>Customization made simple</span>
                        <span className=''>
                            Fine-tune your resume for a specific job with ease. We help you turn a generic document into a cutting-edge instrument that wins interviews. Transform universal resumes into perfect sales pitches with a few key-strokes.                            </span>
                    </div>

                </div>
                <div className='flex flex-col w-1/3'>
                    <div className="h-24">
                        <div className='h-20 w-20'>
                            <img src="src/assets/images/letter.png" alt="" className='h-full w-full' />
                        </div>
                    </div>
                    <div className='flex flex-wrap xl:gap-4 text-xl'>
                        <span className='font-semibold text-3xl'>Templates designed by experts</span>
                        <span className=''>
                            Our designed templates and examples are reviewed by recruiters. This gives you a powerful boost in resume creation, straight from the other side of the job market - the people responsible for hiring and candidate evaluation.                        </span>
                    </div>
                </div>
            </div>

            <div className=' bg-slate-800 flex flex-col gap-8 justify-center items-center h-[930px] overflow-hidden mt-14'>
                <div className='flex justify-center items-center'>
                    <div className='font-bold text-white text-5xl p-8'>Glimpses of Our Awesome Templates</div>
                </div>
                <div className='w-[1200px]'>
                    <ImageSlider images={IMAGES} slidesToShow={3} />
                </div>
                <div className='flex justify-center items-center gap-5 text-white text-3xl hover:cursor-pointer group'>
                    <span className='flex justify-center items-center font-bold'>Try Out</span>
                    <span className='flex justify-center items-center p-3 rounded-full bg-slate-600 animate-slide group-hover:bg-white group-hover:text-slate-700'><FaArrowRight /></span>
                </div>

            </div>

            <div className='flex justify-center items-center p-20 '>
                <div className='flex flex-col justify-center items-center w-[600px] gap-5'>
                    <div className='flex justify-center items-center'>
                        <div className="flex h-32 w-32 rounded-full overflow-hidden">
                            <img src="src/assets/images/love.png" alt="" className='h-full w-full' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <span className='font-bold xl:text-5xl text-center'>Why our customers love our biodata builder</span>
                        <span className='text-center text-xl font-light'>
                            Our online builder tool and collection of elegant, recruiter-tested templates are used by more than 10 million people around the globe! We are incredibly proud to empower so many active professionals.
                        </span>
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        <div className='p-5 text-white rounded-lg bg-blue-600 hover:bg-blue-800 text-xl font-semibold hover:cursor-pointer'>Get Started</div>
                    </div>

                </div>
            </div>

            <div className='flex justify-center items-center bg-black ps-48 pe-48 text-white '>
                <div className='flex justify-between w-full items-center pt-10 pb-10 ms-10 me-10'>
                    <div className='flex flex-col gap-4'>
                        <div className='font-bold text-2xl'>Connect With Us on Social Media</div>
                        <div className='flex flex-wrap gap-3'>
                            <div className='bg-slate-700 rounded-full p-3 hover:bg-blue-600'><FaLinkedinIn size={22} /></div>
                            <div className="bg-slate-700 rounded-full p-3 hover:bg-white hover:text-red-600"><FaYoutube size={22} /></div>
                            <div className="bg-slate-700 rounded-full p-3 hover:bg-blue-700"><FaFacebookF size={22} /></div>
                            <div className="bg-slate-700 rounded-full p-3 hover:bg-red-700"><FaPinterestP size={22} /></div>
                            <div className="bg-slate-700 rounded-full p-3 hover:bg-gradient-to-tr hover:from-orange-300 hover:via-red-500 hover:to-rose-600"><FaInstagram size={22} /></div>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-3'>
                            <div className='text-gray-600 font-bold'>OUR COMPANY</div>
                            <div className='flex flex-col gap-2 text-xl'>
                                <div className='hover:text-blue-600 hover: cursor-pointer'>About Us</div>
                                <div className='hover:text-blue-600 hover: cursor-pointer'>Pricing</div>
                                <div className='hover:text-blue-600 hover: cursor-pointer'>Product Updates</div>
                                <div className='hover:text-blue-600 hover: cursor-pointer'>Sponsorship Program</div>
                                <div className='hover:text-blue-600 hover: cursor-pointer'>Media kit</div>
                                <div className='hover:text-blue-600 hover: cursor-pointer'>Affiliates</div>

                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='text-gray-600 font-bold'>SUPPORT</div>
                            <div className='flex flex-col gap-2 text-xl'>
                                <div className='hover:text-blue-600 hover: cursor-pointer'>FAQ</div>
                                <div className='hover:text-blue-600 hover: cursor-pointer'>Contact Us</div>
                                <div className='hover:text-blue-600 hover: cursor-pointer'>Terms of Service</div>
                                <div className='hover:text-blue-600 hover: cursor-pointer'>Privacy</div>

                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>


            </div>
            <div className="flex justify-center items-center bg-black ps-48 pe-48">
                <div className='flex justify-between w-full ms-10 me-10'>
                    <div className='text-gray-600 text-xl'>
                        Copyright 2024 - BIOdataMaker
                    </div>
                    <div className=' flex text-gray-600 text-xl pb-14'>
                        <div className='border-r border-gray-600 ps-3 pe-3'>About</div>
                        <div className='border-r border-gray-600 ps-3 pe-3'>Accessibility</div>
                        <div className='border-r border-gray-600 ps-3 pe-3'>Contact</div>
                        <div className='ps-3 pe-3'>Privacy Policy</div>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default Landing
