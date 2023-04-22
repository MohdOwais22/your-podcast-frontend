import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export default function Form() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>SIGN In PAGE</h2>
          <span>Login here</span>



          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email")} placeholder='email' />
            <input type="password" {...register("password")} placeholder='password' />


            <button className='btn'>Login</button>
          </form>
          <p>Not Loggin In! Go to <button to='Signup'>Signup</button> Page</p>

        </div>
      </div>
    </section>
  )
}
