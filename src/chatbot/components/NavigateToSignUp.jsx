import React from 'react'

const NavigateToSignUp = () => {
    const func=(e)=>{
        e.preventDefault();
        window.location.href='/signup'
    }
    return (
        <>
            <div className='flex flex-wrap ms-16 gap-3'>
                <button className='border border-neutral-900 rounded-r-full rounded-l-full px-3 py-2' onClick={func}>Click here!</button>
            </div>
        </>
    )
}

export default NavigateToSignUp
