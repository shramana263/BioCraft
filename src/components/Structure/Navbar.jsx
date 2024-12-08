import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../../contexts/StateContext'
import Sidebar from './Sidebar';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useMobileContext } from '../../contexts/MobileContext';
import { usePanelContext } from '../../contexts/PanelContext';
import axiosClient from '../../axios-client';
import { useMessageContext } from '../../contexts/MessageContext';

const Navbar = ({ userName, onLogout }) => {
    const { token } = useStateContext();
    const [isOpen, setOpen] = useState(false)
    const { isMobile } = useMobileContext()
    const [image, setImage] = useState(null)
    const { setMessage } = useMessageContext()
    const [isLogoutOpen, setLogoutOpen] = useState(false)

    const { isSidebarOpen, setSidebarOpen } = usePanelContext()
    const outletWidth = (!isMobile && isSidebarOpen) ? 'w-[83.5%]' : 'w-full'
    useEffect(() => {
        console.log(isMobile)
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
                <div>
                    <Sidebar setOpen={setOpen} onLogout={onLogout} />
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

                        <div onClick={()=>setLogoutOpen(true)} className="flex items-center bg-orange-900 text-white ms-3 h-14 w-14 rounded-full overflow-hidden font-sans text font-bold justify-end md:float-right shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">

                            <img src={image ?? "https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png"} alt="" className='h-full w-full' />
                            {
                                isLogoutOpen &&
                                <div className='h-56 w-56 border absolute bg-gray-50  top-20 right-10 rounded text-neutral-900'>
                                    <div onClick={onLogout} className='w-full flex hover:cursor-pointer justify-center items-center border'>
                                        Logout
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
