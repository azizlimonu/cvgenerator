import React from 'react';
import style from './Button.module.css';

const Button = ({ onClick, text, classes }) => {
  return (
    <button
    onClick={onClick}
      className={`${style.button} ${classes ? style[classes] : ''}`} >
      {text}
    </button >
  )
}

export default Button