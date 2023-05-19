import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({ titles }) => {
    return (
        <Helmet>
            <title>
                Toyqo | {titles}
            </title>
        </Helmet>
    );
};

export default PageTitle;