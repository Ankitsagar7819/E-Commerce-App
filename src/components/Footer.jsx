import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div className="hover:shadow-lg transition-shadow duration-300 p-5 rounded-lg">
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veritatis possimus earum, soluta beatae quaerat non vel odit qui voluptates animi, quas praesentium. Culpa veniam quaerat perferendis!
                    </p>
                </div>
                <div className="hover:shadow-lg transition-shadow duration-300 p-5 rounded-lg" >
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li className="hover:text-gray-800 cursor-pointer">Home</li>
                        <li className="hover:text-gray-800 cursor-pointer">About us</li>
                        <li className="hover:text-gray-800 cursor-pointer">Delivery</li>
                        <li className="hover:text-gray-800 cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>
                <div className="hover:shadow-lg transition-shadow duration-300 p-5 rounded-lg">
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li className="hover:text-gray-800 cursor-pointer">Address: 123, Main Street, Your City</li>
                        <li className="hover:text-gray-800 cursor-pointer">Phone: +123 456 7890</li>
                        <li className="hover:text-gray-800 cursor-pointer">Email: info@example.com</li>
                    </ul>
                </div>
            </div>
            
            <div>
                <hr/>
                <p className='py-5 text-sm text-center  text-gray-800'>© 2023 by Ecommerce. Proudly created with Tailwind CSS</p>

            </div>
        </div>
    )
}

export default Footer