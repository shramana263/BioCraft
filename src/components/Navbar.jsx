import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts.jsx/StateContext'

const Navbar = ({ userName, onLogout }) => {
    const { token } = useStateContext();
    return (
        <>
            {" "}
            <div className='h-full flex justify-between items-center p-5 border-b'>
                <div className='font-bold text-3xl flex justify-center items-center'>
                    <span>BIOdata</span>
                    <span>Maker</span>
                </div>
                <div className='flex gap-12'>
                    { token &&

                    <div className='font-bold flex justify-center items-center'>Hello, {userName}</div>
                    }
                    <div className='flex justify-center items-center'>
                        <div className='text-xl'>Blog</div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='text-xl'>FAQ</div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='border h-10'></div>
                    </div>
                    {
                        !token &&
                        <div>
                            <Link to="/signin" className='flex justify-center items-center'>
                                <div className='text-xl text-sky-600 hover:cursor-pointer'>Log In</div>
                            </Link>
                            <Link to="/signup" className='flex justify-center items-center'>
                                <div className='border rounded-md bg-sky-600 hover:bg-sky-700 text-white p-4 text-xl font-semibold  ps-5 pe-5 hover:cursor-pointer'>Sign Up</div>
                            </Link>
                        </div>
                    }

                    {/* <Link to="/signin" className="bg-orange-900 text-white rounded-md ms-3 px-3 py-2 font-sans text font-bold justify-end md:float-right"><IoPersonSharp size={30} /></Link> */}
                    {
                        token &&

                    <Link to="#" onClick={onLogout} className="flex items-center bg-orange-900 text-white rounded-md ms-3 px-3 py-2 font-sans text font-bold justify-end md:float-right">Logout</Link>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar
