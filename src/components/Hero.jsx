import React from 'react'
import { assets } from '../assets/assets'



const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* Hero left side */}

            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-gradient-to-r from-gray-100 to-gray-300'>
                <div className='text-[#414141] p-5 rounded-lg shadow-lg bg-white bg-opacity-80'>
                    <div className='flex items-center gap-2 mb-4'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>OUR BEST SELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed mb-4'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2 cursor-pointer hover:text-blue-500 transition duration-300'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            {/* Hero right side */}
            <img src= {assets.hero_img} className='w-full sm:w-1/2' alt="" />


        </div>
    )
}

export default Hero