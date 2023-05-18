import React from 'react';

const Gallery = () => {
    return (
        <div className="w-full max-w-7xl my-32 mx-auto px-5 lg:px-0">
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://res.cloudinary.com/dmqgkr30q/image/upload/v1684443500/cars-two_io17pu.png" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/YLxbV6r/cars-five.png" />
                    </div>
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://res.cloudinary.com/dmqgkr30q/image/upload/v1684443501/cars-three_jb5cpe.png"
                        />
                    </div>
                </div>
                <div className="flex w-1/2 flex-wrap">
                    <div className="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/GRvZ0P7/cars-six.png"
                        />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
                            alt="gallery"
                            className="block h-full w-full rounded-lg object-cover object-center"
                            src="https://i.ibb.co/h88bgbQ/cars-four.png" />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                        <img
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