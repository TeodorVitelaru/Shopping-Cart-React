
import { useContext, useState } from "react"
import {useNavigate} from "react-router-dom"
import { ShoppingCartContext } from "../../context"


export default function ProductTitle({singleProductTitle}){

    const navigate = useNavigate()
    const {handleAddToCart, cartItems} = useContext(ShoppingCartContext)

    function handleNavigateToProductDetilsPage(getCurrentProductId){
        
        navigate(`/product-details/${getCurrentProductId}`)
    }

    return (
        <div className="relative group border border-cyan-700 cursor-pointer p-7 rounded-xl shadow-xl">
            <div className="overflow-hidden aspect-w-1 aspect-h-1">
                <img 
                src={singleProductTitle?.thumbnail}
                alt={singleProductTitle?.title}
                className="!object-cover !w-full !h-full !transition-all !duration-300 group-hover:scale-125 aspect-square"
                />
            </div>
            <div className="flex items-start justify-between flex-col sm:flex-row min-w-0">
                <div className="font-bold sm:text-sm text-xs md:text-base text-gray-950">
                    <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{singleProductTitle?.title}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">${singleProductTitle?.price}</p>
                </div>
            </div>
            <button 
            onClick={() =>{
                handleNavigateToProductDetilsPage(singleProductTitle?.id)
            }} className="!px-5 !mt-5 !w-full !py-2 !rounded-none !bg-black text-white !font-bold !text-lg !py-1.5 !md:py-2 !text-sm !md:text-base !font-medium">View details</button>
            <button disabled={
                cartItems.findIndex((item) => item.id === singleProductTitle.id) !== -1
            }
            onClick={()=>{
                handleAddToCart(singleProductTitle)
            }}
            className="disabled:opacity-20 !px-5 !mt-5 !w-full !py-2 !rounded-none !bg-black text-white !font-bold !text-lg !py-1.5 !md:py-2 !text-sm !md:text-base !font-medium">Add to cart</button>
        </div>
    )
}