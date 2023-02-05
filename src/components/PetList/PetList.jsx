import React, { useState, useEffect } from "react"
import axios from "axios"
import "./PetList.css"
import { Pagination } from "antd"
import { useNavigate } from "react-router-dom"

const PetList = () => {
  const petsPerPage = 2
  const [pets, setPets] = useState([])
  const [current, setCurrent] = useState(1)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/pets")
      setPets(result.data)
    }
    fetchData()
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const filteredPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.type.toLowerCase().includes(search.toLowerCase()) ||
      pet.breed.toLowerCase().includes(search.toLowerCase()) ||
      pet.age.toString().includes(search)
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
          <p> No pets found. </p>
        ) : (
          petsToShow.map((pet) => (
            <>
              <br />
              <br />
              <div key={pet.id}>
                <img
                  className="img"
                  src={pet.url}
                  alt={pet.name}
                  onClick={() => navigate("/details")}
                />
                <div class="container">
                  <h2 className="name">{pet.name}</h2>
                </div>
                <div class="container">
                  <button className="button" onClick={() => navigate("/adoptlogin")}>
                    Adopt Me!
                  </button>
                </div>
              </div>
            </>
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
