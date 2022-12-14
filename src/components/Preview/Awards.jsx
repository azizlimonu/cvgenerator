import React from 'react'
import style from './Awards.module.css'

const Awards = ({ awards }) => {
  return (
    <>
      <h2>Awards</h2>
      <div className={style.awards}>
        {awards?.map((award) => (
          <div key={award.id}>
            <h3 className={style.title}>{award.title}</h3>
            <p className={style.organization}>{award.organization}</p>
            <p className={style.year}>{award.year}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Awards