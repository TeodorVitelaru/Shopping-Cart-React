import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import ProductTitle from "../../components/productTitle"

export default function ProductListPage(){

    const {listOfProducts, loading} = useContext(ShoppingCartContext)

    if(loading) return <h3>Wait for data to be fetch</h3>

    return(
        <section className="py-12 bg-white sm:py-16 lg:py-20 bg-gradient-to-r from-gray-100 to-gray-300">
            <div className="px-4 mx-auto sm:px-6 lg:px-9 max-w-7x1">
                <div className="max-w-md mx-auto text-center pb-5">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-center ">Our featured Products</h2>
                </div>
                <div className="grid grid-cols-2 gap-10 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4 m:grid-cols-2 sm:grid-cols-1">
                    {
                        listOfProducts && listOfProducts.length > 0 ?
                        listOfProducts.map((item, idItem)=>
                            <ProductTitle key={idItem}singleProductTitle={item}/>
                        ) : <h3>No products found</h3>
                    }
                </div>
            </div>
        </section>
    )
}