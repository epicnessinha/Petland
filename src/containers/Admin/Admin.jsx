import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAllForms, getAllUsers, getAllPets } from "../../services/apiCalls"
import "./Admin.css"
import { AuthContext } from "../../providers/AuthProvider" //modificar nos providers e alterar aqui
//Fazer alterações nos formulários de adopção e pensar como vou gerir isso

const Admin = () => {
  const [users, setUsers] = useState([])
  const [pets, setPets] = useState([])
  const [forms, setForms] = useState([])
  const { admin } = useContext(AuthContext)
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

  return (
    <div className="adminDesign">
      Admin
      <div>LIST OF USERS:</div>
      {users.map((user) => {
        return (
          <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.isAdmin}</div>
            <br></br>
          </div>
        )
      })}
      <div>LIST OF PETS:</div>
      {pets.map((pet) => {
        return (
          <div>
            <div>{pet.name}</div>
            <br></br>
          </div>
        )
      })}
      <div>LIST OF ADOPTION FORMS:</div>
      {forms.map((form) => {
        if (form.adoptionRequest === true)
          return (
            <div>
              <div>{form.user}</div>
              <div>{form.createdAt}</div>
              <div>{form.body}</div>
              <br></br>
            </div>
          )
      })}
    </div>
  )
}

export default Admin
