import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    <div className="w-full bg-white text-center mt-28" >
      <h3 className="text-[32px] font-bold">Our Template</h3>

      <div className="max-w-[800px] mx-auto mt-11 grid gap-8 md:gap-5 md:grid-cols-2 lg:gap-8 xl:gap-16 justify-center">

        {/* CV Template 1 */}
        <div className="border min-w-[80vw] sm:min-w-[400px] md:min-w-full group even:bg-primary flex flex-col items-center rounded-xl shadow-borderShadow">

          <h4 className="mt-6 font-bold text-2xl">CV Professional</h4>

          <img src='/images/professional-cv.jpg' alt='cv1' className='w-[90%] mt-5 max-h-[350px]' />

          <Link to='/cv-template-1' className="primary-button mt-9 mb-8 group-even:primary-button-white rounded-lg hover:text-white hover:bg-black p-2 bg-slate-700 text-white">
            Use This Template
          </Link>
        </div>

        {/* CV template 2 */}
        <div className="border min-w-[80vw] sm:min-w-[400px] md:min-w-full group even:bg-primary  flex flex-col items-center rounded-xl shadow-borderShadow">

          <h4 className="mt-6 font-bold text-2xl">CV Creative</h4>

          <img src='/images/creative-cv.jpg' alt='cv1' className='w-[90%] mt-5 max-h-[350px]' />

          <Link to='/cv-template-2' className="primary-button mt-9 mb-8 group-even:primary-button-white rounded-lg hover:text-white hover:bg-black p-2 bg-slate-700 text-white">
            Use This Template
          </Link>
        </div>

      </div>
    </div>

  )
}

export default Card