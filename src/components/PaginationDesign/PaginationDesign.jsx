import React, { useState, useEffect } from "react"
import { Pagination } from "antd"
import axios from "axios"

const petsPerPage = 1

const PaginationDesign = () => {
  const [pets, setPets] = useState([])
  const [current, setCurrent] = useState(1)
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/pets")
      setPets(result.data)
    }
    fetchData()
  }, [])

  const totalPages = Math.ceil(pets.length / petsPerPage)
  const onChange = (page) => {
    setCurrent(page)
  }
  const petsToShow = pets.slice((current - 1) * petsPerPage, current * petsPerPage)
  return (
    <div>
      {petsToShow.map((item) => (
        <div key={item.id}>
          <img src={item.url} alt={item.name} />
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

export default PaginationDesign
