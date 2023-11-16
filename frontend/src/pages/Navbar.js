import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { ShoppingCart } from "phosphor-react";
import  Cart  from './Cart';
import { ShopContext } from "./context/AppContext";


const Navbar = () => {
  // const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { showCart, totalQuantities, setShowCart } = useContext(ShopContext);

  return (
    <div className="navbar-container">
        <p>
            <Link className="home-icon" href="/">
              <RiHomeFill />
            </Link>
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