import React, { useEffect } from 'react';
import facebook from '../../../assets/icon/facebook.png'
import google from '../../../assets/icon/googlee.png'
import twitter from '../../../assets/icon/twitter.png'
import instagram from '../../../assets/icon/instagram.png'
import pinterest from '../../../assets/icon/pinterest.png'
import { Link } from 'react-router-dom';
import { AiOutlineSwapRight } from 'react-icons/ai';
import phone from '../../../assets/icon/smartphone.png'
import message from '../../../assets/icon/text.png'
import location from '../../../assets/icon/placeholder.png'
import logo from '../../../assets/logo/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <footer className="bg-white shadow-inner py-8 px-5 lg:px-20 my-32">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="p-4">
                        <h3
                            data-aos="fade-down"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            data-aos-delay="1200"
                            className='font-roboto font-bold text-xl mb-5'>About us</h3>
                        <ul className="text-sm mb-5">
                            <img
                                data-aos="fade-down"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                data-aos-delay="900"

                                className='w-12 lg:w-14 h-12 lg:h-14' src={logo} alt="" />
                            <p
                                data-aos="fade-down"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                data-aos-delay="500"
                                className='text-base font-medium'>

                                Toyqo a Lego Selling Website.Over the years children shape their own worlds with LEGO bricks, we play our part in having a positive impact on the world they live in today and will inherit in the future.
                            </p>
                            <Link
                                data-aos="fade-down"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                data-aos-delay="100"
                                className='text-base font-medium flex items-end hover:text-blue-500'
                                to={'about'}>Read More

                                <AiOutlineSwapRight className='font-semibold text-xl'></AiOutlineSwapRight>
                            </Link>
                        </ul>
                        <ul className="text-sm flex items-start justify-center lg:justify-start">
                            <li className='mr-5'>
                                <img
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    data-aos-delay="100"

                                    className='w-8 lg:w-10 h-8 lg:h-10' src={facebook} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    data-aos-delay="300"

                                    className='w-8 lg:w-10 h-8 lg:h-10' src={twitter} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    data-aos-delay="500"

                                    className='w-8 lg:w-10 h-8 lg:h-10' src={instagram} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    data-aos-delay="700"

                                    className='w-8 lg:w-10 h-8 lg:h-10' src={google} alt="" />
                            </li>
                            <li className='mr-5'>
                                <img
                                    data-aos="fade-right"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="500"
                                    data-aos-delay="900"

                                    className='w-8 lg:w-10 h-8 lg:h-10' src={pinterest} alt="" />
                            </li>

                        </ul>
                    </div>
                    <div className="p-4">
                        <h3
                            data-aos="fade-down"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            data-aos-delay="1100"

                            className='font-roboto font-bold text-xl mb-5'>Information</h3>
                        <div className='flex flex-col items-start gap-5 mb-5 list-none'>

                            <li
                                data-aos="fade-down"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                data-aos-delay="900"
                                className='font-roboto font-medium text-base'>
                                <Link to={'terms'}>Term&apos;s & Condition&apos;s</Link>
                            </li>
                            <li
                                data-aos="fade-down"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                data-aos-delay="700"
                                className='font-roboto font-medium text-base'>
                                <Link to={'payment'}>Payment Method</Link>
                            </li>
                            <li
                                data-aos="fade-down"
                                data-aos-easing="ease-in-sine"
                                data-aos-duration="1000"
                                data-aos-delay="500"
                                className='font-roboto font-medium text-base'>
                                <Link>Product Warrenty</Link>
                            </li>
                        </div>


                    </div>
                    <div className="p-4">
                        <h3
                            data-aos="fade-down"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            data-aos-delay="1100"
                            className="font-roboto text-lg font-bold mb-5">Contact Us</h3>
                        <div className='flex flex-col gap-5'>

                            <ul className='flex flex-col gap-5 list-none'>
                                <li className='flex items-center'>
                                    <img
                                        data-aos="fade-down"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1000"
                                        data-aos-delay="1000"

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={location} alt="" />
                                    <p

                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1100"
                                        data-aos-delay="900"

                                        className='ml-2'>20/21 Chattogram,Bangladesh</p>
                                </li>
                                <li className='flex items-center'>
                                    <img
                                        data-aos="fade-down"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1000"
                                        data-aos-delay="1300"

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={phone} alt="" />
                                    <p

                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1000"
                                        data-aos-delay="1100"

                                        className='ml-2'>00 800 4588 1825</p>
                                </li>
                                <li className='flex items-center'>
                                    <img
                                        data-aos="fade-down"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1000"
                                        data-aos-delay="1500"

                                        className='w-8 lg:w-10 h-8 lg:h-10' src={message} alt="" />
                                    <p
                                        data-aos="fade-right"
                                        data-aos-easing="ease-in-sine"
                                        data-aos-duration="1000"
                                        data-aos-delay="1300"

                                        className='ml-2'>support@gmail.com</p>
                                </li>
                            </ul>
                            {/* <p
                                className='text-xl font-bold text-center text-black'>&copy; Toyqo
                            </p> */}
                        </div>
                    </div>
                </div>
                <p
                    className='text-xl font-bold text-center'>&copy; Toyqo {year}
                </p>
            </div>

        </footer>
    );
};

export default Footer;