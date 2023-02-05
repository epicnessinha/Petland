import React, { useContext, useState, useEffect } from "react"
import axios from "axios"
import { AuthContext } from "../../providers/AuthProvider"
import { useNavigate } from "react-router-dom"
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
import PetCard from "../../components/PetCard/PetCard"

const Admin = () => {
  const [pets, setPets] = useState([])
  const [users, setUsers] = useState([])
  const [forms, setForms] = useState([])
  const [newPet, setNewPet] = useState({ name: "", type: "" })
  const { admin } = useContext(AuthContext) //remover se não utilizar
  const navigate = useNavigate()

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
    setUsers(forms.filter((form) => form.id !== formId))
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
      <div>
        <h2>Hello Admin</h2>
        <Logout />
        <br />
        <h4>Pets for Adoption</h4>
        <ul>
          {pets.map((pet) => (
            <div key={pet.id}>
              <br />
              <img className="profile" src={pet.url} alt="" />
              <br />
              <br />
              <p>{pet.name}</p>
              <p>{pet.type}</p>
              <button onClick={() => handlePetDelete(pet.id)}>Adopted</button>
            </div>
          ))}
        </ul>
        <br></br>
        <br></br>
        <form onSubmit={handlePetInsert}>
          <input
            type="text"
            name="name"
            placeholder="Pet name"
            value={newPet.name}
            onChange={handlePetChange}
          />
          <input
            type="text"
            name="type"
            placeholder="type"
            value={newPet.type}
            onChange={handlePetChange}
          />
          <input
            type="text"
            name="breed"
            placeholder="Breed"
            value={newPet.breed}
            onChange={handlePetChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={newPet.age}
            onChange={handlePetChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newPet.description}
            onChange={handlePetChange}
          />
          <button type="submit">Add pet</button>
        </form>
      </div>
      <div className="adminDesign">
        <div>
          <br></br>
          <br></br>
          <h4>List of Users</h4>
        </div>
        {users.map((user) => (
          <div key={user.id}>
            <br />
            <img className="profile" src={user.photo} alt="Profile picture" />
            <br />
            <br />
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button onClick={() => handleUserDelete(user.id)}>Delete</button>
          </div>
        ))}
        <br />
        <br />
        <div>
          <h4>List of Adoption Forms</h4>
        </div>
        {forms.map((form) => {
          return (
            <div>
              <div>Adopter's Name: {form.name}</div>
              <div>Pet Id: {form.petId}</div>
              <button onClick={() => handleFormDelete(form.id)}>
                Adoption Approved
              </button>
              <br></br>
              <br></br>
              <br></br>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Admin
