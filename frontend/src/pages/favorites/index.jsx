import React, { useContext } from 'react'
import { favoritesContext } from '../../context/favoriteContext'
import { FaHeart } from "react-icons/fa";


function Favorites() {
  let { favorites, setFavorites } = useContext(favoritesContext)

  function handleDeleteFavorite(id) {
    let deleteFavorite = favorites.filter(favorite => favorite._id !== id)
    setFavorites(deleteFavorite)
  }
  return (
    <div style={{ paddingTop: "150px", backgroundColor: "#f8f9fa" }}>
      <div className="container">

        {
          favorites.length == 0 ? (
            <h2 style={{ textAlign: "center" }}>Your Favorites List is Empty</h2>
          ) : (
            <>
              <h1 style={{ textAlign: "center" }}>Your Favorites List</h1>
              
                    <div className="cards container">
                      {
                      favorites.map(favorite => (
                          <div key={favorite._id} className='card'>
                            <div className="guest-img">
                              <img src={favorite.image} alt={favorite.name} />
                            </div>
                            <p style={{fontSize:"1.2rem"}}>{favorite.name}</p>
                            <p>{favorite.desc}</p>
                            <p style={{cursor:"pointer"}} onClick={()=>handleDeleteFavorite(favorite._id)}><FaHeart /></p>
                          </div>
                        ))
                      }
                    </div>
              
            </>
          )
        }

      </div>
    </div>



  )
}

export default Favorites
