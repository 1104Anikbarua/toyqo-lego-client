import React, { useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LegoContext } from '../../AuthProvider/AuthProvider';
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import UseScroll from '../../UseScroll/UseScroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AllToys = () => {

    const [legos, setLegos] = useState([])
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false)
    const { user } = useContext(LegoContext);
    const navigate = useNavigate();
    const location = useLocation();
    const searchRef = useRef();

    const { pathname } = location;
    UseScroll(pathname)
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        setLoading(true)
        // https://batch-7-assignment-11-server.vercel.app
        fetch(`https://batch-7-assignment-11-server.vercel.app/legos?toyname=${search}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setLegos(data)
                setLoading(false)
            })
    }, [search])


    const handleViewDetail = (id) => {
        // console.log('Hello user', id);
        navigate(`/toy/${id}`);
    };

    const handleUser = (id) => {
        console.log('location', location);
        if (!user) {
            navigate('/login', { state: { from: { pathname: `/toy/${id}` } }, replace: true });
        }
    };

    const onClickEvent = (id) => {
        if (user) {
            handleViewDetail(id);
        } else {
            handleUser(id);
        }
    };

    const handleSearch = () => {
        // console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
        // console.log(search)
    }

    return (
        <>
            <PageTitle titles={'AllToys'}></PageTitle>
            {
                loading ?
                    <LoadingSpinner></LoadingSpinner> :
                    <div className="my-32 w-full max-w-7xl mx-auto px-5 lg:px-0">
                        <div className="w-full max-w-sm mx-auto flex flex-wrap items-center justify-center">
                            <input
                                data-aos="zoom-in"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                ref={searchRef}
                                className="bg-blue-100 outline-none rounded-s-md pl-1 py-2 placeholder:pl-2 mb-5 flex-grow"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Search By Toy Name"
                            />
                            <button

                                data-aos="zoom-in"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                onClick={handleSearch}
                                className="bg-white rounded-e-md h-10 font-bold cursor-pointer shadow-md border border-gray-500 px-4 ml-0 mb-5">
                                Search
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr
                                        data-aos="zoom-in"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1000"
                                        data-aos-delay="500"
                                        className="text-center">
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
                                        <tr
                                            className="text-center" key={lego._id}>
                                            <td
                                                className="font-bold font-roboto">{index + 1}</td>
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
            }
        </>
    );
};

export default AllToys;
