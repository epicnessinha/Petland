import React, { useState, useEffect } from "react"
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
import PetList from "../../components/PetList/PetList"
import NewPetForm from "../../components/NewPetForm/NewPetForm"
import UserList from "../../components/UserList/UserList"
import AdoptionFormList from "../../components/AdoptionForm/AdoptionForm"

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
    const response = await registerNewPet(newPet)
    setPets([...pets, response.data])
  }

  const handlePetChange = (e) => {
    setNewPet({ ...newPet, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div>
        <h4 className="custom-title" data-testid="logged-in-title">
          Hello Admin
        </h4>
        <div className="logout-container">
          <Logout />
        </div>
      </div>
      <PetList pets={pets} handlePetDelete={handlePetDelete} />
      <NewPetForm
        newPet={newPet}
        handlePetInsert={handlePetInsert}
        handlePetChange={handlePetChange}
      />
      <div className="adminDesign">
        <UserList users={users} handleUserDelete={handleUserDelete} />
        <AdoptionFormList forms={forms} handleFormDelete={handleFormDelete} />
      </div>
    </>
  )
}

export default Admin
