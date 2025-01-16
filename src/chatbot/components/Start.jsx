import React from 'react'

export default function StartBtn(props) {

    const initialAction = () => {
        props.actions.initialAction();
    }
    const initialAction1=()=>{
        props.actions.initialAction1();
    }

    return (
        <div className='flex flex-wrap ms-16 gap-3'>
            <button className='border border-neutral-900 rounded-r-full rounded-l-full px-3 py-2' onClick={initialAction}>How to start</button>
            <button className='border border-neutral-900 rounded-r-full rounded-l-full px-3 py-2' onClick={initialAction1}>How to get my biodata</button>
            <button className='border border-neutral-900 rounded-r-full rounded-l-full px-3 py-2' onClick={initialAction1}>How to make my profile</button>
        </div>
    )
}