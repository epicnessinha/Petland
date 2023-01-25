import React, { useState } from "react"
import "./PetDetails.css"
import PaginationDesign from "../../components/PaginationDesign/PaginationDesign"
import PetCard from "../../components/PetCard/PetCard"
import { getAllPets } from "../../services/apiCalls"
import { useEffect } from "react"

function PetDetails() {
  const [pets, setPets] = useState([])
  // const {id, name, breed, age, description} = props.item posso fazer isto em outro sítios, verificar

  const getPetList = async () => {
    let response = await getAllPets()
    setPets(response.data)
  }

  useEffect(() => {
    getPetList()
  }, [])
  return (
    <>
      <PaginationDesign />
    </>
  )
}

export default PetDetails
