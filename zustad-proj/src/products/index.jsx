import { useEffect } from "react"
import useCounter, { useActions } from "../store/use-counter"



export default function Products(){

    const fetchProducts = useCounter(state => state.fetchListOfProducts)
    const productList = useCounter(state => state.listOfProducts)

    const {fetchListOfProducts} = useActions()

    useEffect(()=>{
        fetchListOfProducts()
    }, [])

    return(
        <div>
            <ul className="flex flex-wrap">
                {
                    productList?.length > 0 ?
                    productList.map(item => <div>
                        <p>{item?.id}</p>
                        <p>{item?.title}</p>
                        <img src={item?.thumbnail}/>
                    </div>) : <h1>No items available</h1>
                }
            </ul>
        </div>
    )
}