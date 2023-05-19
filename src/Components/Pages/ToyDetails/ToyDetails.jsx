import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import mastercard from '../../../assets/icon/card.png'
import visacard from '../../../assets/icon/visa.png'
import paypal from '../../../assets/icon/paypal.png'

const ToyDetails = () => {

    const legos = useLoaderData();

    return (
        <div className='mt-32 mx-auto w-full max-w-7xl px-5 lg:px-0'>

            <div className='flex flex-col lg:flex-row items-start justify-center gap-5'>
                <div className='bg-gray-100 rounded-md w-full max-w-md h-96 flex items-center justify-center'>
                    <img
                        className='rounded-md w-full max-w-sm mx-auto' src={legos?.toyPhoto} alt="" />
                </div>
                <div>
                    <h1 className='font-roboto font-bold text-xl mb-5'>{legos?.toyName}</h1>

                    <Rating
                        style={{ width: 150, marginBottom: '20px' }}
                        value={Math.round(legos?.rating) || 0}
                        readOnly
                    ></Rating>

                    <div className='flex items-center justify-start gap-5 mb-5'>
                        <h3 className='font-roboto font-medium text-xl'>Price: $ {legos?.price}</h3>

                        <h3 className='font-roboto font-medium text-xl line-through text-gray-400/80'>${legos?.price}</h3>

                    </div>
                    <p className='font-roboto font-medium text-xl mb-5'>
                        Availablity:

                        <span className='font-roboto text-xl text-blue-500/80'>

                            {' ' + legos?.quantity} left in stock
                        </span></p>
                    <p className='font-roboto font-medium text-xl mb-5 w-full max-w-lg'>{legos?.detail}</p>
                    <div className='flex items-center mb-5'>
                        <h3 className='font-roboto font-medium text-xl mr-1'>Color:</h3>
                        <p className='bg-red-400 w-5 h-5 mr-2'></p>
                        <p className='bg-blue-500 w-5 h-5 mr-2'></p>
                        <p className='bg-green-600 w-5 h-5 mr-2'></p>
                        <p className='bg-yellow-500 w-5 h-5'></p>
                    </div>
                    <button
                        className="bg-white w-40 rounded-md h-12 font-bold cursor-pointer shadow-md border border-gray-500 mb-5"
                    >Add To Cart</button>
                    <ul className="text-sm flex items-start justify-start mb-5">
                        <p className='font-roboto font-medium text-xl mr-5'>Payment:</p>
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