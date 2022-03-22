import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';

import '../assets/css/cart.css'

const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    const emptyCart = () => {
        return(      
                    <div className="cart-notification">
                        <h3>Chưa có sản phẩm trong giỏ hàng</h3>
                    </div>
        )
    }
    const cartItems = (product) => {
        return(
            <>
                <div className="cart-inner">
                    <div className="cart-img">
                        <img src={product.image} alt={product.title} height="200px" width="180px" />
                    </div>
                    <div className="cart-info">
                        <h3 className='cart-title'>{product.title}</h3>
                        <p className="cart-price">
                             ${product.qty * product.price}
                        </p>
                        <div className='cart-control'>
                            <button className="cart-btn" onClick={()=>handleDel(product)}>
                                <i class='bx bx-minus'></i>
                            </button>
                            <button className='cart-product-qty'>{product.qty}</button>
                            <button className="cart-btn" onClick={()=> handleAdd(product)}>
                                <i class='bx bx-plus'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )

    }

    const buttons = () => {
        return(
            <>
                <div className="payment-wrapper">
                        <div className='payment-bill'>

                        </div>
                        <NavLink to="/home" className="payment-btn">
                            Thanh toán
                        </NavLink>
                </div>
            </>
        )
    }

    return (
        <div className='cart-wrapper'>
            {state.length === 0 && emptyCart()}
            <div className='cart-item'>
                {state.length !== 0 && state.map(cartItems)}
            </div>
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;
