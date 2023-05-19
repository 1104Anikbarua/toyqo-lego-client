import React, { useContext } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { LegoContext } from '../../AuthProvider/AuthProvider';

const AllToys = () => {
    const { user } = useContext(LegoContext);
    const legos = useLoaderData();
    const navigate = useNavigate();
    const location = useLocation();

    const handleViewDetail = (id) => {
        console.log('Hello user', id);
        navigate(`/toy/${id}`);
    };

    const handleUser = () => {
        console.log('location', location);
        if (!user) {
            navigate('/login', { state: { from: location }, replace: true });
        }
    };

    const onClickEvent = (id) => {
        if (user) {
            handleViewDetail(id);
        } else {
            handleUser();
        }

    };

    return (
        <div className="my-32 w-full max-w-7xl mx-auto">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="text-center">
                            <th className="font-roboto font-semibold text-xl">No</th>
                            <th className="font-roboto font-semibold text-xl">Seller Name</th>
                            <th className="font-roboto font-semibold text-xl">Toy Name</th>
                            <th className="font-roboto font-semibold text-xl">Sub-category</th>
                            <th className="font-roboto font-semibold text-xl">Price</th>
                            <th className="font-roboto font-semibold text-xl">Quantity</th>
                            <th className="font-roboto font-semibold text-xl">View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {legos.map((lego, index) => (
                            <tr className="text-center" key={lego._id}>
                                <td className="font-bold font-roboto">{index + 1}</td>
                                <td className="font-bold font-roboto">{lego?.sellerName}</td>
                                <td className="font-bold font-roboto">{lego?.toyName}</td>
                                <td className="font-bold font-roboto">{lego?.category}</td>
                                <td className="font-bold font-roboto">$ {lego?.price}</td>
                                <td className="font-bold font-roboto">{lego?.quantity}</td>
                                <td className="font-bold font-roboto flex items-center justify-center">
                                    <button
                                        onClick={() => onClickEvent(lego._id)}
                                        className="bg-white w-40 rounded-md h-10 font-bold cursor-pointer shadow-md border border-gray-500"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
