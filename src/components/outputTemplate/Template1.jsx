import React from 'react'

const Template1 = () => {
  return (
    <>
      <div className='flex justify-center items-center h-full w-full p-5'>

        <div className='flex flex-col w-[90vh] justify-center border-2 pt-3 '>
          <div className='flex justify-center items-center w-full h-[21%] bg-blue-900 pe-3'>
            <div className='h-[135px] w-[120px] border'>

              <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                className='h-full w-full'
                alt="" />

            </div>

            <div className='w-[70%] text-white p-3 pb-1 flex flex-col gap-3'>
              <div className='flex flex-col h-[50%]'>
                <span className='text-lg'>Salman Patel</span>
                <span className='text-xs'>software engineer</span>
              </div>
              <div className='flex h-[50%] items-center'>
                <div className='flex flex-col items-start text-[9px] w-[50%]' >
                  <div><span>Phone : </span><span>9836529772</span></div>
                  <div><span>Email : </span><span>abcd@gmail.com</span></div>
                  <div><span>LinkedIn : </span><span>abcdbyugfwekufbvc</span></div>
                  <div><span>Github : </span><span>abcdbyugfwekufbvc</span></div>
                </div>
                <div className='h-[50px] m-3 border-l-[1px] border-gray-300'>

                </div>
                <div className='flex flex-col justify-start items-start text-[9px] w-[50%] ' >
                  <div><span>Address : </span><span>abcd..........</span></div>
                  <div><span>Date of birth : </span><span>17-9-1998</span></div>
                  <div><span>Gender : </span><span>Male</span></div>
                  <div><span>Nationality:</span><span>Indian</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col p-2 pt-3  h-[80%]'>
            <div className='text-[10px] ps-4 pe-4'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
            </div>
            <div className='ps-4 mt-2 font-bold text-blue-800'>
              Education
            </div>
            <hr className=' border border-black' />
            <div className='flex text-[10px] ps-4 pe-4'>
              <div className='font-bold w-[20%]'>
                <span>2011-2015</span>
              </div>
              <div className='flex flex-col w-[80%]'>
                <div className='font-bold '>
                  High School Diploma
                </div>
                <div>
                  LTGSGHS
                </div>
                <div>
                  Marks: 88%
                </div>
              </div>
            </div>
            <div className='text-xs ps-3 flex'>
              <span className='font-bold'>Specialization : </span>
              <span>
                <div className='flex flex-col'>
                  <span>
                    Introduction to C
                  </span>
                  <span><i>GFG</i></span>
                </div>
              </span>
            </div>

            <div className='ps-4 mt-2 font-bold text-blue-800'>
              Experience
            </div>
            <hr className=' border border-black' />
            <div className='flex text-[10px] ps-4 pe-4'>
              <div className='font-bold w-[20%]'>
                <span>2011-2015</span>
              </div>
              <div className='flex flex-col w-[80%]'>
                <div className='font-bold '>
                  Software engineer
                </div>
                <div>
                  <i>Geeks for Geeks</i>
                </div>
                <div className='ps-3'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate


                </div>
              </div>
            </div>

            <div className='ps-4 mt-2 font-bold text-blue-800'>
              Skills
            </div>
            <hr className=' border border-black' />
            <div className='flex text-[10px] ps-4 pe-4'>
              <div className='flex flex-col w-[80%]'>
                <div className=' '>
                  <span>1. </span>
                  <span>C, C++ , Python</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Template1
