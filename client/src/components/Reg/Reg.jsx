import React, { useEffect } from 'react'
import styles from './Reg.module.scss'
import {Controller, useForm} from 'react-hook-form'
import ReactSelect from 'react-select' // библиотека по выпадающим меню
import axios from 'axios'
import { useState } from 'react'

const options = [
  {
    value: 'russia',
    label: 'Russiania'
  },
  {
    value: 'armenia',
    label: 'armenianin'
  },
  {
    value: 'america',
    label: 'armericanic'
  },
]

const myUrl = 'http://localhost:3001/'

export default function Reg() {
  // const [inputs, setInputs] = useState({})  

    const {
        register, // список настроек 
        handleSubmit, // слушает форму, передаем в неё функцию которая сработает по заполнению формы 
        formState: {errors}, // хранит в себе все стэйты в данном примере стэйт с ошибками
        reset, // отчищает форму 
        watch, // отслеживает изменения состояния
        // setValue, // позволяет изменить значение
        control,
    } = useForm({
      mode: 'onChange'
    })  // в аргументы можно добавить настройки для все форм нарпимер {defultValue: {name: dima}, mode: onChange }


  const onSubmit = (data) => {
    alert(`Your name: ${data.name}`)

    // setInputs(data)

    axios.post(`${myUrl}reg`, data, {withCredentials: true})
      .then((res) => console.log(res))
      .catch((error) => error.log(error))
  
    reset() //отчищает форму
  }

  /* пример использования watch(), отслеживает всю форму */
  useEffect(() => {
    const sub = watch((value, {name, type}) => console.log('log', value, name, type))  
    return () => sub.unsubscribe()
  }, [watch])


  // const sValue = () => {           .// поменять значение формы 
  //   setValue('name', 'dim')
  //   setValue('email', 'allo.pes')
  // }
  return (
    <div>
     <br />
      <form className={styles.FormReg} onSubmit={handleSubmit(onSubmit)}>
        <label>
          name
          <br />
          <input {...register('name', {
            required: 'Необходимо ввести name' // сообщение, если поле не заполненно 
          })} type='text' name='name' maxLength={5} disabled={""}
          placeholder='имя'/>
          {errors?.name && <div style={{color: "red"}}>{errors.name.message}</div>}
        </label>
        <br />
        <label>
          email
          <br />
          <input {...register('email', {
            required: 'Необходимо ввести email',
            pattern: {
                // value: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/,
                message: 'пожалуйста введите правильный email'
            }
          })} 
            type='text'
            name='email'
            placeholder='почта'/>
          {errors?.email && <div style={{color: "red"}}>{errors.email.message}</div>}
        </label>
        <br />
        <label>
          password
          <br />
         <input {...register('password')} type='password' placeholder='пароль'/>
        </label>
        <br />

        <Controller 
          control={control}
          name={'adress.country'}
          render={({field, fieldState: {error}}) => {
            
            return (
              <div>
                <ReactSelect 
                  options={options}
                  placeholder='Страны'
                  />
                {error && <div style={{color: 'red'}}>{error.message}</div>}
              </div>
            )
          }}

        />
     
        <button >send</button>
      </form>
    </div>
  )
}
