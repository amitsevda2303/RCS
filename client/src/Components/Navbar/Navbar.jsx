import React from 'react'
import { Link } from 'react-router-dom'
import css from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={css.navContainer}>
      <Link to={"/"} className={css.logo} >RCS</Link>
      <div className={css.navLinks}>
        <Link to={"/cart"}>CART</Link>
        <li>SUPPORT</li>
        <Link to={"/shop"}>SHOP</Link>
        <li>TRACK YOUR ORDER</li>
        <li>LOGIN/CREATE ACCOUNT</li>
      </div>
    </div>
  )
}

export default Navbar
