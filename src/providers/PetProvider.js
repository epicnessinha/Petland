import React, { useState, useContext, createContext } from "react"

const petContext = createContext()
const petChangeContext = createContext()

export const usePetContext = () => {
  return useContext(petContext)
}

export const usePetChangeContext = () => {
  return useContext(petChangeContext)
}

export const PetProvider = (props) => {
  const [pet, setPet] = useState(null)

  const petChange = (selected) => {
    setPet(selected)
  }

  return (
    <petContext.Provider value={pet}>
      <petChangeContext.Provider value={petChange}>
        {props.children}
      </petChangeContext.Provider>
    </petContext.Provider>
  )
}
