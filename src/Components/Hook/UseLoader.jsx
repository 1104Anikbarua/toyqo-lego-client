
import { useEffect, useState } from 'react';

const UseLoader = (category) => {
    // console.log(category)
    const [legos, setLegos] = useState([])
    useEffect(() => {

        fetch(`https://batch-7-assignment-11-server.vercel.app/toys?category=${category}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                setLegos(data)
            })
    }, [category])
    return [legos]
};

export default UseLoader;