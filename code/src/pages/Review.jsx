// src/Review.js
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import axiosClient from '../axios-client';
import { useMessageContext } from '../contexts/MessageContext';
import { useStateContext } from '../contexts/StateContext';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../services/user-api';

const Review = () => {
    // Create refs for each input field
    const nameRef = useRef();
    const reviewRef = useRef();
    const { setMessage } = useMessageContext()
    const [data, setData] = useState(null)
    const [isFetch, setFetch] = useState(false)
    const { token } = useStateContext()
    const [isAnonymous, setAnonymous] = useState(false)
    const [parent_id, setParent_id] = useState(null)
    const [is_reply, set_reply] = useState(null)
    const navigate = useNavigate()


    const authUser = useQuery({
        queryKey: ['user'],
        queryFn: fetchUser
    })
    // console.log(authUser.data.name)

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (!token) {
            setMessage('Please login to post a review or Reply')
            navigate('/signin')
        }
        else {

            if (reviewRef.current.value == '') {
                setMessage('Please write something before posting...')
                return
            }
            // Get values from refs
            const payload = {
                name: isAnonymous ? 'Anonymous' : authUser.data.name,
                review: reviewRef.current.value,
                is_reply:is_reply??0,
                parent_id:parent_id??0
                
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
            // nameRef.current.value = '';
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
                <div className='h-[300px] w-full flex justify-center items-center'>

                    <div className="bg-neutral-50 p-6 rounded-lg shadow-md w-full h-full  max-w-md motion-preset-pop">
                        <div className="text-2xl flex justify-center items-center gap-3 font-bold text-center mb-6">Submit Your Review
                            <div className='h-10 w-10'>
                                <img src="https://www.iconpacks.net/icons/2/free-review-like-icon-2800-thumb.png" alt="" className='h-full w-full' />
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {/* <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    ref={nameRef}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div> */}

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="review">Review</label>
                                <textarea
                                    id="review"
                                    ref={reviewRef}
                                    rows="4"
                                    placeholder='Write review here...'
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"

                                ></textarea>
                            </div>
                            <div className='flex gap-4'>
                                <button
                                    onClick={() => setAnonymous(true)}
                                    type="submit"
                                    className="w-full bg-yellow-700 text-white font-semibold py-2 rounded-md transition duration-200"
                                >
                                    Post as Anonymous
                                </button>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                                >
                                    Post
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
                <ReviewPanel set_reply={set_reply} setParent_id={setParent_id} data={data} isEmpty={isEmpty} reviewRef={reviewRef} handleSubmit={handleSubmit} setAnonymous={setAnonymous} />

            </div>
        </>
    );
};

export default Review;

const ReviewPanel = ({set_reply, data, isEmpty, reviewRef, handleSubmit, setAnonymous, setParent_id }) => {
    const [isReply, setReply] = useState(false)
    const [name, setName] = useState(null)
    const [id, setId] = useState(null)
    return (
        <>
            <div className='w-full p-5 pt-0'>
                <div className='text-3xl flex gap-4 justify-start items-center'>
                    <div className='h-14 w-14 motion-preset-pop'>
                        <img src="https://cdn-icons-png.flaticon.com/512/6001/6001245.png" alt="" className='h-full w-full' />
                    </div>
                    <div className='font-bold'>

                        See what others think
                    </div>
                </div>
                <div className='w-full sm:p-10 pt-3 flex flex-col gap-3'>
                    {
                        data ?
                            !isEmpty(data) ?
                                data.slice().reverse().map((item, index) => (
                                    <div key={index}>

                                        <div className='w-full bg-neutral-50 rounded p-5 motion-preset-slide-left'>
                                            <div className='font-bold'>
                                                {item.name}
                                            </div>
                                            <div className='flex flex-wrap'>
                                                {item.review}
                                            </div>

                                            <div className='flex justify-self-end mb-3 hover:cursor-pointer' onClick={() => { setName(item.name); setId(item.id); setReply(true); }}>
                                                Reply
                                            </div>
                                            {/* <div className='flex justify-self-end mb-3 hover:cursor-pointer' onClick={() => { setName(item.name); setId(item.id); setReply(true); }}>
                                                View replies
                                            </div> */}

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
            <div className='fixed left-0 bottom-0 z-10 w-full'>
                {
                    isReply &&
                    <ReplyPanel set_reply={set_reply} setParent_id={setParent_id} name={name} review_id={id} setReply={setReply} reviewRef={reviewRef} handleSubmit={handleSubmit} setAnonymous={setAnonymous} />
                }
            </div>
        </>
    )
}

const ReplyPanel = ({ set_reply,setParent_id, name, review_id, setReply, reviewRef, handleSubmit, setAnonymous }) => {
    // const reviewRef = useRef()

    return (
        <>
            <div className='motion-preset-slide-up'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='bg-slate-700 text-neutral-50 gap-3 flex flex-col p-3'>

                        <div className='flex w-full justify-between'>
                            <div>

                                Reply to <span className='font-bold'>{name}</span>
                            </div>
                            <div className='hover:cursor-pointer' onClick={() => setReply(false)}>
                                close
                            </div>
                        </div>
                        <div className='w-full flex gap-4 justify-center items-center'>
                            <input type="text" ref={reviewRef} className='w-[60%] h-9 px-2 focus:outline-none text-neutral-950' placeholder='write here...' />
                            <div className='w-[40%] flex gap-3 justify-center items-center'>
                                <button
                                    onClick={() => { setAnonymous(true); setParent_id(review_id);set_reply(1) }}
                                    type="submit"
                                    className="w-[70%] bg-yellow-700 text-white font-semibold py-2 rounded-md transition duration-200"
                                >
                                    Post as Anonymous
                                </button>
                                <button
                                    onClick={() =>{ setParent_id(review_id);set_reply(1)}}
                                    type="submit"
                                    className="w-[30%] bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                                >
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}