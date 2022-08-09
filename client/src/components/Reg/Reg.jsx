import React from 'react'
import styles from './Reg.module.css'

export default function Reg() {
  return (
    <div>
      <br />
      <form className={styles.FormReg}>
        <label>
          name
          <br />
          <input type='name'/>
        </label>
        <br />
        <label>
          email
          <br />
          <input type='email'/>
        </label>
        <br />
        <label>
          password
          <br />
         <input type='password'/>
        </label>
        <br />
        <button type='button'>send</button>
      </form>
    </div>
  )
}
