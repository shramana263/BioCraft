import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { authRegister } from '../services/auth-api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useStateContext } from '../contexts/StateContext';

const SignUpForm = () => {
    const nameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const confPasswordRef=useRef();
    const {setUser, setToken}= useStateContext();
    const registerMutation= useMutation({
        mutationFn:authRegister,
        onSuccess:(data)=>{
            console.log("data fetching: "+data)
            setUser(data.data)
            setToken(data.token)
            toast.success("Registration Successful")
        },
        onError:(error)=>{
            toast.error(error.response.data.message)
        }
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(passwordRef.current.value===confPasswordRef.current.value){
            const payload={
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };
            console.log(payload)
            registerMutation.mutate(payload)
        }
    }


    return (
        <>
            <div className='flex flex-col gap-6 w-screen h-screen items-center'>
                {/* <div className='flex justify-between items-center font-bold font text-5xl text-orange-700 pt-5 pb-5 bg-gray-800 w-full ps-10 pe-10'>
                    <div className='flex gap-10 items-center'>
                        <div className='h-28 w-28 rounded-full overflow-hidden'>
                            <img src="https://cdn.dribbble.com/users/7004524/screenshots/15197928/media/40944f27c2dcfaf14038f387b4e88c2d.jpg" alt="" className='h-full w-full' />
                        </div>
                        <div className='flex gap-5 justify-center items-center'><span><i>CREATE </i></span><span className='text-orange-200'>Account</span><span className='flex justify-center items-center'></span></div>
                    </div>

                    <div className='h-32 w-32 rounded-full overflow-hidden'>
                        <img src="https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg" alt="" className='h-full w-full' />

                    </div>

                </div> */}

                <div className="flex justify-center items-center flex-col w-full">

                    <form onSubmit={handleSubmit} method="post" className="flex w-3/4 flex-col justify-center items-center border rounded-md pt-5 pb-5 shadow-lg">
                        {/* {% csrf_token %} */}

                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4"><b>Name</b></div>
                            <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="text" ref={nameRef} placeholder="Create username(Only letters and numbers)" required />
                        </div>

                        <br />


                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4" ><b>Email Address</b></div>
                            <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="email" ref={emailRef} placeholder="Enter your email address" required />
                        </div>

                        <br />
                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4" ><b>Create Password</b></div>
                            <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="password" ref={passwordRef} placeholder="Create a password" required />
                        </div>

                        <br />
                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4"><b>Confirm Password</b></div>
                            <input className=" rounded ps-3 focus:outline-none shadow h-10 w-72" type="Password" ref={confPasswordRef} placeholder="Confirm your password" required />
                        </div>

                        <br />
                        <div className="flex justify-center items-center">
                            <button type="submit" className="border p-3 rounded-s-full rounded-e-full ps-5 pe-5 border-orange-800 font-bold text-orange-800 hover:text-white hover:bg-orange-800 hover:shadow-lg  hover:ps-6 hover:pe-6">SIGN UP</button>
                        </div>
                    </form>
                    <div className="m-3">Already have an account? <Link to="/signin" className="text-decoration-none font-bold text-orange-500">Sign In</Link></div>

                </div>
            </div>

        </>
    )
}

export default SignUpForm
