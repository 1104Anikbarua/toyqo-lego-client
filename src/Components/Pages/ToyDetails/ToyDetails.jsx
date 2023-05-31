import { Rating } from '@smastrom/react-rating';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import mastercard from '../../../assets/icon/card.png'
import visacard from '../../../assets/icon/visa.png'
import paypal from '../../../assets/icon/paypal.png'
import UseScroll from '../../UseScroll/UseScroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LegoContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { FiLoader } from 'react-icons/fi';
import UseLego from '../../Hook/UseLego/UseLego';
import UseCart from '../../Hook/UseCart/UseCart';


const ToyDetails = () => {
    const { user } = useContext(LegoContext)
    // console.log(user)
    const [quantity, setQuantity] = useState(1)
    // const legos = useLoaderData();
    const { id } = useParams();
    // const { isLoading, refetch, data: legos } = useQuery({
    //     queryKey: ['legos', id], queryFn: async () => {
    //         const response = await fetch(`http://localhost:5000/legos/${id}`)
    //         return response.json();
    //     }
    // })
    const [isLoading, refetch, legos] = UseLego(id)
    const [, cartRefetch] = UseCart();
    const { pathname } = useLocation();
    UseScroll(pathname);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    // console.log(legos)
    // console.log(quantity)
    const handleAddToCart = (lego) => {
        const userInfo = {
            name: user?.displayName,
            email: user?.email,
            toyName: lego.toyName,
            toyId: lego._id,
            toyPrice: lego.price,
            toyImage: lego.toyPhoto,
            quantity: quantity,
        }
        fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                const updateInfo = {
                    quantity: quantity
                };
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Lego add to cart`,
                    showConfirmButton: false,
                    timer: 1500
                })
                if (data.insertedId) {
                    fetch(`http://localhost:5000/legos/${lego?._id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(updateInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            if (data.modifiedCount > 0) {
                                refetch();
                                cartRefetch();
                                Swal.fire({
                                    position: 'center',
                                    icon: 'info',
                                    title: `Quantity updated`,
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }

            })
    }

    if (quantity < 0) {
        setQuantity(0)
    }

    return (
        <div className='mt-32 mx-auto w-full max-w-7xl px-5 lg:px-0'>

            <div className='flex flex-col lg:flex-row items-start justify-center gap-5'>
                <div
                    // data-aos="fade-down"
                    // data-aos-easing="ease-in-sine"
                    // data-aos-duration="500"
                    // data-aos-delay="100"

                    className='bg-gray-100 rounded-md w-full max-w-md h-96 flex items-center justify-center'>
                    <img
                        // data-aos="fade-down"
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="1000"
                        // data-aos-delay="1000"
                        className='rounded-md w-full max-w-sm mx-auto' src={legos?.toyPhoto} alt="" />
                </div>
                <div>
                    <h1
                        // data-aos="fade-down"
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="1000"
                        // data-aos-delay="2800"

                        className='font-roboto font-bold text-xl mb-5'>{legos?.toyName}</h1>

                    <div
                    // data-aos="fade-down"
                    // data-aos-easing="ease-in-sine"
                    // data-aos-duration="1000"
                    // data-aos-delay="2300"
                    >
                        <Rating
                            style={{ width: 150, marginBottom: '20px' }}
                            value={Math.round(legos?.rating) || 0}
                            readOnly
                        ></Rating>
                    </div>

                    <div className='flex items-center justify-start gap-5 mb-5'>
                        <h3
                            // data-aos="fade-down"
                            // data-aos-easing="ease-in-sine"
                            // data-aos-duration="1000"
                            // data-aos-delay="1900"
                            className='font-roboto font-medium text-xl'>Price: $ {legos?.price}</h3>

                        <h3
                            // data-aos="fade-down"
                            // data-aos-easing="ease-in-sine"
                            // data-aos-duration="1000"
                            // data-aos-delay="1500"
                            className='font-roboto font-medium text-xl line-through text-gray-400/80'>${'20'}</h3>

                    </div>

                    <p
                        // data-aos="fade-down"
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="1000"
                        // data-aos-delay="1100"
                        className='font-roboto font-medium text-xl mb-5'>
                        Availablity:

                        <span className='font-roboto text-xl text-blue-500/80'>

                            {' ' + legos?.quantity} left in stock
                        </span></p>
                    <p
                        // data-aos="fade-down"
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="1000"
                        // data-aos-delay="700"

                        className='font-roboto font-medium text-xl mb-5 w-full max-w-lg'>{legos?.detail}</p>
                    <h3
                        // data-aos="fade-down"
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="1000"
                        // data-aos-delay="400"

                        className='font-roboto font-medium text-xl mb-5'>Seller Name: {legos?.sellerName}</h3>
                    <h3
                        // data-aos="fade-down"
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="1000"
                        // data-aos-delay="100"
                        className='font-roboto font-medium text-xl mb-5'>Seller Email: {legos?.sellerEmail}
                    </h3>
                    <div className='flex items-center mb-5'>
                        <h3
                            // data-aos="fade-right"
                            // data-aos-easing="ease-in-sine"
                            // data-aos-duration="500"
                            // data-aos-delay="100"
                            className='font-roboto font-medium text-xl mr-1'>Color:</h3>
                        <p
                            // data-aos="fade-right"
                            // data-aos-easing="ease-in-sine"
                            // data-aos-duration="600"
                            // data-aos-delay="400"
                            className='bg-red-400 w-5 h-5 mr-2'></p>
                        <p
                            data-aos="fade-right"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            data-aos-delay="700"
                            className='bg-blue-500 w-5 h-5 mr-2'></p>
                        <p
                            data-aos="fade-right"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="400"
                            data-aos-delay="1000"
                            className='bg-green-600 w-5 h-5 mr-2'></p>
                        <p
                            data-aos="fade-right"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="300"
                            data-aos-delay="1300"
                            className='bg-yellow-500 w-5 h-5'></p>
                    </div>
                    <div className='flex items-center mb-5 justify-between w-full max-w-[160px] bg-blue-100 h-12 rounded-md shadow-md px-5'>
                        <button
                            onClick={() => setQuantity(quantity - 1)}>
                            <FaMinus className='text-2xl'></FaMinus>
                        </button>
                        <input
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            className='bg-blue-100 outline-none rounded-md py-1 font-bold text-2xl shadow-md border border-gray-500 w-14 h-8 pl-2'
                            type="number"
                            name=""
                            id="" />
                        <button
                            onClick={() => setQuantity(quantity + 1)}>
                            <FaPlus
                                className='text-2xl'
                            ></FaPlus>
                        </button>
                    </div>
                    <button
                        onClick={() => handleAddToCart(legos)}
                        // data-aos="zoom-in"
                        // data-aos-easing="ease-in-sine"
                        // data-aos-duration="2000"
                        // data-aos-delay="100"
                        disabled={quantity > legos?.quantity}
                        className={`
                            bg-white w-40 rounded-md h-12 font-bold cursor-pointer shadow-md border border-gray-500 mb-5 disabled:bg-red-500 disabled:border-none disabled:text-white disabled:cursor-not-allowed`}
                    >{isLoading ? <FiLoader className='text-xl animate-spin'></FiLoader> : 'Add To Cart'}</button>
                    <ul className="text-sm flex items-start justify-start mb-5">
                        <p
                            data-aos="fade-right"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="500"
                            data-aos-delay="100"

                            className='font-roboto font-medium text-xl mr-5'>Payment:</p>
                        <li className='mr-5'>
                            <img
                                data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                data-aos-delay="100"

                                className='w-8 lg:w-10 h-8 lg:h-10' src={mastercard} alt="" />
                        </li>
                        <li className='mr-5'>
                            <img
                                data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                data-aos-delay="300"

                                className='w-8 lg:w-10 h-8 lg:h-10' src={visacard} alt="" />
                        </li>
                        <li className='mr-5'>
                            <img
                                data-aos="fade-right"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="500"
                                data-aos-delay="500"

                                className='w-8 lg:w-10 h-8 lg:h-10' src={paypal} alt="" />
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;