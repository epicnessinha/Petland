import React, { useState, useEffect } from "react"
import axios from "axios"

const Admin = () => {
  const [pets, setPets] = useState([])
  const [users, setUsers] = useState([])
  const [forms, setForms] = useState([])
  const [newPet, setNewPet] = useState({ name: "", type: "" })

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/pets")
      setPets(result.data)
    }

    const fetchUsers = async () => {
      const result = await axios.get("http://localhost:3000/users")
      setUsers(result.data)
    }

    const fetchForms = async () => {
      const result = await axios.get("http://localhost:3000/forms")
      setForms(result.data)
    }

    fetchData()
    fetchUsers()
    fetchForms()
  }, [])

  const handlePetDelete = async (id) => {
    await axios.delete(`http://localhost:3000/pets/${id}`)
    setPets(pets.filter((pet) => pet.id !== id))
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
    <div>
      <h4>Pets</h4>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name} - {pet.type}
            <button onClick={() => handlePetDelete(pet.id)}>Delete</button>
          </li>
        ))}
      </ul>
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
      <h4>Users</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      <h4>Forms</h4>
      <ul>
        {forms.map((form) => (
          <li key={form.id}>{form.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Admin
