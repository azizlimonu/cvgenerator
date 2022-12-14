import React from 'react';
import style from './CVPreview.module.css';
import Header from './Preview/Header'
import Education from './Preview/Education'
import Skills from './Preview/Skills'
import Awards from './Preview/Awards'
import GeneralInfo from './Preview/GeneralInfo'
import Experience from './Preview/Experience'
import {useCV} from '../contextApi/Store';

const CVPreview = ({ ref }) => {
  const { generalInfo, skills, education, experience, awards } = useCV();

  return (
    <div className={style['cv-preview']} ref={ref}>
      <Header info={generalInfo} />
      <hr />
      <main className={style.main}>
        <div className={style['main-left']}>
          <Education education={education} />
          <hr />
          <Skills skills={skills} />
          <hr />
          <Awards awards={awards} />
        </div>
        <div className={style['vertical-line']}></div>
        <div className={style['main-right']}>
          <GeneralInfo generalInfo={generalInfo} />
          <hr />
          <Experience experience={experience} />
          <hr />
        </div>
      </main>
    </div>
  )
}

export default CVPreview