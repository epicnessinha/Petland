import React from "react"
import { Form, Button } from "react-bootstrap"

const NewPetForm = ({ newPet, handlePetInsert, handlePetChange }) => {
  return (
    <div>
      <h4 className="new-header">Add New Pets</h4>
      <Form className="left-aligned-form" onSubmit={handlePetInsert}>
        <Form.Group controlId="formPetName">
          <Form.Label>Pet name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Pet name"
            value={newPet.name}
            onChange={handlePetChange}
          />
        </Form.Group>

        <Form.Group controlId="formPetType">
          <Form.Label>Pet type</Form.Label>
          <Form.Control
            type="text"
            name="type"
            placeholder="Type"
            value={newPet.type}
            onChange={handlePetChange}
          />
        </Form.Group>

        <Form.Group controlId="formPetBreed">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            type="text"
            name="breed"
            placeholder="Breed"
            value={newPet.breed}
            onChange={handlePetChange}
          />
        </Form.Group>

        <Form.Group controlId="formPetGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            name="gender"
            placeholder="Gender"
            value={newPet.gender}
            onChange={handlePetChange}
          />
        </Form.Group>

        <Form.Group controlId="formPetDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Description"
            value={newPet.description}
            onChange={handlePetChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add pet
        </Button>
      </Form>
    </div>
  )
}

export default NewPetForm
