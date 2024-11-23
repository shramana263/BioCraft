import React from 'react'
import Landing from '../components/Landing'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts.jsx/StateContext'
import Navbar from '../components/Structure/Navbar'

const GuestLayout = () => {
  const navigate= useNavigate();

  const { token } = useStateContext();
  if (token) {
    // return <Nagivate to="/templates" />;
      return navigate("/");

  }
  return (
    <>
      <div className='h-24'>
        <Navbar />
      </div>
      <div>
        <h3>GuestLayout</h3>
        <Outlet />
      </div>
    </>
  )
}

export default GuestLayout
