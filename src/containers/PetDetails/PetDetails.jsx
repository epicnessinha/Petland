import React, { useState, useEffect } from "react"
import "./PetDetails.css"

function PetDetails() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("your json api url")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
  }, [])

  return (
    <div className="image-container">
      {data.map((item) => (
        <img
          src={item.imageUrl}
          style={{ width: "100%", height: "auto" }}
          key={item.id}
          alt={item.name}
        />
      ))}
    </div>
  )
}

export default PetDetails
