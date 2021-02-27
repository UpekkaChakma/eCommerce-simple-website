import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price,0);
    const tax = Math.round(total / 10);
    let shipping = 0;
    if (total >= 35) {
        shipping = 0;        
    }else if (total >= 15 && total < 35) {
        shipping = 4.99;
    } else if (total >0 && total < 15) {
        shipping = 12.99;
    }
    const grandTotal = Math.round(total + shipping + tax);
    return (
        <div>
            <h4>Order summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {total}</p>
            <p>shipping cost: {shipping}</p>
            <p>Tax + VAT: {tax}</p>
            <p>Total price: {grandTotal}</p>
        </div>
    );
};

export default Cart;