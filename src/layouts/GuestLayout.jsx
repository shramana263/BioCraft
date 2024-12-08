import React, { useEffect } from 'react'
import Landing from '../components/Landing'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/StateContext'
import Navbar from '../components/Structure/Navbar'
import { useMobileContext } from '../contexts/MobileContext'
import { usePanelContext } from '../contexts/PanelContext'
import { useMessageContext } from '../contexts/MessageContext'
import Popup from '../components/messagePopup/Popup'

const GuestLayout = ({children}) => {
  const navigate = useNavigate();
  const { isSidebarOpen, setSidebarOpen } = usePanelContext()
  const { isMobile } = useMobileContext()
  const { token } = useStateContext();
  const { message, setMessage } = useMessageContext()
  if (token) {
    // return <Nagivate to="/templates" />;
    return navigate("/");

  }
  const outletWidth = (!isMobile && isSidebarOpen) ? 'w-[83.5%]' : 'w-full'
  const outletPosition = (!isMobile && isSidebarOpen) ? 'justify-end slideRight' : ''

  
  return (
    <>
      <div className={`flex w-full ${outletPosition}`}>
        <div className={`flex flex-col ${outletWidth}`}>
          <div className={`h-20 w-full z-20`}>
            <Navbar />
          </div>
          <div>
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
