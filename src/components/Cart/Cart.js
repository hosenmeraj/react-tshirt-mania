import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveToCart }) => {


    //conditional formating 4 type
    //1 element variable declar
    //ternary oparator
    //&& oparator
    // || oparator
    let commad = 0;
    if (cart.length === 0) {
        commad = <p>please add atleast one item</p>
    }
    else if (cart.length === 1) {
        commad = <p>please add more item....</p>
    }
    else {
        commad = <p>Thanks for adding item</p>
    }
    return (
        <div>
            <h2>Selected item: {cart.length}</h2>

            {
                cart.map(tShirt => <p>{tShirt.name}
                    <button onClick={() => handleRemoveToCart(tShirt)}>X</button>
                </p>)
            }

            {commad}
            {cart.length === 0 || <div className='added'><p>Ya ho</p></div>}
            {cart.length === 3 && <div className='added'><p>three product added</p></div>}
            {cart.length !== 4 ? <p>keep adding</p> : <button>Remove all</button>}

        </div>
    );
};

export default Cart;