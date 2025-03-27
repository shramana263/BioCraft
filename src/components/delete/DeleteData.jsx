import React from 'react'
import { useDataContext } from '../../contexts/DataContext'

const DeleteData = ({id, setDeleteData}) => {

  const {deleteUserData}= useDataContext()
  return (
    <>
      <div className='h-screen w-full absolute z-50 flex justify-center items-center top-0 left-0'>


        <div className=' fixed grid grid-rows-[50px_1fr_50px] gap-3 border p-8 sm:p-16  rounded-xl shadow-xl h-[200px] sm:h-[250px] w-[80%] m-5 items-center md:w-[780px] xl:w-[600px] bg-white motion-preset-expand'>

          
          <div className='h-full  w-full flex justify-center items-center '>
            <div className='text-lg'>
                The record will be permanently lost! Do you want to delete this data?
            </div>
          </div>
          <div>
            <div className='w-full flex justify-end items-center gap-4'>
              <div className='hover:cursor-pointer text-red-600 border-red-600 border-2 ps-5 pe-5 pt-2 pb-2 rounded-lg'
                onClick={() => setDeleteData(null)}>
                Cancel
              </div>
              {
                // updateButton &&
                <div className='hover:cursor-pointer rounded-lg bg-blue-700 ps-5 pe-5 pt-3 pb-3 text-white'
                  onClick={()=>deleteUserData(id)}
                  >
                  DELETE
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteData
