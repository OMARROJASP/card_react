import {useEffect, useReducer} from "react";
import {itemReducer} from "../reducer/itemReducer.js";
import {AddProductCart, DeleteProductCart, UpdateQuantityProductCart} from "../reducer/itemsActions.js";

const initialCartItems= JSON.parse(sessionStorage.getItem('cart')) || []
export const useItemsCart =()=> {
    const [cartItems, dispatch] = useReducer(itemReducer, initialCartItems)
    useEffect(() => {
        sessionStorage.setItem('cart',JSON.stringify(cartItems))
    }, [cartItems]);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem){
            dispatch({
                type: UpdateQuantityProductCart,
                payload:product,
            })


            /*
            setCartItems([
                ...cartItems.filter((i) => i.product.id !== product.id),
                {
                    product,
                    quantity: hasItem.quantity + 1,
                }
            ])
             */
        }else {

            dispatch({
                type:AddProductCart,
                payload: product
            })

        }

    }

    const handlerDeleteProductCart = (id) => {
        dispatch({
            type:DeleteProductCart,
            payload:id
        })
    }

    return{
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart
    }
}