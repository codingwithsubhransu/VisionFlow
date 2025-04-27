import React from 'react';
import logo from '../assets/image.png'
import AuthButton from './AuthButton';
import NavLinks from './NavLinks';

const Navbar = () => {
    return (
        <nav className='w-full bg-[#0F172A] h-24 text-[#F1F5F9] text-2xl flex justify-around items-center'>
            <div className="logo w-20 flex flex-col justify-between items-center  ">
                <img src={logo} alt="" className='rounded-full' />
            </div>
            <div className='flex justify-around w-[50%]'>
            <NavLinks text= 'Dashboard' link="/"/>
            <NavLinks text= 'Logs' link="/"/>
            <NavLinks text= 'About' link="/"/>
            </div>
            <div className="buttons flex gap-1.5">
            <AuthButton url= 'Login'/>
            <AuthButton url= 'Register'/>
            </div>
        </nav>
    );
}

export default Navbar;
