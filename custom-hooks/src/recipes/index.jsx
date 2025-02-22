import { useLocation } from "react-router-dom"
import useFetch from "../hooks/use-fetch"
import useWindowResize from "../hooks/use-window-resize"


export default function ReciepeList(){

    const location = useLocation()

    const {data, loading, error} = useFetch('https://dummyjson.com/recipes')
    const windowSize = useWindowResize()


    if(loading) return <h1>Please wait</h1>
    


    return(
        <div>
            <h1 style={{
                color: windowSize.width < 768 ? 'red' : 'black'
            }}>Recipe-list</h1>
            <h3>Current window width: {windowSize.width} Current height: {windowSize.height}</h3>
            <ul>
                {
                    data?.recipes?.length > 0 ?
                    data?.recipes.map(item =>
                        <div>
                            <img src={item.image}/>
                            <label>{item.name}</label>
                        </div>
                    ) : null
                }
            </ul>
        </div>
    )
}