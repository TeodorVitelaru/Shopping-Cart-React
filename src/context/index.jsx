


//create the context
//provide the state to the context
//wrap context in root component
//consume the context using useContext

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null)

export default function ShoppingCartProvider({children}){

    const [loading, setLoading] = useState(true)
    const [listOfProducts, setListOfProducts] = useState([])
    const [productDetails, setProductDetails] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()
    const [mainImage, setMainImage]= useState(null)

    async function fetchListOfProducts() {
        const apiResponse = await fetch('https://dummyjson.com/products')
        const result = await apiResponse.json()
        
        if(result && result?.products){
            setListOfProducts(result?.products)
            setLoading(false)
        }
    }  
    
    function handleAddToCart(getProductDetails){
        let cpyExistingCartItems = [...cartItems]
        const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(cartItem => cartItem.id === getProductDetails.id)
        
        if(findIndexOfCurrentItem === -1){
            cpyExistingCartItems.push({
                ...getProductDetails,
                quantity: 1,
                totalPrice: getProductDetails?.price
            })
        }  else{
            cpyExistingCartItems[findIndexOfCurrentItem] = {
                ...cpyExistingCartItems[findIndexOfCurrentItem],
                quantity: cpyExistingCartItems[findIndexOfCurrentItem].quantity + 1,
                totalPrice: cpyExistingCartItems[findIndexOfCurrentItem].totalPrice + cpyExistingCartItems[findIndexOfCurrentItem].price
            }
        }

        setCartItems(cpyExistingCartItems)
        localStorage.setItem('cartItems', JSON.stringify(cpyExistingCartItems))
        navigate('/cart')
    }

    
    function handleRemoveFromCart(getProductDetails, isFullyRemoved){
        let cpyExistingCartItems = [...cartItems]
        const findIndex = cpyExistingCartItems.findIndex(item => item.id === getProductDetails.id)

        if(cpyExistingCartItems[findIndex].quantity === 1){
            isFullyRemoved = true
        }

        if(isFullyRemoved){
            cpyExistingCartItems.splice(findIndex, 1)
        } else{
            cpyExistingCartItems[findIndex] = {
                ...cpyExistingCartItems[findIndex],
                quantity: cpyExistingCartItems[findIndex].quantity-1,
                totalPrice: cpyExistingCartItems[findIndex].totalPrice-cpyExistingCartItems[findIndex].price
            }
        }

        setCartItems(cpyExistingCartItems)
        localStorage.setItem('cartItems', JSON.stringify(cpyExistingCartItems))
    }

    function handleChangeMainImage(anotherImage){
        setMainImage(anotherImage)
    }
    

    useEffect(()=>{
        fetchListOfProducts()
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
        setCartItems(storedCartItems)
    }, [])

    

    return(
        <ShoppingCartContext.Provider value={{
            listOfProducts, 
            loading, 
            setLoading, 
            productDetails, 
            setProductDetails, 
            handleAddToCart, 
            cartItems,
            handleRemoveFromCart,
            handleChangeMainImage,
            mainImage
        }}>{children}</ShoppingCartContext.Provider>
    )
}