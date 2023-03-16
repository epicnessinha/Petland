import React from "react"

const PetList = ({ pets, handlePetDelete }) => {
  return (
    <div>
      <h4 className="pet-header">Pets for Adoption</h4>
      <div className="pet-list">
        {pets.map((pet) => (
          <div className="pet-card" key={pet.id}>
            <img className="pet-image" src={pet.url} alt="" />
            <p>{pet.name}</p>
            <p>{pet.type}</p>
            <div className="pet-buttons">
              <button onClick={() => handlePetDelete(pet.id)}>Adopted</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PetList
