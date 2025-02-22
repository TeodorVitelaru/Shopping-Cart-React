import { useState } from "react"
import Child from "./child"




export default function Counter(){

    const [count, setCount] = useState(0)

    function handleOnClick(){
        setCount(count+1)
    }

    return(
        <div>
            <p>Count is: {count}</p>
            <button onClick={handleOnClick}>Click</button>
            <Child count={count}/>
        </div>
    )
}