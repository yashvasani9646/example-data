import React from 'react'
import useForm from './Useform'

const Form = () => {

  const { values, handleChange } = useForm()

  return (
    <>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />

      
    </>
  )
}

export default Form