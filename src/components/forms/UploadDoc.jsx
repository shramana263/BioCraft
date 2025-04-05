import React, { useEffect, useRef, useState } from 'react';
import { SlCloudUpload } from "react-icons/sl";
import axiosClient from '../../axios-client';
import { useDataContext } from '../../contexts/DataContext';
import { useMessageContext } from '../../contexts/MessageContext';

const UploadDoc = () => {

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [, setTags] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');
  const [isDraggingOver, setDraggingOver] = useState(false)
  // const { profileImage, setProfileImage } = useDataContext()
  const { currentProfileImage, setCurrentProfileImage } = useDataContext()
  const {setMessage}= useMessageContext()

  const inputRef = useRef()
  const token = localStorage.getItem('ACCESS_TOKEN');

  const getCurrentProfileImage = () => {
    axiosClient.get('/show/profile-image')
      .then(response => {
        console.log("currentprofileimage : ", response.data)

        setCurrentProfileImage(prev => response.data)
        // setNext(response.data.step)
        //   return response.data;
      })
      .catch(err => {
        throw err;
      });
  }

  const changeActiveStatus = async () => {

    console.log(currentProfileImage)
    // const index = currentProfileImage.url.indexOf('local/');
    // const substring = currentProfileImage.url.substring(index + 6);
    // console.log("substring : ", substring)
    const payload = {
      active_status: 0,
    }

    try {
      // console.log(payload)
      const response= await axiosClient.put(`/update/profile-image/${currentProfileImage.id}`, payload, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        },
      })
      if (response.status == 201 || response.status == 200) {
        console.log("data updated")
        setMessage('Profile Picture Updated Successfully')
        getCurrentProfileImage();
      
      }
    }
    catch (error) {
      console.log(error)
      setMessage('Error in Updating Profile Picture')
    }


  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("button clicked!")
    console.log(selectedFiles)


    if (!selectedFiles.length) {
      setUploadStatus('Please select a file to upload');
      return;
    }
    // for (const file of selectedFiles) {

    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append('image', file);
    };
    // formData.append('tags', JSON.stringify(tags.split(',').map(tag => ({ name: tag.trim() }))));
    // formData.append('tags',tags);
    console.log(formData)

    try {
      const response = await axiosClient.post('/store/profile-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer ${token}`
        },
      });
      if (response.status === 201 || response.status === 200) {
        setUploadStatus('Files uploaded successfully!');
        setTags('')
        setSelectedFiles([])
        setDraggingOver(false)
        changeActiveStatus();

      }
      // console.log(response.status)

    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('File upload failed.');
    }
    // }
  };

  const handleFileChange = (event) => {
    setSelectedFiles(prev => [...prev, ...event.target.files]); // Select multiple files
    console.log(selectedFiles)
    if (selectedFiles.length > 1) {
      setUploadStatus('Select only one image')
    }
    // setUploadStatus(''); // Clear previous status
  };



  const handleDragOver = (e) => {

    e.preventDefault();
    setDraggingOver(true)
  }

  const handleDrop = (e) => {

    e.preventDefault();
    // setFile(e.dataTransfer.files[0])
    setSelectedFiles(prev => [...prev, ...e.dataTransfer.files])
    if (selectedFiles.length > 1) {
      setUploadStatus('Select only one image')
    }
    // console.log(file)
  }
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDraggingOver(false);
  }

  const handleChangeFile = (e) => {
    e.preventDefault();

    setDraggingOver(false)

  }

  useEffect(() => {
    getCurrentProfileImage();

    // const index = currentProfileImage.indexOf('local/');
    // const substring = originalString.substring(index + 6);
    // console.log("substring : ", substring)
  }, [])




  return (
    <>
  <div className="max-w-lg w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg">
    <form onSubmit={handleSubmit}>
      <div className='flex w-full justify-center items-center'>
        {!selectedFiles.length && (
          <div
            className="dropzone flex flex-col w-full justify-center items-center gap-3 p-2 transition-colors duration-300"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onDragLeave={handleDragLeave}
            style={{
              border: isDraggingOver 
                ? "4px dashed #00C21A" 
                : "4px dashed #757070"
            }}
          >
            <div className='font-thin dark:text-green-400' style={{ color: isDraggingOver ? "#00C21A" : "#757070" }}>
              <SlCloudUpload size={80} className="dark:text-green-400" />
            </div>
            <h1 className='text-lg dark:text-green-400' style={{ color: isDraggingOver ? "#00C21A" : "#757070" }}>
              Drag and Drop File to Upload
            </h1>
            <h1 className='dark:text-green-400' style={{ color: isDraggingOver ? "#00C21A" : "#757070" }}>Or</h1>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              hidden
              ref={inputRef}
            />
            <div 
              className='rounded p-3 hover:cursor-pointer transition-colors duration-300 dark:text-green-400 dark:border-green-500'
              style={{ 
                color: isDraggingOver ? "#00C21A" : "#757070",
                border: isDraggingOver ? "2px solid #00C21A" : "2px solid #757070"
              }}
              onClick={() => inputRef.current.click()}
            >
              Select File
            </div>
          </div>
        )}
        
        <div className='flex flex-col w-full'>
          {selectedFiles.length > 0 && (
            <span className='text-xl font-bold dark:text-white'>Selected File</span>
          )}
          {selectedFiles && (
            <div className='w-full space-y-2'>
              {selectedFiles.map((file) => (
                <div key={file.name} className='grid grid-cols-2 justify-center items-center gap-7 p-2'>
                  <span className='border ps-4 pe-4 pt-2 pb-2 border-black dark:border-slate-400 text-lg dark:text-gray-300'>
                    {file.name}
                  </span>
                  <div 
                    className='border p-2 rounded bg-slate-900 dark:bg-green-700 flex justify-center items-center text-xl text-white hover:cursor-pointer transition-colors duration-300 dark:hover:bg-green-600'
                    onClick={handleChangeFile}
                  >
                    Change file
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-indigo-600 dark:bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 dark:hover:bg-green-700 transition-colors duration-300"
      >
        Upload
      </button>
      
      {uploadStatus && (
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          {uploadStatus}
        </p>
      )}
    </form>
  </div>
</>
  );
};

export default UploadDoc;