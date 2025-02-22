import useCounter from "../store/use-counter"




export default function CounterValue(){

    const stateValue = useCounter(state=>state)
    const {count} = stateValue

    return(
        <div>
            Counter is {count}
        </div>
    )
}