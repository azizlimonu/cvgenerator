import React from 'react';
import style from './Input.module.css';

const Input = ({
  type, name, placeholder, value, onChange, maxLength, label
}) => {

  return (
    <div className={style.wrapper}>
      <div className={style.input}>
        <input
          className={style['input-field']}
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
        <label
          htmlFor={name}
          className='text-[1.4rem] block absolute bottom-[-25%] input-label'
        >
          {label}
        </label>
      </div>
    </div>
  )
}

export default Input