import React from 'react'
import CVForm from '../components/CVForm'
import CVPreview from '../components/CVPreview'
import style from './CVTemplate1.module.css'

const CVTemplate1 = () => {
  return (
    <div className={style.contain} >
      <CVForm />
      <CVPreview />
    </div>
  )
}

export default CVTemplate1;