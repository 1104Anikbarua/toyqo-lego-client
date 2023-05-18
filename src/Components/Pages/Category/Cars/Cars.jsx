import React from 'react';
import UseLoader from '../../../Hook/UseLoader';
import CategoryCard from '../CategoryCard/CategoryCard';

const Cars = () => {

    const [legos] = UseLoader();

    return (
        <div className='w-full max-w-7xl mx-auto my-32'>
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