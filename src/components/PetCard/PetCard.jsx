import "./PetCard.css"
import React from "react"

const PetCard = ({ pet }) => {
  return (
    <div className="petInfoDesign">
      <h3>{pet.name}</h3>
      <div className="petPoster">
        <img
          src={`http://localhost:5000/pets/${pet.id}`}
          alt={pet.name}
          width="375"
          height="560"
        />
      </div>
      <div className="age">
        <div>Age: {pet.age}</div>
      </div>
      <div className="description">{pet.description}</div>
    </div>
  )
}

export default PetCard
