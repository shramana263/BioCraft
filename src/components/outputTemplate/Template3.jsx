import React from "react";

const Template3 = () => {
  return (
    <div className="bg-gray-100 py-10 flex justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-3xl">
        {/* Title Section */}
        <div className="text-center border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold uppercase text-gray-700">Bio Data</h1>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-800">
          {/* Left Section */}
          <div className="col-span-2 space-y-2">
            <p>
              <span className="font-semibold">Name:</span> Satish Kommu
            </p>
            <p>
              <span className="font-semibold">Email ID:</span>{" "}
              satishkmuxx@gmail.com
            </p>
            <p>
              <span className="font-semibold">Mobile No:</span> 8500XXXX56
            </p>
            <p>
              <span className="font-semibold">Date of Birth:</span> 25 June 2001
            </p>
            <p>
              <span className="font-semibold">Nationality:</span> Indian
            </p>
            <p>
              <span className="font-semibold">Religion:</span> Hindu
            </p>
            <p>
              <span className="font-semibold">Marital Status:</span> Unmarried
            </p>
            <p>
              <span className="font-semibold">Education:</span> B.Sc
            </p>
            <p>
              <span className="font-semibold">Experience:</span>
              <br />
              1. Jr Accountant at <span className="font-semibold">ABC Foundation</span> from 01 Feb 2019 to 30 Jun 2021
              <br />
              2. Working as a <span className="font-semibold">Jr Accountant</span> at <span className="font-semibold">XYZ Pvt Ltd</span> since 01 July 2021
            </p>
            <p>
              <span className="font-semibold">Skills:</span> Tally, MS Office (Excel, Word & PowerPoint)
            </p>
            <p>
              <span className="font-semibold">Hobbies:</span> Reading books, Playing Cricket
            </p>
            <p>
              <span className="font-semibold">Languages Known:</span> English, Hindi, and Telugu
            </p>
            <p>
              <span className="font-semibold">Address:</span> H No: 8-125, Ganesh Nagar, Madhurawada, Visakhapatnam, Andhra Pradesh 530045
            </p>
          </div>

          {/* Right Section - Photo */}
          <div className="col-span-1 flex justify-center items-center">
            <div className="h-32 w-32 rounded-full overflow-hidden border border-gray-300">
              {/* Placeholder for the image */}
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Declaration Section */}
        <div className="mt-6 text-sm text-gray-800">
          <p>
            <span className="font-semibold">Declaration:</span> I hereby declare
            that all the above information is true and correct to the best of my
            knowledge.
          </p>
        </div>

        {/* Footer Section */}
        <div className="mt-6 flex justify-between items-center text-sm">
          <p>Place:</p>
          <p>Date:</p>
          <div className="text-right">
            <p className="font-semibold">Signature</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;