import React, { useContext, useEffect, useState } from 'react';
import { LegoContext } from '../../AuthProvider/AuthProvider';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import { Rating } from '@smastrom/react-rating';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToy = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(LegoContext);
    const [legos, setLegos] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/mylegos?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLegos(data);
                setLoading(false);
            });
    }, [user?.email]);

    const navigate = useNavigate();

    const handleupdate = (id) => {
        // console.log(id)
        navigate(`/update/${id}`)
    }

    const handleRemoveLego = (id) => {
        // console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/toys/${id}`, {
                    method: "DELETE",
                })
                    .then((res => res.json()))
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = legos?.filter((lego) => lego._id !== id)
                            setLegos(remaining);
                        }
                    })

            }
        })
    }

    return (
        <>
            {loading ? (
                <LoadingSpinner></LoadingSpinner>
            ) : (
                <div className="my-32 w-full max-w-7xl mx-auto">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr className="text-center">
                                    <th className="font-roboto font-semibold text-xl">No</th>
                                    <th className="font-roboto font-semibold text-xl">Image</th>
                                    <th className="font-roboto font-semibold text-xl">Toy Name</th>
                                    <th className="font-roboto font-semibold text-xl">Seller Name</th>
                                    <th className="font-roboto font-semibold text-xl">Seller Email</th>
                                    <th className="font-roboto font-semibold text-xl">Sub-category</th>
                                    <th className="font-roboto font-semibold text-xl">Price</th>
                                    <th className="font-roboto font-semibold text-xl">Rating</th>
                                    <th className="font-roboto font-semibold text-xl">Quantity</th>

                                    <th>
                                        <div className='flex justify-center space-x-4'>
                                            <p className="font-roboto font-semibold text-xl">Update</p>
                                            <p className="font-roboto font-semibold text-xl">Delete</p>
                                        </div>
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {legos?.map((lego, index) => (
                                    <tr className="text-center" key={lego._id}>
                                        <td className="font-bold font-roboto">{index + 1}</td>
                                        {/* image */}
                                        <td>
                                            <div className="avatar">
                                                <div className="w-32 rounded">
                                                    <img src={lego?.toyPhoto} alt='' />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-bold font-roboto">{lego?.toyName}</td>
                                        <td className="font-bold font-roboto">{lego?.sellerName}</td>
                                        <td className="font-bold font-roboto">{lego?.sellerEmail}</td>
                                        <td className="font-bold font-roboto">{lego?.category}</td>
                                        <td className="font-bold font-roboto">$ {lego?.price}</td>
                                        <td className="font-bold font-roboto">
                                            <Rating
                                                style={{ width: 150 }}
                                                value={Math.round(lego?.rating) || 0}
                                                readOnly
                                            ></Rating>
                                        </td>
                                        <td className="font-bold font-roboto">{lego?.quantity}</td>

                                        <td className="font-bold font-roboto">
                                            <div className="flex justify-center space-x-6">
                                                <button
                                                    onClick={() => handleupdate(lego?._id)}

                                                    className="bg-white rounded-md h-10 font-bold cursor-pointer shadow-md border border-gray-500 px-4">
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => handleRemoveLego(lego?._id)}
                                                    className="bg-red-500 rounded-md h-10 font-bold cursor-pointer text-white shadow-md px-4">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div >
            )}
        </>
    );
};

export default MyToy;
