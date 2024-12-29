import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
return (
    <div className='flex flex-col sm:flex-row gap-12 justify-around sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div className='bg-white shadow-lg shadow-blue-500/50 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-500'>We offer hassle free exchange policy</p>
        </div>
        <div className='bg-white shadow-lg shadow-blue-500/50 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-500'>We Provide 7 Days free Return policy</p>
        </div>
        <div className='bg-white shadow-lg shadow-blue-500/50 rounded-lg p-6 hover:shadow-xl transition-shadow duration-300'>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <p className='font-semibold'>Best Customer Support </p>
            <p className='text-gray-500'>We Provide 24X7 Customer Support</p>
        </div>
    </div>
)
}

export default OurPolicy