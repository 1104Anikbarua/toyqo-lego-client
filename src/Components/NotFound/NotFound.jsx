import React from 'react';
import Lottie from 'lottie-react';
import error from './notfound.json';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='relative'>
            <button
                className='absolute z-10 bg-white shadow-md w-40 h-10 rounded-lg font-roboto font-bold text-xl border border-gray-100'
                onClick={() => navigate('/')}>Back To Home</button>
            <Lottie
                className='h-screen'
                animationData={error} loop={true} />;
        </div>
    );
};

export default NotFound;