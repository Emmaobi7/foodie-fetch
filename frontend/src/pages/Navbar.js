import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="navbar-container">
        <p>
            <Link href="/">Foodie-fetch</Link>
        </p>
        <button type="button"
        className="cart-icon" onclick="">
            <AiOutlineShopping />
            <span className="cart-item-qty">1</span>
        </button>

    </div>
  )
}

export default Navbar;