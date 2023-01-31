import React, { useEffect, useState } from "react"
import { Pagination } from "antd"
import { getAllPets } from "../../services/apiCalls"

function PetDetails() {
  const petsPerPage = 2
  const [pets, setPets] = useState([])
  const [current, setCurrent] = useState(1)

  const getPetsList = async () => {
    const response = await getAllPets()
    setPets(response.data)
  }

  useEffect(() => {
    getPetsList
  }, [])

  const totalPages = Math.ceil(pets.length / petsPerPage)
  const onChange = (page) => {
    setCurrent(page)
  }
  const petsToShow = pets.slice((current - 1) * petsPerPage, current * petsPerPage)
  useEffect(() => {
    getPetsList
  }, [])
  return (
    <div>
      {petsToShow.map((item) => (
        <div key={item.id}>
          <img scr={item.url} alt={item.name} />
          <h2>{item.name}</h2>
          <p>{item.breed}</p>
          <p>{item.age}</p>
          <p>{item.description}</p>
        </div>
      ))}
      <Pagination
        current={current}
        onChange={onChange}
        total={totalPages}
        pageSize={petsPerPage}
      />
    </div>
  )
}

export default PetDetails
