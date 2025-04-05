import { useMutation } from '@tanstack/react-query'
import React, { useRef } from 'react'
import { authLogin } from '../services/auth-api'
import { Link, useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/StateContext'
import { usePanelContext } from '../contexts/PanelContext'
import { useMessageContext } from '../contexts/MessageContext'

const Signin = () => {

    const { setUser, setToken } = useStateContext();
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate();
    const { setSidebarOpen } = usePanelContext()
    const { setMessage } = useMessageContext()

    const loginMutation = useMutation({
        mutationFn: authLogin,
        onSuccess: (data) => {
            console.log(data)
            setUser(data.data)
            setToken(data.token)
            navigate('/')
            setMessage('Logged in Successfully')
            setSidebarOpen(false)
        },
        onError: (error) => {
            console.log(error)
            setMessage(error.response.data.message)
        }
    })

    const handleSubmit = (e) => {
        console.log("hello signin")
        e.preventDefault();
        console.log(emailRef.current.value, passwordRef.current.value)

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        };
        loginMutation.mutate(payload)


    }
    return (
        <>
            <div className='flex flex-col h-full gap-6 w-full items-center dark:bg-slate-900 dark:text-white'>

                <div className="flex justify-center gap-3 items-center flex-col w-full sm:w-3/4">

                    <div className='flex justify-start items-center gap-5 font-bold sm:text-5xl text-2xl w-3/4 sm:m-20 m-10 sm:ps-5 sm:mb-5 mb-2 '>
                        <div className='motion-preset-slide-right'>Login to Your Account</div>
                        <div className='sm:h-14 sm:w-14 h-10 w-10 motion-translate-x-in-[0%] motion-translate-y-in-[-100%] dark:invert'>
                            <img src="https://cdn-icons-png.flaticon.com/512/295/295128.png" alt="" className='w-full h-full' />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} method="post" className="flex w-3/4 flex-col justify-center items-center border rounded-md pt-5 pb-5 shadow-lg motion-preset-pop dark:border-slate-700 dark:bg-slate-800">
                        {/* {% csrf_token %} */}

                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4"><b>Email Id</b></div>
                            <input
                                className="rounded ps-3 focus:outline-none shadow h-10 w-72 dark:bg-slate-900 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                                type="email"
                                ref={emailRef}
                                placeholder="e.g.: abc@example.in"
                                required
                            />
                        </div>

                        <br />

                        <div className="flex flex-row gap-4 w-3/4 items-center justify-center">
                            <div className="w-2/4" ><b>Password</b></div>
                            <input
                                className="rounded ps-3 focus:outline-none shadow h-10 w-72 dark:bg-slate-900 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
                                type="password"
                                ref={passwordRef}
                                placeholder="******"
                                required
                            />
                        </div>

                        <br />

                        <div className="flex justify-center items-center">
                            <button
                                type="submit"
                                className="border p-3 rounded-s-full rounded-e-full ps-5 pe-5 border-orange-800 font-bold text-orange-800 hover:text-white hover:bg-orange-800 hover:shadow-lg hover:ps-6 hover:pe-6
                dark:border-orange-600 dark:text-orange-600 dark:hover:text-orange-200 dark:hover:bg-orange-700 dark:hover:border-orange-700 transition-all duration-200"
                            >
                                SIGN IN
                            </button>
                        </div>
                    </form>

                    <div className="m-3 motion-translate-x-in-[0%] motion-translate-y-in-[100%]">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="font-bold text-orange-500 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
                        >
                            Sign Up
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signin
