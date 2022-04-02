import React, { useState } from 'react';
import useTShirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, SetTShirt] = useTShirt()
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItem) => {
        const exist = cart.find(tShirt => tShirt._id === selectedItem._id)
        if (!exist) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else {
            alert('already exist')
        }

    }

    const handleRemoveToCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id)
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt} handleAddToCart={handleAddToCart}></TShirt>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart} handleRemoveToCart={handleRemoveToCart}></Cart>
            </div>
        </div>
    );
};

export default Home;