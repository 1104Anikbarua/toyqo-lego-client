import React, { useState } from 'react';
import Cars from './Cars/Cars';
import Bus from './Bus/Bus';
import Truck from './Truck/Truck';

const Category = () => {

    const [selected, setSelected] = useState('cars')
    return (
        <div className='mt-32 w-full'>
            <div className='flex items-center justify-center'>
                <p
                    className={`font-roboto font-bold text-lg mr-5 cursor-pointer 
                    w-40 rounded-md h-10 mt-5 flex items-center justify-center shadow-md bg-white 
                    ${selected === 'cars' ? 'text-blue-500' : 'text-black'}
                    `}
                    onClick={() => setSelected('cars')}>Cars Lego</p>
                <p
                    className={`font-roboto font-bold text-lg mr-5 cursor-pointer 
                    w-40 rounded-md h-10 mt-5 flex items-center justify-center shadow-md bg-white 
                    ${selected === 'bus' ? 'text-blue-500' : ''}
                    `}
                    onClick={() => setSelected('bus')}>Bus Lego</p>
                <p
                    className={`font-roboto font-bold text-lg mr-5 cursor-pointer 
                    w-40 rounded-md h-10 mt-5 flex items-center justify-center shadow-md bg-white 
                    ${selected === 'truck' ? 'text-blue-500' : ''}
                    `}
                    onClick={() => setSelected('truck')}>Truck Lego</p>
            </div>
            {
                selected === 'cars' && <Cars></Cars>
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