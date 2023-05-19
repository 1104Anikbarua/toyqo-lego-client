import React, { useState } from 'react';
import Cars from './Cars/Cars';
import Bus from './Bus/Bus';
import Truck from './Truck/Truck';

const Category = () => {

    const [selected, setSelected] = useState('car')
    return (
        <div className='mt-32 w-full'>
            <div className='flex items-center justify-center'>
                <p

                    data-aos="zoom-in-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    data-aos-delay="100"

                    className={`font-roboto font-bold text-lg mr-5 cursor-pointer 
                    w-40 rounded-md h-10 mt-5 flex items-center justify-center shadow-md bg-white border border-gray-100
                    ${selected === 'car' ? 'text-blue-500' : 'text-black'}
                    `}
                    onClick={() => setSelected('car')}>Cars Lego</p>
                <p

                    data-aos="zoom-in-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                    className={`font-roboto font-bold text-lg mr-5 cursor-pointer 
                    w-40 rounded-md h-10 mt-5 flex items-center justify-center shadow-md bg-white border border-gray-100
                    ${selected === 'bus' ? 'text-blue-500' : ''}
                    `}
                    onClick={() => setSelected('bus')}>Bus Lego</p>
                <p

                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    data-aos-delay="1100"
                    className={`font-roboto font-bold text-lg mr-5 cursor-pointer 
                    w-40 rounded-md h-10 mt-5 flex items-center justify-center shadow-md bg-white border border-gray-100
                    ${selected === 'truck' ? 'text-blue-500' : ''}
                    `}
                    onClick={() => setSelected('truck')}>Truck Lego</p>
            </div>
            {
                selected === 'car' && <Cars></Cars>
            }
            {
                selected === 'bus' && <Bus></Bus>
            }
            {
                selected === 'truck' && <Truck></Truck>
            }
        </div>
    );
};

export default Category;