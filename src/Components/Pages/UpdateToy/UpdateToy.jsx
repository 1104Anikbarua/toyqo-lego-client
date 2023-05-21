import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseScroll from '../../UseScroll/UseScroll';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const UpdateToy = () => {

    const { id } = useParams();
    const { pathname } = useLocation();
    UseScroll(pathname);

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const photo = event.target.photo.value;
        const price = parseFloat(event.target.price.value);
        const quantity = event.target.quantity.value;
        const detail = event.target.detail.value;

        const updateInfo = {
            photo,
            price,
            quantity,
            detail
        }
        // https://batch-7-assignment-11-server.vercel.app/
        // https://batch-7-assignment-11-server.vercel.app

        fetch(`https://batch-7-assignment-11-server.vercel.app/toys/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: `Update success`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
        event.target.reset();
    }
    return (
        <div className='my-32 w-full max-w-7xl mx-auto px-5 lg:px-0'>
            <PageTitle titles={'Update'}></PageTitle>
            <div className='w-full max-w-4xl mx-auto bg-gray-50 rounded-md py-5'>
                <h1 className='text-center font-roboto font-bold text-xl'>Update Toy</h1>
                <form

                    onSubmit={handleUpdateToy}
                >
                    <div className='grid lg:grid-cols-2 gap-5'>

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
                                htmlFor="photo"
                                className='                      text-lg font-roboto font-semibold mb-2'>Photo</label>
                            <input
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 
                                `
                                }
                                type="url"
                                name="photo"
                                id="photo"
                                placeholder='Photo'
                                required />

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
                        <div className='lg:col-span-2 w-full max-w-xs mx-auto lg:px-7'>
                            <input className='bg-white contrast-100 font-roboto font-semibold cursor-pointer uppercase shadow-md outline-none rounded-md w-full mx-auto mt-5 h-10'
                                type="submit" value="Update" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;