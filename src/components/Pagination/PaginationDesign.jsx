import { Pagination } from "antd"
import { getAllPets } from "../../services/apiCalls"
import { useState } from "react"
import { useEffect } from "react"

const PaginationDesign = () => {
  const petsPerPage = 1
  const [pets, setPets] = useState([])
  const [current, setCurrent] = useState(1)

  const getPets = async () => {
    const response = await getAllPets()
    setPets(response.data)
  }

  useEffect(() => {
    getPets
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

export default PaginationDesign
