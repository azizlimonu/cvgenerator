import React from 'react'
import CVForm from '../components/CVForm'
import CVPreview from '../components/CVPreview'

const CVTemplate1 = () => {
  return (
    <div className='flex m-11 flex-row' >
      <CVForm />
      <CVPreview/>
    </div>
  )
}

export default CVTemplate1;