import React from 'react';
import { BsFillPlusSquareFill, BsFillFileMinusFill } from 'react-icons/bs';
import style from './HeaderSection.module.css';

const HeaderSection = ({ text, isShown, onToggleSection }) => {
  return (
    <div
      onClick={onToggleSection}
      className={style.header}
    >
      <h3>{text}</h3>

      {!isShown && <BsFillPlusSquareFill className={style.light} />}
      {isShown && <BsFillFileMinusFill className={style.light} />}
    </div>
  )
}

export default HeaderSection