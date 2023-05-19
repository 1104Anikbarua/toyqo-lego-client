import React, { useEffect } from 'react';

const UpdateToy = () => {

    useEffect(() => {

    }, []);

    const handleUpdateToy = (event) => {
        event.preventDefault();
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const detail = event.target.detail.value;

        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
    }
    return (
        <div className='my-32 w-full max-w-7xl mx-auto px-5 lg:px-0'>

            <div className='w-full max-w-4xl mx-auto bg-gray-50 rounded-md py-5'>
                <h1 className='text-center font-roboto font-bold text-xl'>Add Toy</h1>
                <form

                    onSubmit={handlePostToy}
                >
                    <div className='grid lg:grid-cols-2 gap-5'>

                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="price"
                                className='                      text-lg font-roboto font-semibold mb-2'>Price</label>
                            <input
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 
                                `
                                }
                                type="text"
                                name="price"
                                id="price"
                                placeholder='Price' />

                        </div>


                        <div className='flex flex-col w-full max-w-sm mx-auto'>
                            <label
                                htmlFor="Quantity"
                                className='
                            text-lg font-roboto font-semibold mb-2'>Quantity</label>
                            <input
                                // onChange={handleQuantityChange}
                                className={
                                    `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 
                                `
                                }
                                type="text"
                                name="quantity"
                                id="quantity"
                                placeholder='Quantity' />

                        </div>

                        <div className='flex flex-col mx-auto lg:col-span-2 w-full max-w-4xl lg:px-7'>
                            <label
                                htmlFor="detail"
                                className='
                            text-lg font-roboto font-semibold mb-2'>Detail</label>
                            <textarea
                                name='detail'
                                rows={10}
                                cols={50}
                                placeholder='Detail'
                                className='bg-blue-100 w-full outline-none rounded-md pl-1 py-1 placeholder:pl-2'
                            >

                            </textarea>
                        </div>
                        <div className='lg:col-span-2 w-full max-w-4xl lg:px-7'>
                            <input className='bg-white contrast-100 font-roboto font-semibold cursor-pointer uppercase shadow-md outline-none rounded-md w-full mx-auto mt-5 h-10'
                                type="submit" value="Update" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;