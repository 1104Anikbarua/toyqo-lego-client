import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

const Picks = () => {

    const [weekPicks, setWeekPicks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('picks.json')
            const data = await response.json();
            setWeekPicks(data)
        }
        fetchData();
    }, [])
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
        <div className='my-32 w-full max-w-7xl mx-auto'>
            <h1 className='font-roboto font-bold text-center text-7xl mb-5'>This Week&apos;s Top Picks</h1>
            <Carousel
                responsive={responsive}
                draggable={true}
                swipeable={true}
                containerClass='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
            gap-5'
                itemClass='px-5 py-5'
            >
                {
                    weekPicks.map((pick, index) => <div
                        key={index}
                        className="shadow-md border border-yellow-100 rounded-md p-6 w-full max-w-sm h-full"
                    >
                        <div className='rounded-md w-full max-w-sm h-full p-5'>
                            <div>
                                <img className='w-full rounded-md h-56' src={pick?.image} alt="lego image" />
                            </div>
                            <h1 className='font-roboto font-bold text-xl'>{name}</h1>
                            <p className='font-roboto font-medium text-xl'>{pick?.detail}</p>

                            <button
                                className='w-40 rounded-md h-10 mt-5 font-bold text-sm shadow-lg bg-white'>Shop Now</button>
                        </div>
                    </div>)
                }

            </Carousel>
        </div>
    );
};

export default Picks;