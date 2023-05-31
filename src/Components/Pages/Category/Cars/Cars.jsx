import React, { useContext, useEffect, useState } from 'react';
import UseLoader from '../../../Hook/UseLoader';
import CategoryCard from '../CategoryCard/CategoryCard';
import { LegoContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Cars = () => {

    const [totalLegos, setTotalLegos] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const { user } = useContext(LegoContext)
    const [legos] = UseLoader('car', currentPage, itemsPerPage);
    const navigate = useNavigate();
    const category = 'car'
    const location = useLocation();
    // console.log(legos)
    // console.log(location)

    const totalPages = Math.ceil(totalLegos / itemsPerPage)
    // console.log(totalPages)

    const pages = [...Array(totalPages).keys()];
    // console.log(pages)

    const options = [6, 12, 18]
    const handleLoadLego = (event) => {
        // console.log(event.target.value);
        setItemsPerPage(event.target.value)
        setCurrentPage(0)
    }
    // https://batch-7-assignment-11-server.vercel.app
    useEffect(() => {
        fetch(`https://batch-7-assignment-11-server.vercel.app/documents?category=${category}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTotalLegos(data?.result)
            })
    }, [])

    // todo: check navigate and redirect
    const handleClick = (id) => {
        if (!user?.email) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `You have to log in first to view details`,
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login', { state: { from: { pathname: `/toy/${id}` } } })
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
                    legos?.map((lego, index) => <CategoryCard
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
                        options?.map((option) => <option
                            key={option}
                            value={option}
                        >{option}</option>)
                    }
                </select>
            </div>
        </div >
    );
};

export default Cars;