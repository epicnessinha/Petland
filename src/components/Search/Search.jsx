import "./Search.css"
import React, { useEffect, useState } from "react"
import PetDetails from "../../containers/PetDetails/PetDetails"

const Search = () => {
  const [pets, setPets] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [selected, setSelected] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./db.json")
      const data = await response.json()
      if (data.pets) {
        setPets(data.pets)
      }
    }
    fetchData()
  }, [])

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const selectPet = (pet) => {
    setSelected(pet)
  }

  return (
    <>
      <div className="searchBar">
        <input
          className="searchInput"
          type="text"
          name="input"
          id="input"
          title="input"
          placeholder="Search for your new best friend!"
          onChange={(e) => {
            searchInputHandler(e)
          }}
        ></input>
      </div>
      <div className="searchResults">
        {pets.map((item) => {
          return (
            <div className="petCard" key={item.id}>
              <div onClick={() => selectPet(item)}>
                <img className="petImage" src={item.url} alt={item.type} />
              </div>
              <div>{item.name}</div>
              <div>{item.breed}</div>
              <div>{item.age}</div>
              <div>{item.type}</div>
            </div>
          )
        })}
      </div>
      {/* <div className="searchrightside">
        {selected?.id !== undefined && <PetDetails pet={selected} />}
      </div> */}
    </>
  )
}

const Details = ({ pet }) => {
  return (
    <div className="selectedPetContainer">
      <img src={pet.url} alt={pet.name} />
      <div className="petName">{pet.name}</div>
      <div className="petBreed">{pet.breed}</div>
      <div className="petAge">{pet.age}</div>
      <div className="petType">{pet.type}</div>
      <div className="petDescription">{pet.description}</div>
    </div>
  )
}

export default Search
