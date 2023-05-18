import React, { useState } from 'react';
import Cars from './Cars/Cars';
import Bus from './Bus/Bus';
import Truck from './Truck/Truck';

const Category = () => {

    const [selected, setSelected] = useState('cars')
    return (
        <div className='mt-32'>
            <div className='flex items-center justify-center'>
                <p
                    className='font-roboto font-bold text-lg mr-5 cursor-pointer'
                    onClick={() => setSelected('cars')}>Cars Lego</p>
                <p
                    className='font-roboto font-bold text-lg mr-5 cursor-pointer'
                    onClick={() => setSelected('bus')}>Bus Lego</p>
                <p
                    className='font-roboto font-bold text-lg mr-5 cursor-pointer'
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