import React from "react"
import PetCard from "../../components/PetCard/PetCard"

const Details = () => {
  return (
    <div>
      <PetCard
        cardTitle="Title"
        description={"description"}
        buttonText={"Adopt Me!"}
        linkText={"Shelter"}
      />
    </div>
  )
}

export default Details
