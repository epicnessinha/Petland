import "./PetCard.css"
import React from "react"
import { Card } from "antd"

const PetCard = (props) => {
  console.log("POPS", props.pets)
  const { id, url, name, breed, age, description } = props.pets

  return (
    <div className="wrapper">
      <Card hoverable cover={<img alt={name} src={url} className="test" />}>
        <div>
          <div key={id}>
            <h4>{name}</h4>
            <p>Breed: {breed}</p>
            <p>Age: {age}</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default PetCard
