import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ShoppingCartContext } from "../../context"



export default function ProductDetailsPage(){

    const navigate = useNavigate()
    const {id} = useParams()
    const {productDetails, setProductDetails, setLoading, loading, handleAddToCart, handleChangeMainImage, mainImage} = useContext(ShoppingCartContext)


    async function fetchProductDetails() {
        
        const apiResponse = await fetch(`https://dummyjson.com/products/${id}`)
        const result = await apiResponse.json()
        
        if(result){
            setProductDetails(result)
            handleChangeMainImage(result?.thumbnail)
            setLoading(false)
        } 
    }

    
    useEffect(()=>{
        fetchProductDetails()
    }, [id])

    

    if(loading) return <h1>Wait fot data to be fetch</h1>


    return(
        <div>
            <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="px-4 py-10 rounded-xl shadow-lg relative">
                            <img 
                            className="w-2/4 rounded object-cover"
                            src={mainImage}
                            alt={productDetails?.title}
                            />
                        </div>
                        <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                            {
                                productDetails?.images?.length > 0 ?
                                productDetails?.images.map((item)=>
                                <div className="rounded-xl p-4 shadow-md" key={item}>
                                    
                                    <img 
                                    className="w-24 cursor-pointer"
                                    src={item}
                                    alt='product secondary image'
                                    onClick={()=> handleChangeMainImage(item)}/>
                                </div>
                                ) : null
                            }
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-[black]">{productDetails?.title}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-xl font-bold">${productDetails?.price}</p>
                        </div>
                        <div>
                            <button 
                            onClick={()=>handleAddToCart(productDetails)}
                            className="mt-5 min-w-[200px] px-4 !py-3 border !border-[#333] bg-transparent !text-sm font-semibold rounded">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}