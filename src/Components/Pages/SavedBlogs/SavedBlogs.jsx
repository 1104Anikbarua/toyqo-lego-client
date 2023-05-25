import React, { useEffect, useState } from 'react';

const SavedBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('https://batch-7-assignment-11-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
            })
    }, [])
    return (
        <div className='my-32 w-full max-w-7xl mx-auto px-5 lg:px-0'>
            <h1 className='font-roboto font-bold text-7xl text-center mb-5'>My Blogs</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    blogs?.map((blog) => <div
                        key={blog._id}

                    >
                        <h1 id='quesOne' className='font-roboto font-bold text-3xl'>
                            {blog?.question}
                        </h1>
                        <p id='quesOneAnswer' className='font-roboto text-xl'>
                            {blog?.answer}
                        </p>

                    </div>)
                }

            </div>
        </div>
    );
};

export default SavedBlogs;