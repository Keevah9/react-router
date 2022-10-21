import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="border-2">
      <ul className="flex border-2 w-full">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar