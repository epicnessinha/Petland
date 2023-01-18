import React, { useState, useEffect } from "react"
import "./PetDetails.css"
import { getAllPets } from "../../services/apiCalls"

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
  )
}

export default PetDetails

/*const [data, setData] = useState([])

  useEffect(() => {
    fetch("your json api url")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
  }, [])*/
