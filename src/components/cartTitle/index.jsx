import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";


export default function CartTitle({singleCartItem}){

    const {handleRemoveFromCart, handleAddToCart} = useContext(ShoppingCartContext)

    return(
        <Fragment>
            <div className="grid grid-cols-3 items-start gap-5 p-5">
            <div className="col-span-2 flex items-start gap-4">
                <div className="2-28 h-28 max-sm:w-20 shrink-0 bg-gray-300 p-1 rounded-sm">
                    <img
                    src={singleCartItem?.thumbnail}
                    className="w-full h-full object-contain"
                    />
                </div>
                <div className="">
                    <h3 className="text-base font-bold text-gray-900">{singleCartItem?.title}</h3>
                    <button 
                    onClick={()=>{
                        handleRemoveFromCart(singleCartItem, true)
                    }}
                    className="px-6 py-3 mt-5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-bold hover:from-pink-600 hover:via-purple-700 hover:to-indigo-600 transition">Remove</button>
                </div>
            </div>
            <div className="ml-auto flex flex-col space-y-1 pt-3">
                <div className="gap-2 flex items-center justify-between">
                    <p className="">1 x <a className="text-m font-bold !text-gray-900 ">{singleCartItem?.quantity}</a></p>
                    <p>-</p>
                    <h3 className="text-xl font-bold text-gray-900">${singleCartItem?.price.toFixed(2)} </h3>
                </div>
                <div className="flex items-center justify-between">
                    <button onClick={()=> handleRemoveFromCart(singleCartItem, false)} className="border !border-[#000]" >-</button>
                    <p>-</p>
                    <button onClick={()=> handleAddToCart(singleCartItem)} className="border !border-[#000]">+</button>
                </div>
            </div>
        </div>
        <hr className="border-gray-500"/>
        </Fragment>
    )
}