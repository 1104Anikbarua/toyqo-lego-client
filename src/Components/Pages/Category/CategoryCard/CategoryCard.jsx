import { Rating } from '@smastrom/react-rating';
import React from 'react';

const CategoryCard = ({ lego }) => {
    const { name, price, rating, image } = lego;
    return (
        <div className='bg-yellow-100 rounded-md w-full max-w-sm h-full p-5'>
            <div>
                <img className='w-full rounded-md h-56' src={image} alt="lego image" />
            </div>
            <h1 className='font-roboto font-bold text-xl'>{name}</h1>
            <p className='font-roboto font-medium text-xl'>Price: ${price}</p>
            <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(rating)}
                readOnly
            />
            <button
                className='w-40 rounded-md h-10 mt-5 font-bold text-sm shadow-md bg-white'>Shop Now</button>
        </div>
    );
};

export default CategoryCard;