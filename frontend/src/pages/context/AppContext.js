import { createContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import axios from 'axios';
export const ShopContext = createContext(null);



export const ShopContextProvider = (props) => {
    const [showCart, setShowCart] = useState(false);
    const [qty, setQty] = useState(1);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let foundProduct;
    let index;

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    const AddToCart = (product, qty) => {
        // useEffect(() => {
        //   // Define the URL of your Flask backend endpoint
        //   const apiUrl = `http://localhost:5000/cart/${product.id}`;
      
        //   // Fetch the product data from the Flask backend
        //   axios.post(apiUrl, {
        //     productId: product.id,
        //     quantity: qty
        //   })
        //     .then((response) => {
        //       // Handle the response as needed
        //       console.log('Product added to cart:', response.data);
        //     })
        //     .catch((error) => {
        //       console.error('Error adding product to cart:', error);
        //     });
        // }, [product.id, qty]);
        const apiUrl = `http://localhost:5000/cart/${product.id}`;
        axios.post(apiUrl, {
          productId: product.id,
          quantity: qty
        })
          .then((response) => {
            // Handle the response as needed
            console.log('Product added to cart:', response.data);
          })
          .catch((error) => {
            console.error('Error adding product to cart:', error);
          });

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * qty);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + qty);
        setCartItems([ ...cartItems, { ...product }]);
        toast.success(`${qty} ${product.name} added to the cart.`);
      };


    const onRemove = (product) => {
      const foundProduct = cartItems.find((item) => item.id === product.id);
      const newCartItems = cartItems.filter((item) => item.id !== product.id);
  
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * qty);
      setTotalQuantities(prevTotalQuantities => prevTotalQuantities - qty);
      setCartItems(newCartItems);
    }

    const toggleCartItemQuanitity = (id, value) => {
      foundProduct = cartItems.find((item) => item.id === id)
      index = cartItems.findIndex((product) => product.id === id);
      const newCartItems = cartItems.filter((item) => item.id !== id)
  
      if(value === 'inc') {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
      } else if(value === 'dec') {
        if (foundProduct.quantity > 1) {
          setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
        }
      }
    }

  const login = () => {
    // Implement your login logic here
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  

  const contextValue = {
    qty,
    incQty,
    decQty,
    showCart,
    setShowCart,
    cartItems,
    setCartItems,
    totalPrice,
    setTotalPrice,
    totalQuantities,
    setTotalQuantities,
    AddToCart,
    onRemove,
    toggleCartItemQuanitity,
    isLoggedIn,
    login, 
    logout
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};