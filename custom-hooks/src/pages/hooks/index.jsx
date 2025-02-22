import { useEffect, useRef } from "react"


export default function Hooks(){

    const countValue = useRef(0)
    const divElementRef = useRef()

    function handeleClick(){
        countValue.current++
        console.log(countValue.current);
    }

    useEffect(()=>{
        const getDivReference = divElementRef.current
    }, [])

    return(
        <div>
            <h1>Use ref, callback and use memore hook</h1>
            <button onClick={handeleClick} >Click me</button>
            <div ref={divElementRef}>Some random text</div>
        </div>
    )
}