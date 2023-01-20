import React, { useState, useEffect } from "react"
import "./PetDetails.css"
import { getAllPets } from "../../services/apiCalls"
import Search from "../../components/Search/Search"
import PaginationDesign from "../../components/PaginationDesign/PaginationDesign"
import AdoptionForm from "../../components/AdoptionForm/AdoptionForm"

function PetDetails() {
  const [pets, setPets] = useState([])

  useEffect(() => {
    async function fecthData() {
      let response = await getAllPets()
      console.log("response", response)
      setPets(response.data)
    }
    fecthData()
  }, [])

  return (
    <>
      <Search search={Search} />
      <div className="image-container">
        {pets.map((item) => (
          <img
            src={item.url}
            style={{ width: "30%", height: "auto" }}
            key={item.id}
            alt={item.name}
          />
        ))}
      </div>
      <PaginationDesign />
    </>
  )
}

export default PetDetails
