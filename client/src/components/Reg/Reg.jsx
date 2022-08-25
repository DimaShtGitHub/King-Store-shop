import React from 'react'
import styles from './Reg.module.css'
import {useForm} from 'react-hook-form'

export default function Reg() {
    const {
        register, // список настроек 
        handleSubmit, // слушает форму, передаем в неё функцию которая сработает по заполнению формы 
        formState: {errors}, // хранит в себе все стэйты в данном примере стэйт с ошибками
        reset, // отчищает форму 
    } = useForm()  // в аргументы можно добавить настройки для все форм нарпимер {defultValue: {name: dima}, mode: onChange }

  const onSubmit = (data) => {
    alert(`Your name: ${data.name}`)
    console.log(data);
    reset() //отчищает форму
  }

  return (
    <div>
     <br />
      <form className={styles.FormReg} onSubmit={handleSubmit(onSubmit)}>
        <label>
          name
          <br />
          <input {...register('name', {
            required: 'Необходимо ввести name' // сообщение, если поле не заполненно 
          })} type='text' name='name' maxLength={3} disabled={""}
          placeholder='name'/>
          {errors?.name && <div style={{color: "red"}}>{errors.name.message}</div>}
        </label>
        <br />
        <label>
          email
          <br />
          <input {...register('email', {
            required: 'Необходимо ввести email',
            pattern: {
                value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
                message: 'пожалуйста введите правильный email'
            }
          })} 
            type='text'
            name='email'
            placeholder='email'/>
          {errors?.email && <div style={{color: "red"}}>{errors.email.message}</div>}
        </label>
        <br />
        <label>
          password
          <br />
         <input type='password' placeholder='password'/>
        </label>
        <br />
        <button type='checkbox' >send</button>
      </form>
    </div>
  )
}
