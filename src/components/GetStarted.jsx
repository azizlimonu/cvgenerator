import React from 'react'
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src='/images/benefit-1.svg' alt='hero' className='w-[500px] mx-auto py-4 ' />

        <div className='flex flex-col justify-center'>
          <p className='text-[#474c4b] font-bold '>
            CV Ats Friendly
          </p>
          <h1 className='md:text-4xl sm:text-2xl text-xl font-bold py-5 '>
            Create Your CV Perfectos
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sed dicta suscipit sit, perspiciatis distinctio deserunt corporis aperiam architecto eaque veniam iusto modi ab odio fugiat atque necessitatibus rerum exercitationem!
          </p>

          <Link to='/template' className='mx-auto bg-black w-[200px] rounded-md font-medium my-7 text-white hover:bg-white py-3 hover:text-black ease-linear duration-500 flex justify-center'>
            Get Started
          </Link>
        </div>

      </div>
    </div>
  )
}

export default GetStarted;