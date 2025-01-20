import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { FaHeart } from "react-icons/fa";
import { favoritesContext } from '../../context/favoriteContext';

function Navbar() {
  let { favorites } = useContext(favoritesContext)
  return (
    <div>
      <div className="navbar">
        <div className='container nav'>
          <h1><a href="" className='logo'>Podca</a></h1>
          <div className="links">
            <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "black" : "white" })}>Home</NavLink>
            <NavLink to="/guests" style={({ isActive }) => ({ color: isActive ? "black" : "white" })}>Guests</NavLink>
            <NavLink to="/add" style={({ isActive }) => ({ color: isActive ? "black" : "white" })}>AddGuests</NavLink>
            <NavLink to="favorites"  style={({ isActive }) => ({ color: isActive ? "black" : "white" })}><FaHeart /><span>{favorites.length}</span></NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
