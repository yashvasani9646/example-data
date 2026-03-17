
// import { useDispatch, useSelector, } from 'react-redux'

import Pratice from "./Demo-practice/Pratice"
import Calculater from "./Demo-practice/Calculater"
import Cataogery from "./Demo-practice/Cataogery"
import Crudyou from "./Demo-practice/Crudyou"
import Formdata from "./Demo-practice/Formdata"
import Reduce from "./Demo-practice/Reduce"
import SecondCrude from "./Demo-practice/SecondCrude"
import UnemployeList from "./Demo-practice/UnemployeList"
import { Chart } from "chart.js"
import PieChart from "./Demo-practice/Chart"

// import './App.css'
// import { decrement, increment, reset,incrementbyAmount } from './counterSlice';
// import { useState } from 'react';

function App() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch()
  // const [num,setNum]= useState(5);

  // function handelincreament() {
  //   dispatch(increment());
  // }

  // function handeldecrement() {
  //   dispatch(decrement());
  // }


  // function handelreset() {
  //   dispatch(reset());
  // }
  return (
    <div>
      {/* <button onClick={()=>dispatch(increment())}>+</button>
      <p>Count:{count}</p>
      <button onClick={()=>dispatch(decrement())}>-</button><br />

      <button onClick={()=>dispatch(reset())}>Reset</button><br />      
      <input type='number'onChange={(e)=>{setNum(e.target.value)}} value={num}/>
      <button onClick={()=>dispatch(incrementbyAmount(Number(num)))}>data</button> */}


      {/* <Reduce/><br/><br/><br/> */}
      {/* <Formdata/> */}
      {/* <UnemployeList/> */}
      {/* <Crudyou/> */}
      {/* <SecondCrude/> */}




      <Calculater/>
      <Pratice />
      {/* <PieChart/> */}

    </div>

  )
}

export default App

