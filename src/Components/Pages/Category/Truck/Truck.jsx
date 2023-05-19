import React, { useContext } from 'react';
import { LegoContext } from '../../../AuthProvider/AuthProvider';
import UseLoader from '../../../Hook/UseLoader';
import CategoryCard from '../CategoryCard/CategoryCard';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Truck = () => {
    const { user } = useContext(LegoContext)
    const [legos] = UseLoader('truck');
    const navigate = useNavigate();

    const handleClick = () => {
        if (!user?.email) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `You have to log in first to view details`,
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/login')
        }
    }
    const handleToyDetail = (id) => {
        // console.log('Hello user', id);
        navigate(`/toy/${id}`);
    }


    return (
        <div

            className='w-full max-w-7xl mx-auto my-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    legos.map((lego, index) => <CategoryCard
                        key={index}
                        lego={lego}
                        handleClick={handleClick}
                        handleToyDetail={handleToyDetail}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Truck;