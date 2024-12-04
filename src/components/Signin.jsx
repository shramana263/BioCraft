import { useMutation } from '@tanstack/react-query'
import React, { useRef } from 'react'
import { authLogin } from '../services/auth-api'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/StateContext'

const Signin = () => {

    const {setUser, setToken}=useStateContext();
    const emailRef= useRef()
    const passwordRef= useRef()
    const navigate= useNavigate();

    const loginMutation= useMutation({
        mutationFn:authLogin,
        onSuccess:(data)=>{
            console.log(data)
            setUser(data.data)
            setToken(data.token)
            navigate('/')
        },
        onError:(error)=>{
            console.log(error)
        }
    })

    const handleSubmit=(e)=>{
        console.log("hello signin")
        e.preventDefault();
        console.log(emailRef.current.value, passwordRef.current.value)

        const payload={
            email:emailRef.current.value,
            password:passwordRef.current.value
        };
        loginMutation.mutate(payload)
        

    }
  return (
    <>
      <div className='flex flex-col gap-6 w-screen h-screen items-center'>
                

                <div className="flex justify-center items-center flex-col w-3/5">

                    <form onSubmit={handleSubmit} method="post" className="flex w-3/4 flex-col justify-center items-center border rounded-md pt-5 pb-5 shadow-lg">
                        {/* {% csrf_token %} */}

                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4"><b>Email Id</b></div>
                            <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="email" ref={emailRef}  placeholder="e.g.: abc@example.in" required />
                        </div>
                        <br/>
                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4" ><b>Password</b></div>
                            <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="password" ref={passwordRef} placeholder="******" required />
                        </div>

                        <br />
                        
                        <div className="flex justify-center items-center">
                            <button type="submit" className="border p-3 rounded-s-full rounded-e-full ps-5 pe-5 border-orange-800 font-bold text-orange-800 hover:text-white hover:bg-orange-800 hover:shadow-lg  hover:ps-6 hover:pe-6">SIGN IN</button>
                        </div>
                    </form>
                    <div className="m-3">Don't have an account? <Link to="/signup" className="text-decoration-none font-bold text-orange-500">Sign Up</Link></div>

                </div>
            </div>
    </>
  )
}

export default Signin
