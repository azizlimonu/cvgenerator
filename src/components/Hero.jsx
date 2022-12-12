import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] w-full  h-[90vh] mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] uppercase font-bold p-2'>
          Create Your Own CV
        </p>
        <h1 className='md:text-7xl sm:text-6xl text:4xl font-bold md:py-6'>
          CV Builder Make Your
        </h1>
        <div className='flex justify-center  gap-7'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
            Create Your Own CV Easy
          </p>
        </div>
        <p className='my-6 md:text-2xl font-bold text-gray-500'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, vitae.
        </p>

        <Link to='/template' className='bg-white w-[200px] rounded-md font-medium my-7 mx-auto py-3 text-black hover:bg-black hover:text-white ease-linear duration-500'>
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Hero;