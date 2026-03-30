import React from 'react'
import Usecalculator from './UseCalculater'

const Calculater2 = () => {


    const [count, handleIncrease, handleDecrease] = Usecalculator(100)

    return (
        <div>

            <button onClick={handleDecrease}>-</button>

            <span style={{ margin: "10px" }}>{count}</span>

            <button onClick={handleIncrease}>+</button>

        </div>
    )
}

export default Calculater2

