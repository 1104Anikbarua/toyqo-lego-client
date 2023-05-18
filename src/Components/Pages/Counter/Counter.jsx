import React, { useState } from 'react';
import Countup from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Counter = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
        >

            <div
                className='w-full mx-auto max-w-7xl text-center overflow-x-hidden mb-5'
            >
                <h1 className='text-7xl text-center font-bold font-roboto'>
                    Total Page Views
                </h1>
                <div className="stats shadow-2xl flex items-center justify-center">

                    <div className="stat">

                        <div className="stat-value">
                            {
                                counterOn && <Countup start={0} end={1000} duration={9} delay={0}></Countup>
                            }
                        </div>
                        <div className="stat-desc font-roboto font-bold text-lg text-black">
                            {
                                counterOn && <Countup start={0} end={21} duration={17} delay={0}></Countup>
                            }
                            % more than last month</div>
                    </div>

                </div>
            </div>
        </ScrollTrigger>
    );
};

export default Counter;