import { useState } from 'react'

const useForm = () => {

  const [values, setValues] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {3
    const name = e.target.name
    const value = e.target.value

    setValues({
      ...values,
      [name]: value
    })
  }

  return { values, handleChange }
}

export default useForm