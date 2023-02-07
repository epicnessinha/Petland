import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import React from "react"
import { useNavigate } from "react-router-dom"

const PetCard = ({ cardTitle, description, buttonText, linkText }) => {
  const navigate = useNavigate()
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="info" onClick={() => navigate("/adoptlogin")}>
          {buttonText} Adopt me!
        </Button>
      </Card.Body>
      <Card.Link href="https://www.adopta-me.org/animal.php?sid=44306642216a49">
        {linkText}
        Shelter
      </Card.Link>
    </Card>
  )
}

export default PetCard
