import React from 'react'
import GeneralInfo from './Form/GeneralInfo'
import style from './CVForm.module.css'
import Education from './Form/Education'
import Awards from './Form/Awards'
import Experience from './Form/Experience'
import Skill from './Form/Skill'

const CVForm = () => {
  return (
    <div className={style.cvform}>
      <GeneralInfo />
      <Education />
      <Awards />
      <Experience />
      <Skill />
      {/* Project */}
      {/* Action To Print */}
    </div>
  )
}

export default CVForm