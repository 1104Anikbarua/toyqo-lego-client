import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { useLocation } from 'react-router-dom';
import UseScroll from '../../UseScroll/UseScroll';

const Blog = () => {
    const { pathname } = useLocation();
    UseScroll(pathname);
    return (
        <div>
            <PageTitle titles={'Blog'}></PageTitle>
        </div>
    );
};

export default Blog;