import React, { useState } from 'react'

const Calculater = () => {

    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }

    return (
        <div>

            <button onClick={handleDecrease}>-</button>

            <span style={{ margin: "10px" }}>{count}</span>

            <button onClick={handleIncrease}>+</button>

        </div>
    )
}

export default Calculater