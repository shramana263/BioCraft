import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';
import UploadDoc from '../forms/UploadDoc';
import Preview, { PreviewComponent } from '../Preview';
import { useDataContext } from '../../contexts/DataContext';
import { useMessageContext } from '../../contexts/MessageContext';

const Gallery = () => {
    const [images, setImages] = useState(null)
    const [isOpen, setOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null);
    const { currentProfileImage, setCurrentProfileImage } = useDataContext();
    const {setMessage}= useMessageContext()

    const token = localStorage.getItem('ACCESS_TOKEN');
    const getCurrentProfileImage = () => {
        axiosClient.get('/show/profile-image')
            .then(response => {
                console.log("currentprofileimage : ", response.data)

                setCurrentProfileImage(prev => response.data)
                console.log(currentProfileImage)
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
            await axiosClient.put(`/update/profile-image/${currentProfileImage.id}`, payload, {
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
            else{
                console.log("error")
                setMessage('Error in Updating Profile Picture')
            }
        }
        catch (error) {
            console.log(error)
        }


    }

    const handleClick = (id) => {

        const payload = {
            active_status: 1,
        }

        axiosClient.put(`/update/profile-image/${id}`, payload, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`
            },
        })
            .then(response => {
                console.log('profile picture update', response)
                changeActiveStatus();
                getCurrentProfileImage();
            })
            .catch(err => {
                console.log(err)
            })


    }


    useEffect(() => {
        axiosClient.get('/index/profile-image')
            .then(response => {
                // console.log("response gallery : ", response.data.url[0].id)
                setImages(response.data.url)
                // console.log("images", images)
                // setNext(response.data.step)
                //   return response.data;
            })
            .catch(err => {
                throw err;
            });
    }, [currentProfileImage])
    return (
        <>
            <div className='md:h-[90vh] md:w-[100vh] min-[412px]:h-full min-[412px]:w-screen  border rounded-lg p-7 shadow-lg flex  flex-col justify-center items-center gap-3'>
                {
                    images?
                    <>
                        <div>
                            Click to choose from below
                        </div>
                        <div className='grid grid-cols-4 h-56 gap-2 overflow-y-scroll'>
                            {images && images.map((image, index) => (
                                <div key={index} className="h-[100%] w-[100%]" onDoubleClick={() => {
                                    setOpen(true);
                                    setSelectedImage(image.url);
                                }}

                                    onClick={() => handleClick(image.id)}
                                >
                                    <img src={image.url} alt="" />
                                    {isOpen && (
                                        <PreviewComponent image={selectedImage} setOpen={setOpen} isOpen={isOpen} />
                                    )}
                                </div>
                            ))}


                        </div>
                        <div className='flex justify-between items-center gap-3'>
                            <div className='h-0 md:w-56 min-[412px]:w-36 border '></div>
                            <div> OR</div>
                            <div className='h-0 md:w-56 min-[412px]:w-36 border '></div>
                        </div>
                    </>
                    :
                    <div>Upload image</div>
                }


                <UploadDoc />

            </div>
        </>
    )
}

export default Gallery
