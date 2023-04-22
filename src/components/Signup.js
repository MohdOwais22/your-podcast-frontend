import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Form() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>SIGN UP PAGE</h2>
          <span>Register here</span>



          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} placeholder='Name' />
            <select {...register("gender")}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="email" {...register("email")} placeholder='email' />
            <input type="password" {...register("password")} placeholder='password' />


            <button className='btn'>Register</button>
          </form>
          <p>Already Registered! Go to <button to='Login'>Login</button> Page</p>

        </div>
      </div>
    </section>
  )
}
