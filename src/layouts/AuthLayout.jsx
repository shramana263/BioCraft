import React, { useState } from 'react'
import { useStateContext } from '../contexts.jsx/StateContext'
import { fetchUser } from '../services/user-api';
import { authLogout } from '../services/auth-api';
import { toast } from 'react-toastify';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
  const navigate = useNavigate();
  const { user, token, setUser, setToken } = useStateContext();
  const [isOpen, setOpen] = useState(true);

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

  return (
    authUser.isLoading ? <div>Loading...</div> :
      <>
        <div className=''>
          <Navbar
            userName={authUser.data?.name}
            onLogout={onLogout}
          />
          <main className=''>
            <h3>AuthLayout</h3>
            <Outlet />
          </main>
        </div>

      </>
  )
}

export default AuthLayout
