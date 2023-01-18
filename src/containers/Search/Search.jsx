import React, { useState, useEffect } from "react"

const Search = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredData, setFilteredData] = useState([])

  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => setData(data.pets))
  }, [])

  useEffect(() => {
    setFilteredData(
      data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm, data])

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Search

/* import "./Search.css"
import React, { useEffect, useState } from "react"

const Search = () => {
  const [pets, setPets] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [selected, setSelected] = useState("")

  const searchInputHandler = (e) => {
    setSearchInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  useEffect(() => {
    const fecthData = async () => {
      let response = await getSearchedPets(searchInput)
      let results = response.data.results
      setPets(results)
    }
    fecthData()
  }, [searchInput])

  const selectPet = (pet) => {
    setSelected(pet)
  }

  return (
    <div className="searchPage">
      <div className="searchleftside">
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
                  <img className="petImage" src={``} alt={item.title} />
                </div>
                <div>{item.title}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="searchrightside">
        {selected?.id !== undefined && <Details pet={selected} />}
      </div>
    </div>
  )
}

export default Search */
