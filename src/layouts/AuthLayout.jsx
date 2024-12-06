import React, { useState } from 'react'
import { useStateContext } from '../contexts/StateContext'
import { fetchUser } from '../services/user-api';
import { authLogout } from '../services/auth-api';
import { toast } from 'react-toastify';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import Navbar from '../components/Structure/Navbar';
import Sidebar from '../components/Structure/Sidebar';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { usePanelContext } from '../contexts/PanelContext';
import { useMobileContext } from '../contexts/MobileContext';

const AuthLayout = () => {
  const navigate = useNavigate();
  const { user, token, setUser, setToken } = useStateContext();
  const [isOpen, setOpen] = useState(true);
  const {isSidebarOpen, setSidebarOpen}= usePanelContext()
  const {isMobile}= useMobileContext()

  const authUser = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser
  })

  const logout = useMutation({
    mutationFn: authLogout,
    onSuccess: () => {
      setUser({});
      setToken(null);
      console.log("logout successful");
      navigate('/landing');
      // toast.success("Logout Successful")
    },
    onError: (err) => {
      console.log(err);
    }
  })
  if (!token) {
    console.log("no token")
    navigate('/landing')
  }

  const onLogout = (ev) => {
    ev.preventDefault();
    logout.mutate()
  }
  const outletWidth= (!isMobile && isSidebarOpen) ?'w-[83.5%]': 'w-full'
  const outletPosition=(!isMobile && isSidebarOpen) ? 'justify-end slideRight': ''
  return (
    authUser.isLoading ? <div className='h-screen w-full flex justify-center items-center'>
      <AiOutlineLoading3Quarters size={80} className='motion-preset-spin' />
    </div> :
      <>
        <div className={`flex w-full ${outletPosition}`}>
          <div className={`flex flex-col ${outletWidth}`}>
            <div className={`h-20 w-full z-20`}>

              <Navbar
                userName={authUser.data?.name}
                onLogout={onLogout}
              />
            </div>
            <main className=''>
              {/* <h3>AuthLayout</h3> */}
              <Outlet />
            </main>
          </div>
        </div>

      </>
  )
}

export default AuthLayout
