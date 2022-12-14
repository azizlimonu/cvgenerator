import React from 'react'
import GeneralInfo from './Form/GeneralInfo'
import style from './CVForm.module.css'
import Education from './Form/Education'
import Awards from './Form/Awards'
import Experience from './Form/Experience'
import Skills from './Form/Skills';

const CVForm = ({ onPrint }) => {
  return (
    <div className={style.cvform}>

      <GeneralInfo />
      <Education />
      <Awards />
      <Experience />
      <Skills />
      {/* Project */}
      {/* Action To Print */}
      <button onClick={onPrint} className='text-center mx-auto flex justify-center p-2 bg-slate-400 rounded-lg mb-10'>
        Generate PDF
      </button>
    </div>
  )
}

export default CVForm