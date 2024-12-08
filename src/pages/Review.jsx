// src/Review.js
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import axiosClient from '../axios-client';
import { useMessageContext } from '../contexts/MessageContext';
import { useStateContext } from '../contexts/StateContext';
import { useNavigate } from 'react-router-dom';

const Review = () => {
    // Create refs for each input field
    const nameRef = useRef();
    const reviewRef = useRef();
    const { setMessage } = useMessageContext()
    const [data, setData] = useState(null)
    const [isFetch, setFetch] = useState(false)
    const { token } = useStateContext()
    const navigate = useNavigate()

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (!token) {
            setMessage('Please login to post a review')
            navigate('/signin')
        }
        else {

            if (reviewRef.current.value == '') {
                setMessage('Please write a review before posting...')
                return
            }
            // Get values from refs
            const payload = {
                name: nameRef.current.value,
                review: reviewRef.current.value
            }

            axiosClient.post('/store/review', payload)
                .then((response) => {
                    setFetch(prev => !prev)
                    setMessage(response.data.message)
                })
                .catch((error) => {
                    setMessage(error.response.data.message)
                })

            // Clear the form fields after submission
            nameRef.current.value = '';
            reviewRef.current.value = '';
        }

    };
    const isEmpty = (obj) => {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    };

    useEffect(() => {
        axiosClient.get('/index/review')
            .then((response) => {
                setData(response.data.data)
            })
            .catch((error) => {
                setMessage('Oops! Something went wrong!')
                console.log(error)
            })
    }, [isFetch])

    return (
        <>
            <div className="flex flex-col items-center gap-10 p-10  min-h-screen h-full bg-gray-100">
                <div className='h-[400px] w-full flex justify-center items-center'>

                    <div className="bg-white p-6 rounded-lg shadow-md w-full h-full  max-w-md motion-preset-pop">
                        <div className="text-2xl flex justify-center items-center gap-3 font-bold text-center mb-6">Submit Your Review
                            <div className='h-10 w-10'>
                                <img src="https://www.iconpacks.net/icons/2/free-review-like-icon-2800-thumb.png" alt="" className='h-full w-full' />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    ref={nameRef}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="review">Review</label>
                                <textarea
                                    id="review"
                                    ref={reviewRef}
                                    rows="4"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"

                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
                <div className='w-full p-5 pt-0'>
                    <div className='text-3xl flex gap-4 justify-start items-center'>
                        <div className='h-14 w-14 motion-preset-pop'>
                            <img src="https://cdn-icons-png.flaticon.com/512/6001/6001245.png" alt="" className='h-full w-full' />
                        </div>
                        <div className='font-bold'>

                            See what others think
                        </div>
                    </div>
                    <div className='w-full p-10 pt-3 flex flex-col gap-3'>
                        {
                            data ?
                                !isEmpty(data) ?
                                    data.map((item, index) => (
                                        <div key={index}>

                                            <div className='w-full bg-white rounded p-5 motion-preset-slide-left'>
                                                <div className='font-bold'>
                                                    {item.name}
                                                </div>
                                                <div className='flex flex-wrap'>
                                                    {item.review}
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                    :
                                    <div className='text-2xl'>
                                        No review Yet! Be the first one to give review!

                                    </div>
                                :
                                <div>Loading...</div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;