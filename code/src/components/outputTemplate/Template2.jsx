import { useQuery } from "@tanstack/react-query";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { fetchUser } from "../../services/user-api";
import { useReactToPrint } from "react-to-print";
import { FaDownload } from "react-icons/fa";

const Template2 = () => {
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });
  const location = useLocation();
  const personalData = location.state.personalData;
  const educationalData = location.state.educationalData;
  // const specializationData = location.state.specializationData;
  const experienceData = location.state.experienceData;
  // const skillData = location.state.skillData;
  const profileImage = location.state.profileImage

  const authUser = useQuery({
    queryKey: ['user'],
    queryFn: fetchUser
  })

  return (
    <>
      <button className='fixed bottom-8 right-8 shadow-md bg-lime-100 border p-4 rounded-full font-bold m-5' onClick={reactToPrintFn}><FaDownload size={20} /></button>
      <div className="bg-gray-100 h-full items-center flex justify-center">

        <div ref={contentRef}>

          <div className="bg-white shadow-lg rounded-md p-8 w-full">
            {/* Header Section */}
            <div className="text-center border-b pb-4 mb-6 bg-sky-700 text-white">
              <h1 className="text-2xl font-bold ">{personalData.fname} {personalData.lname}</h1>
              <p className="text-sm">Mobile No: {personalData.contact_no}</p>
              <p className="text-sm">Email Id: {authUser.data.email}</p>
            </div>

            {/* Personal Details Section */}
            <div className="flex flex-row gap-5 text-sm text-gray-800 justify-between">
              <div className="flex flex-col gap-4">
                <p>
                  <span className="font-semibold">Date of Birth:</span> {personalData.DOB}
                </p>
                <p>
                  <span className="font-semibold">Gender:</span> {personalData.gender}
                </p>
                <p>
                  <span className="font-semibold">Nationality:</span> {personalData.nationality}
                </p>
                <p>
                  <span className="font-semibold">Marital Status:</span> {personalData.marital_status}
                </p>
                <p>
                  <span className="font-semibold">Languages Known:</span> English &
                  Telugu
                </p>
              </div>
              <div className="w-52 border" >
                <img src={profileImage ? profileImage : "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"}
                  className='h-full w-full'
                  alt="" />
              </div>
            </div>

            {/* Education Section */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-600 mb-2">Education</h2>
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-2 py-1 text-left">
                      Degree
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-left">
                      School/University
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-left">
                      Year of Pass
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-left">
                      Marks
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    educationalData && educationalData.map((data, index) => (

                      <tr key={index}>
                        <td className="border border-gray-300 px-2 py-1">{data.degree}</td>
                        <td className="border border-gray-300 px-2 py-1">
                          {data.school_university}
                        </td>
                        <td className="border border-gray-300 px-2 py-1">{data.year_of_passing}</td>
                        <td className="border border-gray-300 px-2 py-1">{data.gpa ? data.gpa : data.percentage} {data.gpa ? "GPA" : "%"}</td>
                      </tr>
                    ))
                  }

                </tbody>
              </table>
            </div>

            {/* Experience Section */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-600 mb-2">Experience</h2>
              {
                experienceData && experienceData.map((data, index) => (

                  <div className='flex flex-col text-md ps-4 pe-4' key={index}>
                    <div className='font-bold w-[50%]'>
                      <span>{data.starting_date} to {data.ending_date}</span>
                    </div>
                    <div className='flex flex-col w-[80%]'>
                      <div className='font-bold '>
                        {data.role}
                      </div>
                      <div>
                        <i>( {data.organisation} )</i>
                      </div>
                      <div className='ps-2'>
                        {data.description ? data.description : ""}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* Address Section */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-600 mb-2">Address</h2>
              <p>{personalData.address}</p>
            </div>

            {/* Declaration Section */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg text-blue-600 mb-2">Declaration</h2>
              <p>
                I hereby declare that the above information is true to the best of my
                knowledge.
              </p>
            </div>

            {/* Footer Section */}
            <div className="mt-6 flex justify-between items-center">
              <p className="text-sm">Date: {new Date().toLocaleDateString('en-GB')}</p>
              <div className="text-right">
                <p className="font-semibold">Signature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template2;