import React, { useEffect } from 'react';

const UseScroll = (pathname) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return
};

export default UseScroll;