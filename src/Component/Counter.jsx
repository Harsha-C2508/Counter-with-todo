import React from "react";
import { useState } from "react";
import "../Component/Counter.css"

const Counter = () =>{
    const [count,setCount] = useState(0);

    return(
        <div>
            <h1>Counter App:</h1>
            <h2 style={count%2===0 ? {color: "red"} : {color: "green"}}>{count}</h2>
            <button  onClick={()=>{setCount(count+1)}}>Increase Count</button>
            <button  onClick={()=>{
                if(count>0){
                setCount(count-1)
                }
            }}>Decrease Count</button>
            <button  onClick={()=>{setCount(count*2)}}>Double</button>
            <button  onClick={()=>{setCount(count/2)}}>Half</button>
            <button  onClick={()=>{setCount(count*0)}}>Reset Value</button>
        </div>
    )
}
export default Counter;