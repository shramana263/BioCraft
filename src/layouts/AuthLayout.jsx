import React, { useEffect, useState } from 'react'
import { useStateContext } from '../contexts/StateContext'
import { fetchUser } from '../services/user-api';
import { authLogout } from '../services/auth-api';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import Navbar from '../components/Structure/Navbar';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { usePanelContext } from '../contexts/PanelContext';
import { useMobileContext } from '../contexts/MobileContext';
import Popup from '../components/messagePopup/Popup';
import { useMessageContext } from '../contexts/MessageContext';
import { useThemeContext } from '../contexts/ThemeContext';

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  const { user, token, setUser, setToken } = useStateContext();
  const [isOpen, setOpen] = useState(true);
  const { isSidebarOpen, setSidebarOpen } = usePanelContext()
  const { isMobile } = useMobileContext()
  const { message, setMessage } = useMessageContext()
  const { isDark, setDark } = useThemeContext()

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
      setSidebarOpen(false)
      setMessage('Logged out Successfully')
      navigate('/');
      // toast.success("Logout Successful")
    },
    onError: (err) => {
      console.log(err);
    }
  })
  // if (!token) {
  //   console.log("no token")
  //   navigate('/landing')
  // }

  const onLogout = (ev) => {
    ev.preventDefault();
    logout.mutate()
  }
  const outletWidth = (!isMobile && isSidebarOpen) ? 'w-[83.5%]' : 'w-full'
  const outletPosition = (!isMobile && isSidebarOpen) ? 'justify-end slideRight' : ''
  useEffect(()=>{
    console.log("DarkMode= ",isDark);
  },[isDark]);



  return (
    authUser.isLoading ? <div className='h-screen w-full flex justify-center items-center'>
      <AiOutlineLoading3Quarters size={80} className='motion-preset-spin' />
    </div> :
      <>
        <div className={``}>
          <div className={`flex w-full ${outletPosition} ${isDark ? 'dark' : ''}`}>
            <div className={`flex flex-col ${outletWidth}`}>
              <div className={`h-20 w-full z-20`}>

                <Navbar
                  userName={authUser.data?.name}
                  onLogout={onLogout}
                />
              </div>
              <main className=''>
                {/* <h3>AuthLayout</h3> */}
                {/* <Outlet /> */}
                {children}
                {
                  message &&
                  <Popup />
                }
              </main>
            </div>
          </div>
        </div>
      </>
  )
}

export default AuthLayout
