import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { LegoContext } from '../../../AuthProvider/AuthProvider';

const CategoryCard = ({ lego, handleClick, handleToyDetail }) => {
    const { user } = useContext(LegoContext)
    const { name, price, rating, image } = lego;

    const handleClickEvent = user?.email ? handleToyDetail : handleClick;
    return (
        <div className='bg-yellow-100 rounded-md w-full max-w-sm h-full p-5'>
            <div>
                <img className='w-full rounded-md h-56' src='https://res.cloudinary.com/dmqgkr30q/image/upload/v1684443500/cars-two_io17pu.png' alt="lego image" />
            </div>
            <h1 className='font-roboto font-bold text-xl'>{name}</h1>
            <p className='font-roboto font-medium text-xl'>Price: ${price}</p>
            <Rating
                style={{ maxWidth: 100 }}
                value={Math.round(rating)}
                readOnly
            />
            <button
                onClick={handleClickEvent}
                className='w-40 rounded-md h-10 mt-5 font-bold text-sm shadow-md bg-white border border-gray-100'>View Details</button>
        </div>
    );
};

export default CategoryCard;