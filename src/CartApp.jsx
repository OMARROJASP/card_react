import {getProducts} from "./services/productService.js";
import {useEffect, useState} from "react";
import {CatalogView} from "./components/CatalogView.jsx";
import {CartView} from "./components/CartView.jsx";
import {products} from "./data/products.js";

export const CartApp =()=> {
    const initialCartItems= JSON.parse(sessionStorage.getItem('cart')) || []
    const [cartItems, setCartItems] = useState(initialCartItems)
    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem){
            setCartItems(
                cartItems.map((i) => {
                    if(i.product.id === product.id){
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
            );


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
            setCartItems([...cartItems,
                    {
                        product,
                        quantity:1,
                    }
            ]);
        }

    }

    const handlerDeleteProductCart = (id) => {
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ])
    }

    return(
        <>

            <div className='container my-4'>
                <h3 className='text-primary'>cART APP</h3>
                <CatalogView handler={handlerAddProductCart}></CatalogView>
                {cartItems?.length <=0 ||(
                    <div className='my-4 w-50'>
                        <CartView items={cartItems} handleDelete={handlerDeleteProductCart}></CartView>
                    </div>
                )}


            </div>
        </>
    )
}