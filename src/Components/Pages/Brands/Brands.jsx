import React from 'react';
import Marquee from 'react-fast-marquee';

const Brands = () => {
    return (
        <div className='my-28'>
            <h1 className='font-roboto font-bold text-7xl text-center mb-5'>Lego Brands We Have</h1>
            <Marquee
                className='w-96 text-center'
                direction='left'
                gradient={true}>
                <p className='font-roboto font-bold text-3xl uppercase mr-5'>BlueBrixx<sup>&reg;</sup></p>
                <p className='font-roboto font-bold text-3xl uppercase mr-5'>LEGO<sup>&reg;</sup> </p>
                <p className='font-roboto font-bold text-3xl uppercase mr-5'>Cobi<sup>&reg;</sup></p>
                <p className='font-roboto font-bold text-3xl uppercase mr-5'>Unico<sup>&reg;</sup></p>
                <p className='font-roboto font-bold text-3xl uppercase mr-5'>Wange<sup>&reg;</sup></p>
                <p className='font-roboto font-bold text-3xl uppercase mr-5'>fischertechnik<sup>&reg;</sup></p>
                <p className='font-roboto font-bold text-3xl uppercase mr-5'>Mould King<sup>&reg;</sup></p>
                <p className='font-roboto font-bold text-3xl uppercase mr-5'>burgkidz<sup>&reg;</sup></p>
                <p className='font-roboto font-bold text-3xl uppercase mr-5'>CADA<sup>&reg;</sup></p>
            </Marquee>
        </div>
    );
};

export default Brands;