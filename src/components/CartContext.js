// CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {

        // Check if the item is already in the cart
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            // Option 1: Update the quantity
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
            ));
        } else {
            // Option 2: Add new item to the cart with a quantity of 1
            setCartItems([...cartItems, { ...product, cartQuantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
            setCartItems(cartItems.map(item => 
                item.id === productId ? { ...item, cartQuantity: item.cartQuantity - 1 } : item
            ).filter(item => item.cartQuantity > 0));
        };
    
    const payNow = () =>{
        return cartItems.reduce((total, item) => total + (item.advance * item.cartQuantity), 0);
    }    

    return (
        <CartContext.Provider value={{ cartItems, addToCart , removeFromCart, payNow }}>
            {children}
        </CartContext.Provider>
    );
};
