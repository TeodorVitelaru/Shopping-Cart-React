import { useSelector } from "react-redux"



export default function CounterValue(){

    const state = useSelector(state => state)
    const {countValue} = state
    console.log(state);
    

    return(
        <p>Counter value is {countValue}</p>
    )
}