import React from 'react'

const BctIot = () => {
    return (
        <div className='p-3'>
            <div className='flex justify-center items-center xl:text-4xl text-3xl font-serif font-bold'><span className='text-teal-600 pe-2'>LPG GAS MONITORING </span> AND ALERT SYSTEM</div>
            <div className='flex justify-center items-center mt-10 gap-8'>
                <div className='text-3xl'>
                    <span className='flex justify-center items-center'>Gas Level</span>
                </div>
                {/* <!-- Circular Progress --> */}
                <div class="relative size-40">
                    <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        {/* <!-- Background Circle --> */}
                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="4"></circle>
                        {/* <!-- Progress Circle --> */}
                        <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-green-600 dark:text-green-500" stroke-width="2" stroke-dasharray="100" stroke-dashoffset="65" stroke-linecap="round"></circle>
                    </svg>

                    {/* <!-- Percentage Text --> */}
                    <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                        <span class="text-center text-2xl font-bold text-green-600 dark:text-green-500">35%</span>
                    </div>
                </div>

            </div>
            <div className=' flex justify-center items-center p-5'>
                <div className='w-full flex justify-start items-center text-2xl text-teal-600 font-bold'>
                    LPG Level History
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default BctIot
