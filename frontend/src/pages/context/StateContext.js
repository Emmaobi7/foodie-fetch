import React, { createContext, useContext, useState,
 useEffect } from 'react';
// import { toast } from 'react-hot-toast';


export const Context = createContext(null);

// const getDefaultCart = () => {
//     let cart = {};
//     for (let i = 1; i < 35; i++) {
//       cart[i] = 0;
//     }
//     return cart;
//   };

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    // const [cartItems, setCartItems] = useState([1, 2, 3]);
    // const [totalPrice, setTotalPrice] = useState(0);
    // const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);


    // const onAdd = (product, quantity) => {
        
    //     const checkProductInCart = cartItems.find((item) => item.id === product.id);

    //     setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    //     setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

       
    //     // if (checkProductInCart) {
    //     //     setCartItems([product, quantity]);
    //     // }
    //     setCartItems([product, quantity]);

    //     toast.success(`${qty} ${product.name} added to the cart.`);
    // }


    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    const contextValue = {
        // setCartItems,
        showCart,
        setShowCart,
        // cartItems,
        // totalPrice,
        // totalQuantities,
        qty,
        incQty,
        decQty,
    }
    return (
        <Context.Provider
           value={contextValue}
        >
            {children}
        </Context.Provider>
    );
};



export const useStateContext = () => useContext(Context);