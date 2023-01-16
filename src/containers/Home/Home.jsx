import React, { useEffect, useState } from "react"
import { getAllPets } from "../../services/apicalls"
import "./Home.css"

const Home = () => {
  const [pets, setPets] = useState([])
  const [selected, setSelected] = useState("")

  useEffect(() => {
    async function fecthData() {
      let response = await getAllPets()
      setPets(response.data.results)
    }
    fecthData()
  }, [])

  /* const selectPet = (pet) => {
    setSelected(pet)
  }

  if (pets.length > 0) {
    return (
      <div className="homePage">
        <div className="leftSide">
          {pets.map((pet) => {
            return (
              <div className="petCard" key={pet.id}>
                <div onClick={() => selectMovie(pet)}>
                  <img
                    className="petImage"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={pet.title}
                  />
                </div>
                <div>{pet.title}</div>
              </div>
            )
          })}
        </div>
        <div className="rightSide">
          {selected?.id !== undefined && <PetCard pet={selected} />}
        </div>
      </div>
    )
  } else {
    return <div className="homeLoadingDesign">Loading...</div>
  }*/
}

export default Home
