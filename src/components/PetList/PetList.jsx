import React, { useState } from "react"
import "./PetList.css"
import PaginationDesign from "../PaginationDesign/PaginationDesign"
import { getAllPets } from "../../services/apiCalls"
import { useEffect } from "react"

function PetList() {
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

export default PetList
