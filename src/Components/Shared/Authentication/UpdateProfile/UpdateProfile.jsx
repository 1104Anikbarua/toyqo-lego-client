import React, { useContext, useState } from 'react';
import { LegoContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import PageTitle from '../../PageTitle/PageTitle';

const UpdateProfile = () => {
    const { user, updateUser, setRefresh } = useContext(LegoContext);
    const [name, setName] = useState(user?.displayName);
    const [photo, setPhoto] = useState(user?.photoURL);

    const imageKey = import.meta.env.VITE_IMAGE_KEY;
    // console.log(imageKey)

    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const formData = new FormData()
        formData.append('image', photo)
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${imageKey}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.status === 200) {
                    updateUser(name, data?.data?.display_url)
                        .then(() => {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `${name} is set as Display Name`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                            setRefresh(new Date().getTime())
                        })
                        .catch(() => {
                            Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: `Something went wrong`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                }

            })

    }
    const handleNameChange = (event) => {
        const name = event.target.value;
        // console.log(name)
        setName(name)
    }
    const handlePhotoChange = (event) => {
        // console.log(event.target.files[0])
        setPhoto(event.target.files[0])
    }

    return (
        <div className='my-32 w-full max-w-7xl mx-auto px-5 lg:px-0'>
            <PageTitle titles={'Update Profile'}></PageTitle>
            <div className='w-full max-w-4xl mx-auto bg-gray-50 rounded-md py-5'>
                <h1 className='text-center font-roboto font-bold text-xl'>Update Profile</h1>
                <form

                    onSubmit={handleUpdateProfile}
                >
                    <div className='grid lg:grid-cols-2 gap-5'>

                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="name"
                                className='                      text-lg font-roboto font-semibold mb-2'>Name</label>
                            <input
                                onChange={handleNameChange}
                                defaultValue={user?.displayName}
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 
                                `
                                }
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Your Name'
                                required />

                        </div>
                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="email"
                                className='
                            text-lg font-roboto font-semibold mb-2'>Email</label>
                            <input

                                defaultValue={user?.email}
                                readOnly
                                disabled
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2`
                                }
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email'
                                required />

                        </div>
                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="photo"
                                className='                      text-lg font-roboto font-semibold mb-2'>Photo</label>
                            <input
                                onChange={handlePhotoChange}
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 
                                `
                                }
                                type="file"
                                name="photo"
                                id="photo"
                                placeholder='Photo'
                                required />

                        </div>


                        <div className='lg:col-span-2 w-full max-w-xs mx-auto lg:px-7'>
                            <input className='bg-white contrast-100 font-roboto font-semibold cursor-pointer uppercase shadow-md outline-none rounded-md w-full mx-auto mt-5 h-10'
                                type="submit" value="Update Profile" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;