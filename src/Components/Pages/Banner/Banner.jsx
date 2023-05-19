import React, { useEffect } from 'react';
import banner from '../../../assets/banner/banner.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='relative flex flex-col items-center justify-center mt-20 h-screen'>
            <div className='absolute inset-0 w-full bg-cover bg-center filter contrast-50'
                style={{ backgroundImage: `url(${banner})` }}>
            </div>
            <div className='relative text-center'>

                <h1
                    data-aos='fade-right'
                    data-aos-duration="1000"
                    data-aos-delay='300'


                    className='text-6xl lg:text-7xl font-roboto font-extrabold text-center my-auto text-white'>Get 30% Off</h1>
                <p
                    data-aos='fade-right'
                    data-aos-duration="1000"
                    data-aos-delay='800'

                    className='text-5xl font-medium text-center font-roboto text-white'>Celebrate 100 years of LEGO<sup className='text-white'>&reg;</sup> </p>
                <button
                    data-aos='fade-right'
                    data-aos-duration="1000"
                    data-aos-delay='1300'

                    className='w-40 rounded-md h-10 mt-5 font-bold text-sm bg-white/90 border border-gray-100'>Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;