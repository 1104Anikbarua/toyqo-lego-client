import { Rating } from '@smastrom/react-rating';
import React, { useContext } from 'react';
import { LegoContext } from '../../../AuthProvider/AuthProvider';

const CategoryCard = ({ lego, handleClick, handleToyDetail }) => {
    const { user } = useContext(LegoContext)
    // console.log(lego)
    const { _id, toyName, price, rating, toyPhoto } = lego;

    // console.log(toyName)

    const handleClickEvent = () => {
        if (user?.email) {
            handleToyDetail(_id)
        }
        else {
            handleClick(_id)
        }
    }
    // alternative 
    // const handleClickEvent = user?.email ? handleToyDetail : handleClick;
    return (
        <div className='bg-yellow-100 rounded-md w-full max-w-sm h-full p-5'>
            <div>
                <img
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    data-aos-delay="100"

                    className='w-full rounded-md h-56' src={toyPhoto} alt="lego image" />
            </div>
            <h1
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-delay="500"
                className='font-roboto font-bold text-xl'>{toyName}</h1>
            <p
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-delay="900"
                className='font-roboto font-medium text-xl'>Price: ${price}</p>
            <div
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-delay="1300"
            >
                <Rating

                    style={{ maxWidth: 100 }}
                    value={Math.round(rating)}
                    readOnly
                />
            </div>
            <button

                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-delay="1700"
                onClick={handleClickEvent}
                className='w-40 rounded-md h-10 mt-5 font-bold text-sm shadow-md bg-white border border-gray-100'>View Details</button>
        </div>
    );
};

export default CategoryCard;