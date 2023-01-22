import React, { useContext, useState, useEffect } from "react"
import axios from "axios"
import "./Profile.css"
import { AuthContext } from "../../providers/AuthProvider"
import { loginUser } from "../../services/apiCalls"
import { useNavigate } from "react-router-dom"
import { Avatar, Image } from "antd"
import { UserOutlined } from "@ant-design/icons"

const Profile = () => {
  const [name, setName] = useState([])
  const [editing, setEditing] = useState(false)
  const [editingName, setEditingName] = useState("")
  const [error, setError] = useState(null)
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    loginUser()
  }, [])

  useEffect(() => {
    if (!user) navigate("/")
  })

  useEffect(() => {
    // Fetch the user data from the database
    axios
      .get(`http://localhost:5000/users/${props.id}`) //userDATA
      .then((response) => {
        setUser(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleEdit = () => {
    setEditing(true)
  }

  const handleCancel = () => {
    setEditing(false)
  }

  const handleSave = (event) => {
    event.preventDefault()
    setEditing(false)
    // Update the user data in the database
    axios
      .put(`http://localhost:5000/users/${props.id}`, user)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <></>
      <Avatar
        src={
          <Image
            src="https://avatars.githubusercontent.com/u/99542868?v=4" //tem de ir ao objeto users e ir buscar o campo imagem.
            style={{
              width: 32,
            }}
          />
        }
      />
      <div>
        <h1>{user.name}</h1>
        <p>Name: {user.name}</p>
      </div>
      {!editing && (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <button onClick={handleEdit}>Edit Profile</button>
        </div>
      )}
      {editing && (
        <form onSubmit={handleSave}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Profile Picture:
            <input type="file" name="profile_picture" onChange={handleChange} />
          </label>
          <input type="submit" value="Save Changes" />
          <button onClick={handleCancel}>Cancel</button>
        </form>
      )}
    </>
  )
}

export default Profile
