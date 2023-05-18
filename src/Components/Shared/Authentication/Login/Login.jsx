import React, { useContext, useState } from 'react';
import login from '../Register/signup.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom';
import { LegoContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { HiEye } from 'react-icons/hi';
import { HiEyeSlash } from 'react-icons/hi2';
import Google from '../Google/Google';

const Login = () => {

    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('')
    const { verifyLogin, logInUser, resetPassword } = useContext(LegoContext);

    const handleLoginUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password)
        verifyLogin(email, password)
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    logInUser(email, password)
                        .then((result) => {
                            setError('')
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Logged in successful',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                        .catch((e) => {
                            const message = e.message;
                        })
                }
            })
            .catch((error) => {
                const data = error?.response?.data;
                const message = data?.error?.message;
                setError(message)
            })
        event.target.reset();
    }

    const handleEmail = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }
    const handleResetPassword = () => {
        resetPassword(email)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: `Password reset mail sent to ${email}`,
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch((e) => {
                const message = e.message;
            })
    }

    return (
        <div className='mt-20 w-full md:flex items-center justify-between gap-5 max-w-7xl mx-auto px-5 lg:px-0'>
            <Lottie

                className='w-full'
                animationData={login}
                loop={true}>
            </Lottie>
            <div className='w-full bg-gray-50 rounded-md py-11'>
                <h1 className='text-center font-roboto font-bold text-xl'>Create Account</h1>
                <form

                    onSubmit={handleLoginUser}
                    className='flex flex-col'>


                    <div className='flex flex-col w-full max-w-sm mx-auto'>
                        <label
                            htmlFor="email"
                            className='
                            text-lg font-roboto font-semibold mb-2'>Email</label>
                        <input
                            onBlur={handleEmail}
                            className={
                                `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2`
                            }
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Email' />

                    </div>
                    <div className='flex flex-col w-full max-w-sm mx-auto relative'>
                        <label
                            htmlFor="password"
                            className='
                            text-lg font-roboto font-semibold mb-2'>Password</label>
                        <input
                            className={
                                `bg-blue-100 outline-none rounded-md pl-1 py-1 placeholder:pl-2 `
                            }
                            type={show ? 'text' : "password"}
                            name="password"
                            id="password"
                            placeholder='Password' />
                        {
                            show
                                ?
                                <HiEyeSlash
                                    onClick={() => setShow(!show)}
                                    className='w-5 h-5 absolute top-3/4 -translate-y-1/2 right-2 cursor-pointer'></HiEyeSlash>
                                : <HiEye
                                    onClick={() => setShow(!show)}
                                    className='w-5 h-5 absolute top-3/4 -translate-y-1/2 right-2 cursor-pointer'></HiEye>
                        }

                    </div>
                    {
                        error &&
                        <p className='text-red-500 font-roboto mt-2 w-full max-w-sm mx-auto'>{error}</p>
                    }
                    <input className='bg-white contrast-100 font-roboto font-semibold cursor-pointer uppercase shadow-md
                    outline-none 
                    rounded-md w-full max-w-sm mx-auto mt-5 py-1'
                        type="submit" value="Register" />
                    <Link
                        onClick={handleResetPassword}
                        className='text-blue-500 w-full max-w-sm mx-auto font-roboto'
                    >Forget Password?</Link>
                    <p
                        className='font-roboto font-medium mt-2 w-full max-w-sm mx-auto'>New to this website? Please <Link to={'/register'}
                            className='text-blue-500'>Register</Link></p>
                </form>
                <Google></Google>
            </div>
        </div>
    );
};

export default Login;