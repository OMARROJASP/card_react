import {Navigate, Route, Routes} from "react-router-dom";
import {CatalogView} from "../components/CatalogView.jsx";
import {CartView} from "../components/CartView.jsx";

export const CartRoutes =({handlerAddProductCart,handlerDeleteProductCart,cartItems})=>{
    <Routes>
        <Route
            path='catalog'
            element={ <CatalogView handler={handlerAddProductCart}></CatalogView>} />
        <Route path='cart' element={(
            cartItems?.length <=0 ?
                <div className='alert alert-warning'>
                    No hay productos en el carrito de compras! </div>:
                (
                    <div className='my-4 w-50'>
                        <CartView items={cartItems} handleDelete={handlerDeleteProductCart}></CartView>
                    </div>
                )
        )} />
        <Route path='/' element={<Navigate to={'/catalog'}/> }/>
    </Routes>
}