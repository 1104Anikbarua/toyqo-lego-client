import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner';

const Picks = () => {

    const [weekPicks, setWeekPicks] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch('http://localhost:5000/picks')
            const data = await response.json();
            setWeekPicks(data)
            setLoading(false)
        }
        fetchData();
    }, [])

    // if (loading) {
    //     return <LoadingSpinner></LoadingSpinner>
    // }
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <>
            {
                loading ?
                    <LoadingSpinner></LoadingSpinner> :
                    <div className='my-32 w-full max-w-7xl mx-auto'>
                        <h1
                            data-aos="zoom-in"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            className='font-roboto font-bold text-center text-7xl mb-5'>This Week&apos;s Top Picks</h1>
                        <Carousel
                            responsive={responsive}
                            draggable={true}
                            swipeable={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            infinite={true}
                            containerClass='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
                            itemClass='px-5 py-5'
                        >
                            {
                                weekPicks.map((pick, index) => <div
                                    key={index}
                                    className="shadow-md border border-yellow-100 rounded-md p-6 w-full max-w-sm h-full"
                                >
                                    <div className='rounded-md w-full max-w-sm h-full p-5'>
                                        <div className='mb-5'>
                                            <img
                                                data-aos="fade-up"
                                                data-aos-easing="ease-in-sine"
                                                data-aos-duration="1000"
                                                data-aos-delay="100"
                                                className='w-full rounded-md h-56' src={pick?.image} alt="lego image" />
                                        </div>
                                        <h1
                                            data-aos="fade-up"
                                            data-aos-easing="ease-in-sine"
                                            data-aos-duration="1000"
                                            data-aos-delay="300"
                                            className='font-roboto font-bold text-xl'>{pick?.name}</h1>
                                        {/* <p className='font-roboto font-medium text-xl'>{pick?.detail.slice(0, 30)}...</p> */}

                                        <button

                                            data-aos="fade-up"
                                            data-aos-easing="ease-in-sine"
                                            data-aos-duration="1000"
                                            data-aos-delay="500"
                                            className='w-40 rounded-md h-10 mt-5 font-bold text-sm shadow-lg bg-white border border-gray-100'>Shop Now</button>
                                    </div>
                                </div>)
                            }

                        </Carousel>
                    </div>
            }
        </>
    );
};

export default Picks;