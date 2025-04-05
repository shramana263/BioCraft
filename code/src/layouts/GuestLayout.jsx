import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/StateContext'
import Navbar from '../components/Structure/Navbar'
import { useMobileContext } from '../contexts/MobileContext'
import { usePanelContext } from '../contexts/PanelContext'
import { useMessageContext } from '../contexts/MessageContext'
import Popup from '../components/messagePopup/Popup'
import { useThemeContext } from '../contexts/ThemeContext'

const GuestLayout = ({children}) => {
  const navigate = useNavigate();
  const { isSidebarOpen } = usePanelContext()
  const { isMobile } = useMobileContext()
  const { token } = useStateContext();
  const { message } = useMessageContext()
  const {isDark}= useThemeContext();

  if (token) {
    // return <Nagivate to="/templates" />;
    return navigate("/");

  }
  const outletWidth = (!isMobile && isSidebarOpen) ? 'w-[83.5%]' : 'w-full'
  const outletPosition = (!isMobile && isSidebarOpen) ? 'justify-end slideRight' : ''

  
  return (
    <>
      <div className={`flex w-full h-screen ${outletPosition} ${isDark?'dark':''}`}>
        <div className={`flex flex-col h-screen ${outletWidth}`}>
          <div className={`h-20 w-full z-20`}>
            <Navbar />
          </div>
          <div className='h-[calc(100vh-80px)] w-full flex justify-center items-center'>
            {/* <h3>GuestLayout</h3> */}
            {/* <Outlet /> */}
            {children}
            {
              message &&
              <Popup />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default GuestLayout
