import React from "react";

const Template2 = () => {
  return (
    <div className="bg-gray-100 py-10 flex justify-center">
      <div className="bg-white shadow-lg rounded-md p-8 w-full max-w-2xl">
        {/* Header Section */}
        <div className="text-center border-b pb-4 mb-6 bg-sky-700 text-white">
          <h1 className="text-2xl font-bold ">RAJEEV SEN</h1>
          <p className="text-sm">Mobile No: 8555******</p>
          <p className="text-sm">Email Id: rajeev.sen@gmail.com</p>
        </div>

        {/* Personal Details Section */}
        <div className="flex flex-row gap-5 text-sm text-gray-800 justify-between">
          <div className="flex flex-col gap-4">
            <p>
              <span className="font-semibold">Date of Birth:</span> 11 March 1990
            </p>
            <p>
              <span className="font-semibold">Gender:</span> Male
            </p>
            <p>
              <span className="font-semibold">Father's Name:</span> Rajeev Sen
            </p>
            <p>
              <span className="font-semibold">Nationality:</span> Indian
            </p>
            <p>
              <span className="font-semibold">Marital Status:</span> Unmarried
            </p>
            <p>
              <span className="font-semibold">Languages Known:</span> English &
              Telugu
            </p>
          </div>
          <div className="w-52 border" >
            <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt="" />
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg text-blue-600 mb-2">Education</h2>
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-2 py-1 text-left">
                  Course
                </th>
                <th className="border border-gray-300 px-2 py-1 text-left">
                  University/College
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
              <tr>
                <td className="border border-gray-300 px-2 py-1">B.Com Computers</td>
                <td className="border border-gray-300 px-2 py-1">
                  Siena Degree College
                </td>
                <td className="border border-gray-300 px-2 py-1">2020</td>
                <td className="border border-gray-300 px-2 py-1">4 GPA</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">Inter CEC</td>
                <td className="border border-gray-300 px-2 py-1">
                  St. Marks Junior College
                </td>
                <td className="border border-gray-300 px-2 py-1">2017</td>
                <td className="border border-gray-300 px-2 py-1">86%</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-1">SSC</td>
                <td className="border border-gray-300 px-2 py-1">
                  Siddhartha High School
                </td>
                <td className="border border-gray-300 px-2 py-1">2015</td>
                <td className="border border-gray-300 px-2 py-1">92%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Experience Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg text-blue-600 mb-2">Experience</h2>
          <p>1 Year</p>
        </div>

        {/* Address Section */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg text-blue-600 mb-2">Address</h2>
          <p>1-96/4, Krishi Nagar, Telangana, India</p>
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
          <p className="text-sm">Place: Telangana</p>
          <p className="text-sm">Date: March 2023</p>
          <div className="text-right">
            <p className="font-semibold">Signature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;