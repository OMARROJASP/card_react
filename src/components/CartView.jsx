import {useEffect, useState} from "react";
import {calculateTotal} from "../services/productService.js";
import {useNavigate} from "react-router-dom";

export const CartView = ({handleDelete,items}) => {

    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        setTotal(
        calculateTotal(items)
        )
       // sessionStorage.setItem('cart',JSON.stringify(items))
    }, [items]);
    const onDeleteProduct = (id) => {
        console.log("eliminado el producto")
        handleDelete(id)
    }

    const onCatalog =()=>{
navigate('/navigate')
    }

    return(
        <>
            <h3>Carro de compra</h3>
            <table className='table table-hover table-striped'>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                {items
                    .map(item => (

                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.quantity + item.product.price}</td>
                            <td><button className='btn btn-danger'
                                onClick={()=>
                                    onDeleteProduct(item.product.id)}
                            >Eliminar</button></td>
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                <tr>
                    <td colSpan="3" className='text-end fw-bold'> Total</td>
                    <td colSpan="2" className='text-end fw-bold'>{total}</td>
                </tr>
                </tfoot>
            </table>
            <button className={'btn btn-success'}
                    onClick={onCatalog}
            >Seguir comprando</button>
        </>
    )
}