import React from 'react'
import style from './Header.module.css'
import { AiFillPhone, AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail, MdPlace } from 'react-icons/md'
// AiFillGithub

const Header = ({ info }) => {
  return (
    <header className={style.header}>
      <div className={style.names}>
        <p>
          <span className={style['first-name']}>{info.firstName}</span>{' '}
          <span className={style['last-name']}>{info.lastName}</span>
        </p>
        <h4 className={style.title}>{info.title}</h4>
      </div>
      <div className={style.links}>
        <ul>
          {info.phoneNumber && (
            <li>
              {info.phoneNumber}
              <AiFillPhone />
            </li>
          )}
          {info.email && (
            <li>
              {info.email}
              <MdEmail />
            </li>
          )}
          {info.address && (
            <li>
              {info.address}
              <MdPlace />
            </li>
          )}
          {info.linkedIn && (
            <li>
              {info.linkedIn}
              <AiFillLinkedin />
            </li>
          )}
          {info.facebook && (
            <li>
              {info.facebook}
              <AiFillFacebook />
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header