import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>

          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>547 Willms Station <br />Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: +91(415) 555-0123 <br /> Email: user123@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our team and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white rounded-lg transition-all duration-500'>Explore Jobs</button>
          

        </div>

      </div>
      <Newsletter/>

    </div>
  )
}

export default Contact