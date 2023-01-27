import "./Search.css"
import React, { useEffect, useState } from "react"
import PetList from "../../components/PetList/PetList"

const Search = () => {
  const [pets, setPets] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [selected, setSelected] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/pets")
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
          type="input"
          name="input"
          id="input"
          title="input"
          placeholder="NOT WORKING!"
          onChange={(e) => {
            searchInputHandler(e)
          }}
        ></input>
      </div>
      <div className="searchResults">
        {pets.map((pet) => {
          return (
            <div className="petCard" key={pet.id}>
              <div onClick={() => selectPet(pet)}>
                <img className="petImage" src={pet.url} alt={pet.type} />
              </div>
              <div>{item.name}</div>
              <div>{item.breed}</div>
              <div>{item.age}</div>
              <div>{item.type}</div>
            </div>
          )
        })}
      </div>
      {
        <div className="searchrightside">
          {selected?.id !== undefined && <PetList pet={selected} />}
        </div>
      }
    </>
  )
}

export default Search
