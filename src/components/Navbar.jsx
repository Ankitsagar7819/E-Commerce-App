import React, { useContext } from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { shopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const { setShowSearch, getCartCount } = useContext(shopContext)
    return (
        <>
            <div className='flex items-center justify-between py-5 px-4 md:px-8 lg:px-16 font-medium bg-white shadow-md'>
                <Link to='/'>
                    <img src={assets.logo} className='w-36' alt="Logo" />
                </Link>

                <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                    <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-blue-500'>
                        <p>HOME</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-blue-500 hidden' />
                    </NavLink>
                    <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-blue-500'>
                        <p>COLLECTION</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-blue-500 hidden' />
                    </NavLink>
                    <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-blue-500'>
                        <p>ABOUT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-blue-500 hidden' />
                    </NavLink>
                    <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-blue-500'>
                        <p>CONTACT</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-blue-500 hidden' />
                    </NavLink>

                </ul>

                <div className='flex items-center gap-6'>

                    <img onClick={() => setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer hover:opacity-75' alt="Search" />

                    <div className='group relative'>
                       <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer hover:opacity-75' alt="Profile" /> </Link> 
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 bg-slate-100 text-gray-500 rounded shadow-lg'>
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p className='cursor-pointer hover:text-black'>Orders</p>
                                <p className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>
                    </div>

                    <Link to='/cart' className='relative'>
                        <img src={assets.cart_icon} className='w-5 min-w-5 hover:opacity-75' alt="Cart" />
                        <p className='absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
                            {getCartCount()}
                        </p>
                    </Link>

                    <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden hover:opacity-75' alt="Menu" />
                </div>

                {/* Sidebar menu for small screens */}
                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'} shadow-lg`}>
                    <div className='flex flex-col text-gray-600'>
                        <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100'>
                            <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="Back" />
                            <p>Back</p>

                        </div>
                        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:bg-gray-100 hover:text-blue-500' to='/'>Home</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:bg-gray-100 hover:text-blue-500' to='/collection'>COLLECTION</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:bg-gray-100 hover:text-blue-500' to='/about'>ABOUT</NavLink>
                        <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:bg-gray-100 hover:text-blue-500' to='/contact'>CONTACT</NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}



export default Navbar



