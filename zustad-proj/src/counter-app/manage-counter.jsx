import useCounter from "../store/use-counter"






export default function ManageCounter(){

    const incrementCount = useCounter(state => state.handleIncrementCount)


    return(
        <button onClick={incrementCount} 
        className="!p-6 mb-20 mt-10 !bg-black text-white text-lg">Manage counter value</button>
    )
}