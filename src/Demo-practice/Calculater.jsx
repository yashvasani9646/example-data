import React from 'react'
import Usecalculator from './UseCalculater'

const Calculater = () => {


    const [count, handleIncrease, handleDecrease] = Usecalculator()

    return (
        <div>

            <button onClick={handleDecrease}>-</button>

            <span style={{ margin: "10px" }}>{count}</span>

            <button onClick={handleIncrease}>+</button>

        </div>
    )
}

export default Calculater