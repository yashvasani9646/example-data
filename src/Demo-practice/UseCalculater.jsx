import { useState } from 'react'

const Usecalculator = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }
    return [count, handleIncrease, handleDecrease]
}

export default Usecalculator

