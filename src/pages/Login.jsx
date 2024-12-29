import React, { useState } from 'react'

const Login = () => {
  const[currentState, setCurrentState] = useState('Sign Up')

  const onSubmitHandler = async(e) =>{
    e.preventDefault();

  }



  return (
   <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
      <p className='prata-regular text-3xl'>{currentState}</p>
      <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
    </div>
    {currentState === 'login' ? '' : <input type="text" className='w-full py-2 px-3 border border-gray-800 rounded-lg' placeholder='Enter Your Name' required/>}
    <input type="email" className='w-full py-2 px-3 border border-gray-800 rounded-lg' placeholder='Enter Your Email Address' required />
    <input type="password" className='w-full py-2 px-3 border border-gray-800 rounded-lg' placeholder='Enter Your Email Password' required />
    <div className='w-full flex justify-between text-sm mt-[-8px]'>
      <p className= ' cursor-pointer'>Forgot Password?</p>
      {
        currentState === 'login' ?
           <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer text-blue-700'>Don't have an account? </p>
         : <p onClick={() => setCurrentState('login')} className='cursor-pointer text-blue-700'>Login Here</p>
      
      }
    </div>
    <button  className='bg-black active:bg-gray-500 text-white font-light px-8 py-2 mt-4 rounded-lg'>{currentState === 'login' ? 'Sign In' : 'Sign Up'}</button>
   </form>
  )
}

export default Login