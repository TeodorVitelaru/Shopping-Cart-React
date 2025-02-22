import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { useNavigate } from "react-router-dom"
import CartTitle from "../../components/cartTitle"







export default function CartListPage(){
    const {cartItems} = useContext(ShoppingCartContext) 
    const navigate = useNavigate()

    return(
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-center p-5">Your cart</h1>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="md:col-span-2 space-y-4">
                    {
                        cartItems?.length ?
                        cartItems.map(singleCartItem=><CartTitle singleCartItem={singleCartItem}/>)
                        : <h1 className="bg-gradient-to-r from-gray-100 to-gray-300">No Items in the cart</h1>
                    }
                </div>
                <div className="!bg-gray-200 !rounded-sm p-4 h-max">
                    <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">Order Summary</h3>
                    <ul className="text-gray-700 mt-4 space-y-2">
                        <p className="flex flex-wrap gap-4 text-sm font-bold">Total: ${
                            cartItems.reduce((acc, curr) => acc + curr.totalPrice , 0).toFixed(2)
                            } <span></span></p>
                    </ul>
                    <div className="mt-5 flex gap-2">
                        <button className="!text-sm !px-4 !py-3 !bg-black text-white !font-extrabold">Checkout</button>
                        <button onClick={()=>navigate('/products')} className="!text-sm !px-4 !py-3 !bg-black text-white !font-extrabold">Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    )
}