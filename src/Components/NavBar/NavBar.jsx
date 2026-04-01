import React from 'react';

const NavBar = () => {
    return (
        <div className='flex  justify-between items-center w-11/12 mt-5 md:mt-8 mx-auto fixed top-0 bg-white py-5 left-0 right-0  z-50'>
            <div className=''>
                <h1 className='text-[#1e293b] text-lg lg:text-xl flex flex-col sm:flex-row items-baseline'><span className='text-[#2664eb] font-bold text-2xl lg:text-4xl'>NEXUS</span>DIGITAL</h1>
            </div>
            <div className='hidden md:flex'>
                <ul className='flex gap-10'>
                    <li className='hover:border-b'><a href="">Home</a></li>
                    <li className='hover:border-b'><a href="">Services</a></li>
                    <li className='hover:border-b'><a href="">Portfolio</a></li>
                    <li className='hover:border-b'><a href="">About</a></li>
                </ul>
            </div>
            <div>
                <button className='btn btn-xs sm:btn-sm md:btn-md btn-primary rounded-full text-bold'>Contact Us</button>
            </div>
        </div>
    );
};

export default NavBar;