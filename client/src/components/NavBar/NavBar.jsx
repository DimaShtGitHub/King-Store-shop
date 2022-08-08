import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <Link to={'/'}>main</Link>
        <br/>
        <Link to={'/Reg'}>reg</Link>
    </div>
  )
}
