import React, { useContext, useState, useEffect } from "react"
import "./Admin.css"
import {
  getAllForms,
  getAllUsers,
  getAllPets,
  deletePet,
  registerNewPet,
  deleteUser,
  deleteAdoptionForm,
} from "../../services/apiCalls"
import Logout from "../../components/Logout/Logout"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Card } from "react-bootstrap"

const Admin = () => {
  const [pets, setPets] = useState([])
  const [users, setUsers] = useState([])
  const [forms, setForms] = useState([])
  const [newPet, setNewPet] = useState({ name: "", type: "" })

  const getUsersList = async () => {
    let response = await getAllUsers()
    setUsers(response.data)
  }
  const getPetsList = async () => {
    let response = await getAllPets()
    setPets(response.data)
  }

  const getFormsList = async () => {
    let response = await getAllForms()
    setForms(response.data)
  }

  useEffect(() => {
    getUsersList()
    getPetsList()
    getFormsList()
  }, [])

  //alterar as chamadas
  const handlePetDelete = async (petId) => {
    console.log(petId)
    const response = await deletePet({ id: petId })
    setPets(pets.filter((pet) => pet.id !== petId))
  }

  const handleUserDelete = async (userId) => {
    console.log(userId)
    await deleteUser({ id: userId })
    setUsers(users.filter((user) => user.id !== userId))
  }
  const handleFormDelete = async (formId) => {
    console.log(formId)
    await deleteAdoptionForm({ id: formId })
    setForms(forms.filter((form) => form.id !== formId))
  }

  const handlePetInsert = async (e) => {
    e.preventDefault()
    const response = await registerNewPet({ pet: newPet })
    setPets([...pets, response.data])
  }
  const handlePetChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value })
  }

  return (
    <>
      <>
        <div>
          <h4 class="custom-title" data-testid="logged-in-title">
            Hello Admin
          </h4>
          <div class="logout-container">
            <Logout />
          </div>
          <h4 class="pet-header">Pets for Adoption</h4>
          <div class="pet-list">
            {pets.map((pet) => (
              <div class="pet-card" key={pet.id}>
                <img className="pet-image" src={pet.url} alt="" />
                <p>{pet.name}</p>
                <p>{pet.type}</p>
                <div class="pet-buttons">
                  <button onClick={() => handlePetDelete(pet.id)}>Adopted</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 class="new-header">Add New Pets</h4>
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
      </>
      <div className="adminDesign">
        <div>
          <h4 className="users-header">List of Users</h4>
          <div className="user-list">
            {users.map((user) => (
              <Card key={user.id} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={user.photo} />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.email}</Card.Text>
                  <Button onClick={() => handleUserDelete(user.id)} variant="info">
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div>
            <h4 className="forms-header">List of Adoption Forms</h4>
          </div>
          {forms.map((form) => {
            return (
              <div>
                <div>Pet Id: {form.petId}</div>
                <div>Adopter's Name: {form.name}</div>
                <div>Email: {form.email}</div>
                <div>Contact: {form.contact}</div>
                <div>The Adopter have another pets?: {form.anotherPets}</div>
                <div>
                  Adopter's plan in case he/she needs to travel:{" "}
                  {form.travelSituation}
                </div>
                <div>Commits to put a microchip: {form.microchip}</div>
                <button onClick={() => handleFormDelete(form.id)}>
                  Adoption Approved
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Admin
