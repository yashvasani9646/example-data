import React from 'react'
import useInput from './Useinput'

const Input = () => {

  const name = useInput()

  return (
    <input type="text" {...name} />
    
  )
}

export default Input