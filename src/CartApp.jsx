import {useItemsCart} from "./hooks/useItemsCart.js";
import {Navbar} from "./components/Navbar.jsx";

export const CartApp =()=> {

    const {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart
    } = useItemsCart();


    return(
        <>
            <Navbar></Navbar>

            <div className='container my-4'>
                <h3 className='text-primary'>CART APP</h3>
                <CartRoutes
                    cartItems = {cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                ></CartRoutes>
            </div>
        </>
    )
}