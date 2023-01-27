import React, { useState } from "react"

const Search = (props) => {
  const [search, setSearch] = useState("")

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search for your new best friend!"
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search
