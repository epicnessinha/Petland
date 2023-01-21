import React, { useState, useEffect } from "react"
import "./PetDetails.css"
import { getAllPets } from "../../services/apiCalls"
import Search from "../../components/Search/Search"
import PaginationDesign from "../../components/PaginationDesign/PaginationDesign"
import AdoptionForm from "../../components/AdoptionForm/AdoptionForm"

function PetDetails() {
  const [pets, setPets] = useState([])

  /* useEffect(() => {
    async function fecthData() {
      let response = await getAllPets()
      console.log("response", response)
      setPets(response.data)
    }
    fecthData()
  }, []) */

  return (
    <>
      <div className="image-container">
        {pets.map((item) => (
          <div key={item.id}>
            <img
              src={item.url}
              style={{ width: "25%", height: "auto" }}
              alt={item.name}
            />
            <h4>{item.name}</h4>
            <p>Breed: {item.breed}</p>
            <p>Age: {item.age}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <PaginationDesign />
    </>
  )
}

export default PetDetails
