import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../contexts/StateContext'
import Sidebar from './Sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMobileContext } from '../../contexts/MobileContext';
import { usePanelContext } from '../../contexts/PanelContext';
import axiosClient from '../../axios-client';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import BotIcon from '../../chatbot/BotIcon';
import DarkMode from '../theme/DarkMode';

const Navbar = ({ userName, onLogout }) => {
    const { token, user } = useStateContext();
    const [isOpen, setOpen] = useState(false)
    const { isMobile } = useMobileContext()
    const [image, setImage] = useState(null)


    const { isSidebarOpen, setSidebarOpen } = usePanelContext()
    const outletWidth = (!isMobile && isSidebarOpen) ? 'w-[83.5%]' : 'w-full'



    useEffect(() => {
        // console.log(isLogoutOpen)
        axiosClient.get('/show/profile-image')
            .then((response) => {
                setImage(response.data.url)
            })
            .catch((err) => {
                console.log(err)
                // setMessage(err.response.data)
            })
    }, [])

    return (
        <>
            {" "}
            {
                isOpen &&
                <div className=''>
                    {/* <Sidebar setOpen={setOpen} /> */}
                    <Sidebar setOpen={setOpen} />
                </div>
            }
            <div className={`fixed ${outletWidth} bg-white h-20 dark:bg-neutral-800 flex justify-between items-center p-3 border-b dark:border-none`}>
                <div className='flex justify-center items-center gap-3'>

                    <div className='rounded-lg p-2 dark:text-neutral-50'
                        onClick={() => { setOpen(true); setSidebarOpen(true) }}
                    ><GiHamburgerMenu size={25} /></div>
                    <div className='font-bold text-3xl md:text-4xl dark:text-neutral-50 flex justify-center items-center'>
                        <span>BioCraft</span>
                        {/* <span><Logo/></span> */}
                    </div>
                </div>
                <div className='flex sm:gap-8 gap-5'>
                    {/* {token &&

                        <div className='font-bold flex justify-center items-center'>Hello, {userName}</div>
                    } */}

                    <DarkMode/>

                    {
                        (!isMobile && !isSidebarOpen) &&
                        <div className='dark:text-neutral-50 flex justify-center items-center gap-5'>
                            <Link to="/about-us" className='flex justify-center items-center'>
                                <div className='text-xl'>About Us</div>
                            </Link>
                            <Link to="/frequently-asked-question" className='flex justify-center items-center'>
                                <div className='text-xl'>FAQ</div>
                            </Link>
                            <div className='flex justify-center items-center'>
                                <div className='border h-10'></div>
                            </div>
                        </div>
                    }

                    {
                        (!token && !isMobile) &&
                        <div className='flex justify-center items-center gap-5'>
                            <Link to="/signin" className='flex justify-center items-center'>
                                <div className='text-xl text-sky-600 hover:cursor-pointer'>Log In</div>
                            </Link>
                            <Link to="/signup" className='flex justify-center items-center'>
                                <div className='flex items-center bg-sky-600 text-white rounded-md ms-3 px-3 py-2 font-sans text font-bold justify-end md:float-right'>Sign Up</div>
                            </Link>
                        </div>
                    }
                    <div className='flex justify-center items-center sm:gap-8 gap-2'>

                        <BotIcon />
                        {
                            token &&
                            <>
                                <UserProfileMenu image={image} userName={userName} onLogout={onLogout} />
                            </>


                        }
                    </div>


                    {/* <Link to="/signin" className="bg-orange-900 text-white rounded-md ms-3 px-3 py-2 font-sans text font-bold justify-end md:float-right"><IoPersonSharp size={30} /></Link> */}

                </div>
            </div>
        </>
    )
}

export default Navbar

const UserProfileMenu = ({ image, userName, onLogout }) => {
    const [isLogoutOpen, setLogoutOpen] = useState(false)

    const handleSwitch = () => {
        setLogoutOpen(prev => !prev)
    }
    return (
        <>
            <ProfileTab image={image} handleSwitch={handleSwitch} />
            {
                isLogoutOpen &&
                <ProfileMenu handleSwitch={handleSwitch} image={image} userName={userName} onLogout={onLogout} />
            }

        </>
    )
}

const ProfileTab = ({ image, handleSwitch }) => {

    return (
        <>
            <div onClick={handleSwitch} className="flex items-center hover:cursor-pointer text-white ms-3 sm:h-14 sm:w-14 h-10 w-10 rounded-full overflow-hidden font-sans text font-bold justify-end md:float-right border-2 border-neutral-900">

                <img src={image ?? "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"} alt="" className='h-full w-full' />

            </div>
        </>
    )
}




const ProfileMenu = ({ handleSwitch, image, userName, onLogout }) => {

    return (
        <>
            <div className='h-72 w-60 p-4 border absolute bg-blue-50  top-20 pt-0 right-10 flex flex-col gap-5 items-center rounded text-neutral-900 motion-preset-pop'>
                <button onClick={handleSwitch} className='h-14 w-full justify-end z-50 flex items-center hover:cursor-pointer hover:text-red-700'>
                    <RxCross2 />
                </button>
                <div className='flex items-center flex-col gap-3'>

                    <div className='h-16 w-16 border-4 border-gray-500 overflow-hidden rounded-full'>
                        <img src={image ?? "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"} alt="" className='h-full w-full' />
                    </div>
                    <div>
                        Hi, {userName} !
                    </div>
                    <Link to="/profile" >
                        <div className='w-full border border-black rounded-l-full rounded-r-full px-3 py-1 font-thin text-blue-700'
                        // onClick={()=>{setLogoutOpen(prev=>false); console.log(isLogoutOpen)}}
                        >
                            Manage your profile
                        </div>
                    </Link>
                </div>
                <div className="flex justify-center items-center p-2 text-gray-900 rounded-l-full w-full bg-slate-50  rounded-r-full border hover:bg-gray-100 group hover:cursor-pointer" onClick={onLogout}>
                    <div>
                        <RiLogoutCircleRLine size={20} />
                    </div>
                    <span className="flex-1 ms-3 whitespace-nowrap justify-center">Logout</span>
                    {/* <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">Pro</span> */}
                </div>
            </div>
        </>
    )
}
