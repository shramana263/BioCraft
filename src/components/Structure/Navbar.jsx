import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../contexts/StateContext'
import Sidebar from './Sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMobileContext } from '../../contexts/MobileContext';
import { usePanelContext } from '../../contexts/PanelContext';
import axiosClient from '../../axios-client';
import { useMessageContext } from '../../contexts/MessageContext';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

const Navbar = ({ userName, onLogout }) => {
    const { token, user } = useStateContext();
    const [isOpen, setOpen] = useState(false)
    const { isMobile } = useMobileContext()
    const [image, setImage] = useState(null)
    const { setMessage } = useMessageContext()
    const [isLogoutOpen, setLogoutOpen] = useState(false)

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
                    <Sidebar setOpen={setOpen} />
                </div>
            }
            <div className={`fixed ${outletWidth} bg-white flex justify-between items-center p-5 border-b`}>
                <div className='flex justify-center items-center gap-3'>

                    <div className='border rounded-lg p-2'
                        onClick={() => { setOpen(true); setSidebarOpen(true) }}
                    ><GiHamburgerMenu size={25} /></div>
                    <div className='font-bold text-3xl flex justify-center items-center'>
                        <span>BioCraft</span>
                    </div>
                </div>
                <div className='flex gap-12'>
                    {/* {token &&

                        <div className='font-bold flex justify-center items-center'>Hello, {userName}</div>
                    } */}
                    {
                        (!isMobile && !isSidebarOpen) &&
                        <>
                            <div className='flex justify-center items-center'>
                                <div className='text-xl'>Blog</div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='text-xl'>FAQ</div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <div className='border h-10'></div>
                            </div>
                        </>
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

                    {/* <Link to="/signin" className="bg-orange-900 text-white rounded-md ms-3 px-3 py-2 font-sans text font-bold justify-end md:float-right"><IoPersonSharp size={30} /></Link> */}
                    {
                        (token && !isMobile) &&

                        <div onClick={() => setLogoutOpen(prev=>!prev)} className="flex items-center hover:cursor-pointer text-white ms-3 h-14 w-14 rounded-full overflow-hidden font-sans text font-bold justify-end md:float-right border-2 border-neutral-900">

                            <img src={image ?? "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"} alt="" className='h-full w-full' />
                            {
                                isLogoutOpen &&
                                <div className='h-72 w-60 p-4 border absolute bg-blue-50  top-20 pt-0 right-10 flex flex-col gap-5 items-center rounded text-neutral-900 motion-preset-pop'>
                                    <div onClick={()=>{setLogoutOpen(false)}} className='h-14 w-full justify-end z-50 flex items-center hover:cursor-pointer'>
                                        <RxCross2  />
                                    </div>
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
                            }
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default Navbar
