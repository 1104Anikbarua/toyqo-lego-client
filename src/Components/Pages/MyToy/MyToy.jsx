import React, { useContext, useEffect, useState } from 'react';
import { LegoContext } from '../../AuthProvider/AuthProvider';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

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
                                                    <img src="" alt='' />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="font-bold font-roboto">{lego?.toyName}</td>
                                        <td className="font-bold font-roboto">{lego?.sellerName}</td>
                                        <td className="font-bold font-roboto">{lego?.sellerEmail}</td>
                                        <td className="font-bold font-roboto">{lego?.category}</td>
                                        <td className="font-bold font-roboto">$ {lego?.price}</td>
                                        <td className="font-bold font-roboto">{lego?.rating}</td>
                                        <td className="font-bold font-roboto">{lego?.quantity}</td>

                                        <td className="font-bold font-roboto">
                                            <div className="flex justify-center space-x-6">
                                                <button className="bg-white rounded-md h-10 font-bold cursor-pointer shadow-md border border-gray-500 px-4">
                                                    Update
                                                </button>
                                                <button className="bg-red-500 rounded-md h-10 font-bold cursor-pointer text-white shadow-md px-4">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
};

export default MyToy;
