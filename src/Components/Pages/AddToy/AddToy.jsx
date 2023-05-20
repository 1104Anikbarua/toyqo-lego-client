import React, { useContext, useState } from 'react';
// import { HiOutlineCloudUpload } from 'react-icons/hi';
import { LegoContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation } from 'react-router-dom';
import UseScroll from '../../UseScroll/UseScroll';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const AddToy = () => {
    const [photo, setPhoto] = useState({})
    const { user } = useContext(LegoContext);

    const { pathname } = useLocation();
    UseScroll(pathname)

    const imageKey = import.meta.env.VITE_IMAGE_KEY;
    // console.log(imageKey)
    const handlePhotoChange = (event) => {
        // console.log(event.target.files[0])
        setPhoto(event.target.files[0])
    }

    const handlePostToy = (event) => {
        event.preventDefault();
        const toyName = event.target.toyname.value;
        const sellerName = event.target.name.value;
        const sellerEmail = user?.email;
        const category = event.target.category.value;
        const price = parseFloat(event.target.price.value);
        const rating = event.target.rating.value;
        const quantity = event.target.quantity.value;
        const detail = event.target.detail.value;
        // console.log(sellerName, sellerEmail, toyName, category, price, rating, quantity, detail)

        const toyInfo = {
            toyName, sellerName, sellerEmail, category, price, rating, quantity, detail
        }



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
                    const toyPhoto = data?.data?.url;
                    const toyInfo = {
                        toyName, sellerName, sellerEmail, category, price, rating, quantity, detail, toyPhoto
                    }

                    fetch('https://batch-7-assignment-11-server.vercel.app/toys', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(toyInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: `Lego Detail Post Success`,
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
        event.target.reset();

    }

    const categories = ['car', 'bus', 'truck']
    const ratings = [1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9]
    return (
        <div className='my-32 w-full max-w-7xl mx-auto px-5 lg:px-0'>
            <PageTitle titles={'AddToys'}></PageTitle>

            <div className='w-full max-w-4xl mx-auto bg-gray-50 rounded-md py-5'>
                <h1 className='text-center font-roboto font-bold text-xl'>Add Toy</h1>
                <form

                    onSubmit={handlePostToy}
                >
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="toyname"
                                className='
                            text-lg font-roboto font-semibold mb-2'>Toy Name</label>
                            <input
                                className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2'
                                type="text"
                                name="toyname"
                                id="toyname"
                                placeholder='Toy Name'
                                required />
                        </div>
                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="photo"
                                className='
                            text-lg font-roboto font-semibold mb-2'>Photo Url</label>

                            <input
                                onChange={handlePhotoChange}
                                className='bg-blue-100
                            outline-none rounded-md pl-1 py-1 placeholder:pl-2'
                                type="file"
                                name="photo"
                                id="file" />
                        </div>
                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="seller name"
                                className='
                            text-lg font-roboto font-semibold mb-2'>Seller Name</label>
                            <input
                                defaultValue={user?.displayName}
                                className='bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2'
                                type="text"
                                name="name"
                                id="name"
                                placeholder='Seller Name'
                                readOnly
                                disabled />
                        </div>
                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="email"
                                className='
                            text-lg font-roboto font-semibold mb-2'>Email</label>
                            <input

                                defaultValue={user?.email}
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2`
                                }
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Email'
                                readOnly
                                disabled />

                        </div>

                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="Category"
                                className='                    text-lg font-roboto font-semibold mb-2'>Sub Category</label>
                            <select
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 
                                `
                                }
                                name="category"
                                id="category"
                                placeholder='Price' >

                                {
                                    categories.map((category) => <option
                                        key={category}
                                        value={category}>{category}</option>

                                    )
                                }

                            </select>
                        </div>

                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="price"
                                className='                      text-lg font-roboto font-semibold mb-2'>Price</label>
                            <input
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 
                                `
                                }
                                type="text"
                                name="price"
                                id="price"
                                placeholder='Price'
                                required />

                        </div>

                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="price"
                                className='
                            text-lg font-roboto font-semibold mb-2'>Rating</label>

                            <select
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 
                                `
                                }
                                name="rating"
                                id="rating"
                                placeholder='Rating' >

                                {
                                    ratings.map((rating) => <option
                                        key={rating}
                                        value={rating}>{rating}</option>)
                                }


                            </select>
                        </div>
                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="Quantity"
                                className='
                            text-lg font-roboto font-semibold mb-2'>Quantity</label>
                            <input
                                // onChange={handleQuantityChange}
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 
                                `
                                }
                                type="text"
                                name="quantity"
                                id="quantity"
                                placeholder='Quantity'
                                required />

                        </div>

                        <div className='flex flex-col mx-auto lg:col-span-2 w-full max-w-4xl lg:px-7'>
                            <label
                                htmlFor="detail"
                                className='
                            text-lg font-roboto font-semibold mb-2'>Detail</label>
                            <textarea
                                name='detail'
                                rows={10}
                                cols={50}
                                placeholder='Detail'
                                className='bg-blue-100 w-full outline-none rounded-md pl-1 py-1 placeholder:pl-2'
                                required
                            >

                            </textarea>
                        </div>
                        <div className='lg:col-span-2 w-full max-w-4xl lg:px-7'>
                            <input className='bg-white contrast-100 font-roboto font-semibold cursor-pointer uppercase shadow-md outline-none rounded-md w-full mx-auto mt-5 h-10'
                                type="submit" value="Add" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;