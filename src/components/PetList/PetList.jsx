import React, { useState, useEffect } from "react"
import axios from "axios"
import "./PetList.css"
import { Pagination } from "antd"
import { getAllPets } from "../../services/apiCalls"
import Footer from "../Footer/Footer"
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

  const totalPages = Math.ceil(pets.length)
  const onChange = (page) => {
    setCurrent(page)
  }

  const filteredPets = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.type.toLowerCase().includes(search.toLowerCase()) ||
      pet.breed.toLowerCase().includes(search.toLowerCase()) ||
      pet.age.toString().includes(search)
  )

  const petsToShow = filteredPets.slice(
    //colocar console.log e checar
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
          filteredPets.map(
            (
              item //quero que quando clique na imagem, apareçam os detalhes
            ) => <></>
          )
        )}
      </div>
      <br />
      <div>
        {petsToShow.map((item) => (
          <>
            <div key={item.id}>
              <img className="img" src={item.url} alt={item.name} />
              <h2 className="name">{item.name}</h2>
              <p className="details">{item.breed}</p>
              <p className="details">{item.age}</p>
              <p className="description">{item.description}</p>
              <button className="teste" onClick={() => navigate("/adoptlogin")}>
                Adopt Me!
              </button>
            </div>
            <br />
          </>
        ))}
        <Pagination
          current={current}
          onChange={onChange}
          total={totalPages}
          pageSize={petsPerPage}
        />
        <br />
        <Footer />
      </div>
    </>
  )
}

export default PetList
