import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import  Cart  from './Cart';
// import { useStateContext } from './context/StateContext';
import { ShopContext } from "./context/AppContext";


const Navbar = () => {
  // const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { showCart, totalQuantities, setShowCart } = useContext(ShopContext);

  return (
    <div className="navbar-container">
        <p>
            <Link href="/">Foodie-fetch</Link>
        </p>
        <button type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
            {/* <AiOutlineShopping /> */}
            <ShoppingCart />
            <span className="cart-item-qty">
              {totalQuantities}
            </span>
        </button>

        {showCart && <Cart />}
    </div>
  )
}

export default Navbar;