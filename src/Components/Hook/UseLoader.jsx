
import { useEffect, useState } from 'react';

const UseLoader = () => {
    const [legos, setLegos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('cars.json')
            const data = await response.json();
            setLegos(data)
        }
        fetchData();
    }, [])
    return [legos]
};

export default UseLoader;