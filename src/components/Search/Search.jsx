import React, { useState } from "react"

const Search = (props) => {
  const [search, setSearch] = useState("")

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  return (
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
          ) => (
            <>
              <div key={item.id}>
                <img className="img" src={item.url} alt={item.name} />
                <h2 className="name">{item.name}</h2>
                <p>{item.breed}</p>
                <p>{item.age}</p>
                <p>{item.description}</p>
              </div>
            </>
          )
        )
      )}
    </div>
  )
}

export default Search
