import React from 'react'

const Newsletter = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    //alert('Subscribed Successfully');
  }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-500 mt-3'>
            Get all the latest offers, deals and product updates by signing up for our newsletter today.
        </p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type='email' placeholder='Enter your email address' className=' w-full sm:flex-1 outline-none ' required/>
            <button type='submit' className= ' rounded-lg bg-gray-700 text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default Newsletter