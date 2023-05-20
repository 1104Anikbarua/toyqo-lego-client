import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Gallery = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="w-full max-w-7xl my-32 mx-auto px-5 lg:px-0">
            <h1
                data-aos="fade-down"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                data-aos-delay="1800"

                className='font-roboto font-bold text-7xl text-center mb-5'>Gallery</h1>
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div


                        className="w-1/2 p-1 md:p-2">
                        <img
                            data-aos="fade-down"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://res.cloudinary.com/dmqgkr30q/image/upload/v1684443500/cars-two_io17pu.png" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img

                            data-aos="fade-down"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            data-aos-delay="800"

                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/YLxbV6r/cars-five.png" />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img

                            data-aos="fade-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            data-aos-delay="2000"

                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://res.cloudinary.com/dmqgkr30q/image/upload/v1684443501/cars-three_jb5cpe.png"
                        />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            data-aos="fade-down"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            data-aos-delay="1400"

                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/GRvZ0P7/cars-six.png"
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            // img5
                            data-aos="fade-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            data-aos-delay="2200"
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/h88bgbQ/cars-four.png" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            // img6
                            data-aos="fade-up"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            data-aos-delay="2700"
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/dDgghyF/car-one.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;