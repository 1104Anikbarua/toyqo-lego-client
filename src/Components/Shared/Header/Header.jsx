import React, { useContext, useState } from 'react';
import logo from '../../../assets/logo/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { Sling as Hamburger } from 'hamburger-react'
import { HiOutlineSearch } from 'react-icons/hi'
import { GiSelfLove } from 'react-icons/gi'
import { CgShoppingCart } from 'react-icons/cg'
import { LegoContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {

    const [show, setShow] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { user, logOutUser } = useContext(LegoContext);
    // console.log(user)

    const handleLogOutUser = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Logout successful`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Something went wrong`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <div className='flex items-center justify-between
         bg-white bg-opacity-90 shadow-sm
        fixed top-0 right-0 left-0 h-20 md:px-20 z-20'>
            <div className='flex items-center justify-between'>
                <Link to={'/'}>
                    <img src={logo} alt="website nav logo" />
                </Link>
                <ul
                    className={`flex items-center flex-col absolute duration-700 w-full bg-white lg:bg-opacity-0 shadow-sm justify-center
                md:flex-row md:justify-end md:static md:shadow-none ${show ? 'top-[82px]' : '-top-96'}`}>

                    <li className="md:mr-5">

                        <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'/'}>Home</NavLink>

                    </li>
                    <li className="md:mr-5">

                        <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'alltoy'}>All
                            Toys</NavLink>

                    </li>
                    {
                        user
                        &&
                        <li className="md:mr-5">

                            <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'mytoy'}>My Toys</NavLink>

                        </li>
                    }
                    {
                        user
                        &&
                        <li className="md:mr-5">
                            <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'addtoy'}>Add Toy</NavLink>
                        </li>
                    }

                    <li className="md:mr-5">
                        <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'blog'}>Blog</NavLink>
                    </li>

                    {
                        user
                        &&
                        <li className="md:mr-5">
                            <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'profile'}>
                                <img
                                    title={user?.displayName}
                                    className='w-10 h-10 rounded-full'
                                    src={user?.photoURL} alt="user photo" />
                            </NavLink>
                        </li>
                    }

                    {
                        user
                            ?
                            <li className="md:mr-5">
                                <NavLink
                                    onClick={() => handleLogOutUser()}
                                    className={({ isActive }) => isActive ? 'true' : 'false'} to={'login'}>Logout</NavLink>
                            </li>



                            : <li className="md:mr-5">
                                <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'login'}>Login</NavLink>
                            </li>
                    }

                    {!user &&
                        <li className="md:mr-5">
                            <NavLink className={({ isActive }) => isActive ? 'true' : 'false'} to={'register'}>Register</NavLink>
                        </li>
                    }
                </ul>
            </div>

            <div className='hidden md:flex lg:flex items-center justify-center'>
                <Link className='mr-5 bg-blue-950 rounded-full flex items-center justify-center w-10 h-10'>
                    <HiOutlineSearch className='font-normal text-2xl text-white'></HiOutlineSearch>
                </Link>
                <Link className='mr-5'>
                    <GiSelfLove className='font-normal text-2xl'></GiSelfLove>
                </Link>
                <Link>
                    <CgShoppingCart className='font-normal text-2xl'></CgShoppingCart>
                </Link>
            </div>

            <div className='md:hidden'
                onClick={() => setShow(!show)}>
                <Hamburger
                    rounded
                    color='blue'
                    toggled={isOpen}
                    toggle={setIsOpen}></Hamburger>
            </div>
        </div >
    );
};

export default Header;