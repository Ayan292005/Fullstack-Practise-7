import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
let dbUrl = "http://localhost:1010/music"
import { FaHeart } from "react-icons/fa";
import { favoritesContext } from '../../context/favoriteContext';

function Guests() {
  let [data, setData] = useState([])
  let {favorites, setFavorites}=useContext(favoritesContext)

  function getData() {
    axios.get(dbUrl)
      .then(res => {
        setData(res.data)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  function handleAddFavorite(product) {
    let findFavorite=favorites.find(favorite=>favorite._id==product._id)
    if (findFavorite) {
      alert("you already add this item")
    } else {
      setFavorites([...favorites,product])
    }
  }

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <div>
        <h2 className='guest-title'>Featured Guests</h2>
      </div>


      <div className="cards container">
        {
          data && data.map(product => (
            <div key={product._id} className='card'>
              <div className="guest-img">
                <img src={product.image} alt={product.name} />
              </div>
              <p style={{fontSize:"1.2rem"}}>{product.name}</p>
              <p>{product.desc}</p>
              <p style={{cursor:"pointer"}} onClick={() => handleAddFavorite(product)}><FaHeart /></p>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Guests
