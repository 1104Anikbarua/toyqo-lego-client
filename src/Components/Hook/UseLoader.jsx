
import { useEffect, useState } from 'react';

const UseLoader = (category) => {
    // console.log(category)
    const [legos, setLegos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/toys?category=${category}`)
            const data = await response.json();
            // console.log(data)
            setLegos(data)
        }
        fetchData();
    }, [category])
    return [legos]
};

export default UseLoader;