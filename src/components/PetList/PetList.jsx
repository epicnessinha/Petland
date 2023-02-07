import React, { useState, useEffect } from "react"
import { Pagination } from "antd"
import { getAllPets } from "../../services/apiCalls"
import "./PetList.css"
import List from "./List"

const NotFound = () => <p> No Pets Found. </p>

const PetList = () => {
  const petsPerPage = 2
  const [pets, setPets] = useState([])
  const [current, setCurrent] = useState(1)
  const [search, setSearch] = useState("")

  useEffect(() => {
    getPets()
  }, [])

  const getPets = async () => {
    const response = await getAllPets()
    setPets(response.data)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.type.toLowerCase().includes(search.toLowerCase()) ||
      pet.breed.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPets.length)
  const onChange = (page) => {
    setCurrent(page)
  }

  const petsToShow = filteredPets.slice(
    (current - 1) * petsPerPage,
    current * petsPerPage
  )
  return (
    <>
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search for your new best friend!"
          onChange={handleSearch}
        />
        {filteredPets.length === 0 ? (
          <NotFound />
        ) : (
          petsToShow.map((pet) => (
            <div key={pet.id}>
              <List pet={pet} />
            </div>
          ))
        )}
      </div>
      <br />
      <Pagination
        current={current}
        onChange={onChange}
        total={totalPages}
        pageSize={petsPerPage}
      />
    </>
  )
}

export default PetList
