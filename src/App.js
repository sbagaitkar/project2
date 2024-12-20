import React from 'react'
import {useState} from 'react'
import "./App.css";
//code for counter functionality, counter will increase by 1 when user hits '+' button. Counter will decrease by 1 when user hits '-' button.
export default function App5() {
 //const [upCount, increaseCounter] = useState();
 //const [downCount, decreaseCounter] = useState();
 const [num,setNum] = useState(5);
 
 const increaseCounter = () => {
    setNum(num+1);
 }

 const decreaseCounter = () => {
    setNum(num-1);
 }
 
 return (
    <div>
    <div className="row" >
        <h1>Counter</h1>
     </div>   

        <div className = "row1">
        <p><button onClick={increaseCounter}> + </button></p>
        <p className="number"><b>{ num }</b></p>
        <p><button onClick={decreaseCounter}> - </button></p>
        </div>

    </div>
  )
}
