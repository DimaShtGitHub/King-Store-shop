import React from 'react'
import {Link} from 'react-router-dom'
import cls from './NavBar.module.scss'

export default function NavBar() {
  return (
    <div className={cls.container}>
        <Link className={cls.item} to={'/'}>main</Link>
        <Link className={cls.item} to={'/Reg'}>reg</Link>
    </div>
  )
}
