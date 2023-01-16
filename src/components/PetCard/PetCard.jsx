import React from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function PetCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="imagem da base de dados" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Adopt me!</Button>
      </Card.Body>
    </Card>
  )
}

export default PetCard

// eslint-disable-next-line prettier/prettier
/* no card.text tem de ficar a descrição que está na base de dados, na card.img também */