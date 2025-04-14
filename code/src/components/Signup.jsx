import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { authRegister } from '../services/auth-api';
import { useMutation } from '@tanstack/react-query';
import { useStateContext } from '../contexts/StateContext';
import { useMessageContext } from '../contexts/MessageContext';
import { toast } from 'react-toastify';

const SignUpForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confPasswordRef = useRef();
    const { setUser, setToken } = useStateContext();
    const { setMessage } = useMessageContext()

    const registerMutation = useMutation({
        mutationFn: authRegister,
        onSuccess: (data) => {
            console.log("data fetching: " + data)
            setUser(data.data)
            setToken(data.token)
            setMessage('Account Created!')
            toast.success("Registration Successful", {position:toast.POSITION.TOP_CENTER})
        },
        onError: (error) => {
            // toast.error(error.response.data.message)
            setMessage(error.response.data.message)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (passwordRef.current.value === confPasswordRef.current.value) {
            const payload = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value,
            };
            console.log(payload)
            registerMutation.mutate(payload)
        }
        else {
            setMessage('Password fields didn\'t match')
        }
    }


    return (
        <>
            <div className='flex flex-col gap-6 w-full h-full items-center dark:bg-slate-900 dark:text-white'>

                <div className="flex justify-center gap-3 items-center flex-col h-full w-full">

                    <div className='flex gap-5 font-bold sm:text-5xl text-2xl w-3/4 sm:m-20 m-10 sm:ps-5 sm:mb-5 mb-2 '>
                        <div className='motion-preset-slide-right'>
                            Create New Account
                        </div>
                        <div className='sm:h-14 sm:w-14 h-10 w-10 motion-translate-x-in-[0%] motion-translate-y-in-[-100%] dark:invert'>
                            <img src="https://cdn-icons-png.flaticon.com/512/3658/3658756.png" alt="" className='w-full h-full' />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} method="post" className="flex w-3/4 flex-col justify-center items-center border rounded-md pt-5 pb-5 shadow-lg motion-preset-pop dark:border-slate-700 dark:bg-slate-800">
                        {/* {% csrf_token %} */}

                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4"><b>Name</b></div>
                            <input
                                className="rounded ps-3 focus:outline-none shadow h-10 w-72 dark:bg-slate-900 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                                type="text"
                                ref={nameRef}
                                placeholder="Create username(Only letters and numbers)"
                                required
                            />
                        </div>

                        <br />

                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4"><b>Email Address</b></div>
                            <input
                                className="rounded ps-3 focus:outline-none shadow h-10 w-72 dark:bg-slate-900 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                                type="email"
                                ref={emailRef}
                                placeholder="Enter your email address"
                                required
                            />
                        </div>

                        <br />

                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4"><b>Create Password</b></div>
                            <input
                                className="rounded ps-3 focus:outline-none shadow h-10 w-72 dark:bg-slate-900 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                                type="password"
                                ref={passwordRef}
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        <br />

                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4"><b>Confirm Password</b></div>
                            <input
                                className="rounded ps-3 focus:outline-none shadow h-10 w-72 dark:bg-slate-900 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                                type="password"
                                ref={confPasswordRef}
                                placeholder="Confirm your password"
                                required
                            />
                        </div>

                        <br />

                        <div className="flex justify-center items-center">
                            <button
                                type="submit"
                                className="border p-3 rounded-s-full rounded-e-full ps-5 pe-5 border-orange-800 font-bold text-orange-800 hover:text-white hover:bg-orange-800 hover:shadow-lg hover:ps-6 hover:pe-6
                dark:border-orange-600 dark:text-orange-600 dark:hover:bg-orange-700 dark:hover:text-orange-200 dark:hover:border-orange-700 transition-all duration-200"
                            >
                                SIGN UP
                            </button>
                        </div>
                    </form>

                    <div className="m-3 motion-translate-x-in-[0%] motion-translate-y-in-[100%]">
                        Already have an account?{" "}
                        <Link
                            to="/signin"
                            className="font-bold text-orange-500 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                        >
                            Sign In
                        </Link>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SignUpForm
