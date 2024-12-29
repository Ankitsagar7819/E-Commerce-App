import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo beatae necessitatibus, ex error corporis doloribus iure numquam possimus molestiae voluptatum eaque unde reprehenderit, harum natus eius ipsum pariatur quidem magni officiis laudantium dicta? Reprehenderit voluptas aspernatur consequatur? Consequatur, blanditiis rem ratione recusandae quisquam quidem voluptatibus.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum inventore minima laboriosam modi maxime, nisi, porro libero dignissimos dicta corrupti quam fugit quas ullam eligendi illo? Commodi alias iste consequatur deserunt, dignissimos distinctio iusto eveniet eligendi labore tempora illo soluta.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque architecto id tempora nostrum, ab beatae earum cupiditate minus ex nesciunt modi amet voluptatibus dolorem dicta quis repellendus quod consequatur consequuntur ipsam quisquam magnam iusto iure?</p>
        </div>
      </div>
         

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20 gap-4'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur excepturi, tempore illo eligendi, dolorum officia quidem vel minima sit illum molestiae veniam. Voluptates, consequuntur ut nam non eos illum nemo dicta cum eaque qui. Incidunt.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur excepturi, tempore illo eligendi, dolorum officia quidem vel minima sit illum molestiae veniam. Voluptates, consequuntur ut nam non eos illum nemo dicta cum eaque qui. Incidunt.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur excepturi, tempore illo eligendi, dolorum officia quidem vel minima sit illum molestiae veniam. Voluptates, consequuntur ut nam non eos illum nemo dicta cum eaque qui. Incidunt.</p>
        </div>
      </div>
      <Newsletter/>


    </div>
  )
}

export default About