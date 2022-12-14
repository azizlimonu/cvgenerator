import React from 'react'

const GeneralInfo = ({ generalInfo }) => {
  return (
    <div className='min-h-[80px]'>
      <h2>Profile</h2>
      <p className='text-justify'>{generalInfo.description}</p>
    </div>
  )
}

export default GeneralInfo