import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addNewProduct, fetchListOfProducts } from "./api";
import { useState } from "react";




export default function ReactQueryDemo(){

    const [productTitle, setProductTitle] = useState('')
    
    const getQueryClient = useQueryClient()

    const {data: productList, isLoading} = useQuery({
        queryKey: ["productList"],
        queryFn: () => fetchListOfProducts()
    })

    const {mutateAsync: handleAddNewProductMutation} = useMutation({
        mutationFn: addNewProduct,
        onSuccess: ()=>{
            getQueryClient.invalidateQueries(["productList"])
        }
    })
    
    if(isLoading) return <h1>Loading product please wait</h1>

    async function handleAddNewProduct() {
        await handleAddNewProductMutation(productTitle)
        setProductTitle('')
    }

    return(
        <div>
            <h1>React query demo</h1>
            <div>
                <input name="name" 
                placeholder="enter product title"
                value={productTitle} onChange={(event)=>setProductTitle(event.target.value)}/>
                <button onClick={handleAddNewProduct} disabled={productTitle.trim() === ""} type="button">Add new product</button>
            </div>
            <ul>
                {
                    productList.length > 0 ?
                    productList.map(item => 
                        <li key={item.id}>{item.title}</li>
                    ) : <h3>No product found</h3>
                }
            </ul>
        </div>
    )
}