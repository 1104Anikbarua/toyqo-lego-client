import React, { useContext } from 'react';
import { LegoContext } from '../../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../../assets/icon/googlee.png'

const Google = () => {


    const { googleSignUp } = useContext(LegoContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSignUpGoogle = () => {
        googleSignUp()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
            })
    }


    return (
        <div>
            <button onClick={handleSignUpGoogle}
                className='flex font-roboto font-bold items-center my-5 justify-center shadow-md contrast-100 rounded-md bg-white py-1 uppercase w-full max-w-sm mx-auto'
            >
                <span className='mr-2'>
                    Continue With Google
                </span>
                <img className='w-5 h-5' src={google} alt="google logo image" />
            </button>
        </div>
    );
};

export default Google;