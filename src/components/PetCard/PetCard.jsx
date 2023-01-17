import React from "react"
import Button from "react-bootstrap/Button"

import "./PetCard.css"

const PetCard = ({ movie }) => {
  return (
    <div className="PetInfoDesign">
      <h3>{movie.name}</h3>
      <div className="PetPhoto">
        <img
          src={`https://image.tmdb.org/t/p/original${pet.poster_path}`}
          alt={pet.name}
          width="375"
          height="560"
        />
      </div>
    </div>
  )
}

export default PetCard
