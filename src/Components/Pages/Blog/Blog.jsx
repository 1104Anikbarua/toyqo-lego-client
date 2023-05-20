import React, { useEffect } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { useLocation } from 'react-router-dom';
import UseScroll from '../../UseScroll/UseScroll';
import { AiFillPushpin } from 'react-icons/ai'

const Blog = () => {
    const { pathname } = useLocation();
    UseScroll(pathname);

    // useEffect(() => {
    //     const question = document.getElementById('quesone')
    // }, [])




    return (
        <div className='w-full mx-auto max-w-7xl mt-32 px-5 lg:px-0'>
            <PageTitle titles={'Blog'}></PageTitle>

            <div>
                <div className='flex flex-col bg-gray-100 p-5 mb-5 rounded-md'>
                    <p>
                        <AiFillPushpin className='text-xl'></AiFillPushpin>
                    </p>
                    <h1 id='quesone' className='font-roboto font-bold text-3xl'>
                        What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h1>
                    <p className='font-roboto text-xl'>
                        When a user successfully registered a token is generated in server side with the help of json web token that token later can verify for who is the user and with this token user can retrive protected data thats why this is called access token.On the other hand refresh token is for generate a new access token after access token is expired.
                        We generate access token in the server side and from server side we recive access token and store them in local storage or http only cookie
                    </p>
                </div>

                <div className='flex flex-col bg-gray-100 p-5 mb-5 rounded-md'>
                    <p>
                        <AiFillPushpin className='text-xl'></AiFillPushpin>
                    </p>
                    <h1 className='font-roboto font-bold text-3xl'>Compare SQL and NoSQL database?</h1>

                    <p className='font-roboto text-xl'>Sql stands form Standard Query language.Sql is the standard language form dealing with relational database.Sql database is a collection of highly structured tables.Relational database are built using the structured query language to create,store,update and retrive data</p>
                    <p className='font-roboto text-xl'>NoSQL database are not Structured.NoSql data based are document based,key-value,graph.NoSql database stores data in a collection.Collection can be a array.NoSql database structure are flexible anyone can store large amount of data and can modify data easily</p>
                </div>
                <div className='flex flex-col bg-gray-100 p-5 mb-5 rounded-md'>
                    <p>
                        <AiFillPushpin className='text-xl'></AiFillPushpin>
                    </p>
                    <h1 className='font-roboto font-bold text-3xl'>What is express js? What is Nest JS?</h1>
                    <p className='font-roboto text-xl'>Express.js is a node.js web application framework which is used for building web-application and mobile applications using Node.js approaches and principles of Node event-driven architecture.Express js is used to build single page multipage web application.Express js is focus on server side devlopment</p>
                    <p className='font-roboto text-xl'>Next.js is a react framework for web.Next.js opens new door to create full-stack Web applications by extending the latest React features.Next.js integrating powerful Rust-based JavaScript tooling for the fastest builds.</p>
                </div>
                <div className='flex flex-col bg-gray-100 p-5 mb-5 rounded-md'>
                    <p>
                        <AiFillPushpin className='text-xl'></AiFillPushpin>
                    </p>
                    <h1 className='font-roboto text-3xl font-bold'>What is MongoDB aggregate and how does it work?</h1>

                    <p className='font-roboto text-xl'>
                        Aggregation operations process data records and return computed results.
                        In the aggregation pipeline, we list out a series of instructions in a stage." For each stage that's defined, MongoDB executes them one after another in order to give a finalized output we're able to use.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;