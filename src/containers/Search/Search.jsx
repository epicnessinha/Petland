import "./Search.css"
import React, { useEffect, useState } from "react"
import Moviedetails from "../../Components/Moviedetails/Moviedetails"
import { getSearchedMovies } from "../../services/apicalls"

const Search = () => {
  const [movies, setMovies] = useState([])
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
      let response = await getSearchedMovies(searchInput)
      let results = response.data.results
      setMovies(results)
    }
    fecthData()
  }, [searchInput])

  const selectMovie = (movie) => {
    setSelected(movie)
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
            placeholder="Search for an awesome movie here!"
            onChange={(e) => {
              searchInputHandler(e)
            }}
          ></input>
        </div>
        <div className="searchResults">
          {movies.map((movie) => {
            return (
              <div className="movieCard" key={movie.id}>
                <div onClick={() => selectMovie(movie)}>
                  <img
                    className="movieSmallImage"
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
                <div>{movie.title}</div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="searchrightside">
        {selected?.id !== undefined && <Moviedetails movie={selected} />}
      </div>
    </div>
  )
}

export default Search
