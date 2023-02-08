import React, { useState, useEffect } from "react"
import { Pagination } from "antd"
import { getAllPets } from "../../services/apiCalls"
import "./PetList.css"
import List from "../List/List"

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
      <div className="pet-list">
        <input
          className="search"
          style={{
            width: "50em",
            height: "3em",
            margin: "30px",
            backgroundColor: "rgb(245, 213, 230)",
            borderRadius: "50px",
            color: "rgb(14, 14, 15)",
            fontSize: "larger",
            fontWeight: "bold",
            transition: "0.4s ease-out",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "2.5em auto 1.5em",
            boxShadow: "0px 0px 8px 3px #eb8ae3",
            textAlign: "center",
          }}
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
