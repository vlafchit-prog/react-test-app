import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handlOpen = () => {
        setIsOpen(!isOpen)
        console.log(!isOpen)
    }




    return (
        <div className='flex mb-10 lg:flex-row flex-col items-center justify-between lg:mx-10 xl:mx-15 2xl:mx-25 text-main-purple 2xl:gap-25 xl:gap-20 lg:gap-15 md:px-10 sm:px-6 px-4 space-y-8'>
            <ul className='lg:flex max-w-200 w-full justify-around border-t border-b h-20 items-center border-[#e7d8dc] hidden text-sm'>
                <li>
                    <NavLink to={'/packages'} className={({isActive}) => isActive ? "duration-150 ease-in text-purple-400 font-bold text-lg":"duration-150 ease-in hover:font-bold"}>PACKAGES</NavLink>
                </li>
                <li>
                    <NavLink to={'/gallery'} className={({isActive}) => isActive ? "duration-150 ease-in text-purple-400 font-bold text-lg":"duration-150 ease-in hover:font-bold"}>GALLERY</NavLink>
                </li>
            </ul>

            <div className='sm:max-w-140 max-w-121 w-full px-11 sm:px-20 lg:px-0 '>
                <NavLink to={'/'}><img src="/erzulie-logo.png" alt="Image Logo" className='lg:max-w-175 w-full' /></NavLink>
            </div>

            <ul className='lg:flex max-w-200 w-full justify-around border-t border-b h-20 items-center border-[#e7d8dc] hidden text-sm'>
                <li>
                    <NavLink to={'/about'} className={({isActive}) => isActive ? "duration-150 ease-in text-purple-400 font-bold text-lg":"duration-150 ease-in hover:font-bold"}>ABOUT US</NavLink>
                </li>
                <li>
                    <NavLink to={'/getInTuch'} className={({isActive}) => isActive ? "duration-150 ease-in text-purple-400 font-bold text-lg":"duration-150 ease-in hover:font-bold"}>GET IN TUCH</NavLink>
                </li>
            </ul>
            <div className='lg:hidden border-b border-t border-[#e7d8dc]  w-full flex justify-center py-3 relative '>
                <IoMenu className='sm:text-4xl text-3xl text-main-rose' onClick={handlOpen}/>
                
                <div className={`absolute z-50 border-main-rose border border-t-4 w-full  left-0 top-13 right-0   bg-[#fcfcfc] overflow-hidden transition-all duration-600 ease ${isOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'}`} >
                    
                     <ul className='mx-10 py-8 text-center  md:text-2xl sm:text-xl  text-mont'>
                        <li className='border-b border-[#ececec] py-6'>
                            <NavLink to={'/packages'} className={({isActive}) => isActive ? 'duration-150 ease-in text-rose-400 font-bold md:text-3xl sm:text-2xl text-xl': 'duration-150 ease-in' } >PACKAGES</NavLink>
                        </li>
                        <li className='border-b border-[#ececec] py-6'>
                            <NavLink to={'/gallery'} className={({isActive}) => isActive ? 'duration-150 ease-in text-rose-400 font-bold md:text-3xl sm:text-2xl text-xl': 'duration-150 ease-in' }>GALLERY</NavLink>
                        </li>
                        <li className='border-b border-[#ececec] py-6'>
                            <NavLink to={'/about'} className={({isActive}) => isActive ? 'duration-150 ease-in text-rose-400 font-bold md:text-3xl sm:text-2xl text-xl': 'duration-150 ease-in' }>ABOUT US</NavLink>
                        </li>
                        <li className='border-b border-[#ececec] py-6'>
                            <NavLink to={'/getInTuch'} className={({isActive}) => isActive ? 'duration-150 ease-in text-rose-400 font-bold md:text-3xl sm:text-2xl text-xl': 'duration-150 ease-in' }>GET IN TUCH</NavLink>
                        </li>
                     </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
