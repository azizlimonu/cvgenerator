import React from 'react'
import style from './Experience.module.css'

const Experience = ({ experience }) => {
  return (
    <>
      <h2>Experience</h2>
      <div className={style.experience}>
        {experience?.map((exp) => (
          <div className={style['experience-item']} key={exp.id}>
            {exp.form && (
              <p className={style.date}>
                {exp.from} - {exp.to}
              </p>
            )}
            <h3 className={style.position}>{exp.position}</h3>
            {exp.company && (
              <p className={style.company}>
                {exp.company}, {exp.city}
              </p>
            )}
            <p className={style.description}>{exp.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Experience