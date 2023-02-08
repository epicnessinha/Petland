import React from "react"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import "./PetCard.css"

const PetCard = (props) => {
  const navigate = useNavigate()
  const { url, id, name, gender, breed, description } = props.pet
  //destructures the pet information from the props object and assigns each piece of information to a separate variable

  return (
    <div className="list-container">
      <Card
        style={{
          width: "20rem",
          backgroundColor: "rgb(245, 213, 230)",
          borderRadius: "30px",
          boxShadow: "0px 0px 8px 3px #eb8ae3",
        }}
      >
        <Card.Img variant="top" src={url} alt={name} />
        <Card.Body>
          <Card.Title style={{ fontFamily: "impact", fontSize: "30px" }}>
            {name}
          </Card.Title>
          <Card.Title style={{ fontSize: "13px" }}>Pet ID: {id}</Card.Title>
          <Card.Title style={{ fontSize: "15px" }}>{gender}</Card.Title>
          <Card.Title style={{ fontStyle: "italic" }}>{breed}</Card.Title>
          <Card.Title style={{ fontSize: "18px", textAlign: "justify" }}>
            {description}
          </Card.Title>
          <Button variant="danger" onClick={() => navigate("/adoptlogin")}>
            Adopt Me!
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default PetCard
