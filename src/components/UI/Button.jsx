import React from 'react';
import style from './Button.module.css';

const Button = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${style.button} ${className ? style[className] : ''}`} >
      {text}
    </button >
  )
}

export default Button