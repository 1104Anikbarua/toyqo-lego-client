import React, { useContext, useEffect, useState } from 'react';
import { LegoContext } from '../../../AuthProvider/AuthProvider';
import UseLoader from '../../../Hook/UseLoader';
import CategoryCard from '../CategoryCard/CategoryCard';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Truck = () => {
    const [totalLegos, setTotalLegos] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const { user } = useContext(LegoContext)
    const [legos] = UseLoader('truck', currentPage, itemsPerPage);
    const navigate = useNavigate();

    const options = [6, 12, 18]
    const handleLoadLego = (event) => {
        setItemsPerPage(event.target.value)
        setCurrentPage(0)
    }

    useEffect(() => {
        fetch('https://batch-7-assignment-11-server.vercel.app/documents')
            .then(res => res.json())
            .then(data => setTotalLegos(data?.count))
    }, [])

    const totalPages = Math.ceil(totalLegos / itemsPerPage)

    const pages = [...Array(totalPages).keys()];


    const handleClick = () => {
        if (!user?.email) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `You have to log in first to view details`,
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login')
        }
    }
    const handleToyDetail = (id) => {
        // console.log('Hello user', id);
        navigate(`/toy/${id}`);
    }


    return (
        <div

            className='w-full max-w-7xl mx-auto my-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    legos.map((lego, index) => <CategoryCard
                        key={index}
                        lego={lego}
                        handleClick={handleClick}
                        handleToyDetail={handleToyDetail}
                    ></CategoryCard>)
                }
            </div>
            <div
                className='text-center mt-2'>
                {
                    pages?.map((page) => <button
                        key={page}
                        onClick={() => setCurrentPage(page)}



                        className={`w-10 rounded-md h-10 font-bold text-sm shadow-md bg-white border border-gray-100 ${currentPage === page ? 'text-blue-600' : ''}`}
                    >{page}</button>)
                }
                <select
                    name="items"
                    id=""
                    onChange={handleLoadLego}

                    className='w-10 rounded-md h-10 font-bold text-sm shadow-md bg-white border border-gray-100 outline-none font-roboto'>
                    {
                        options.map((option) => <option
                            key={option}
                            value={option}
                        >{option}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default Truck;