import React, { useContext, useState } from 'react';
import UseLoader from '../../../Hook/UseLoader';
import CategoryCard from '../CategoryCard/CategoryCard';
import { LegoContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Cars = () => {


    const { user } = useContext(LegoContext)
    const [legos] = UseLoader();

    const handleClick = () => {
        if (!user?.email) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: `You have to log in first to view details`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    return (
        <div
            onClick={() => handleClick()}
            className='w-full max-w-7xl mx-auto my-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    legos.map((lego, index) => <CategoryCard
                        key={index}
                        lego={lego}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Cars;