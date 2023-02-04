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
} from "../../services/apiCalls"

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

  const handlePetInsert = async (e) => {
    e.preventDefault()
    const result = await axios.post("http://localhost:3000/pets", newPet)
    setPets([...pets, result.data])
  }

  const handlePetChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div>
        <h4>Pets</h4>
        <ul>
          {pets.map((pet) => (
            <div key={pet.id}>
              {pet.name} - {pet.type}
              <br />
              <button onClick={() => handlePetDelete(pet.id)}>Delete</button>
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
            placeholder="Pet type"
            value={newPet.type}
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
        {users.map((user) => {
          //inserir key
          return (
            <div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.isAdmin}</div>
              <br></br>
            </div>
          )
        })}
        <div>
          <h4>List of Pets</h4>
        </div>
        {pets.map((pet) => {
          return (
            <div>
              <div>{pet.name}</div>
              <br></br>
            </div>
          )
        })}
        <div>
          <h4>List of Adoption Forms</h4>
        </div>
        {forms.map((form) => {
          return (
            <div>
              <div>Name: {form.name}</div>
              <div>Pet ID: {form.petId}</div>
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
