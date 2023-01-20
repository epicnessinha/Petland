import React, { useState, useEffect } from "react"
import axios from "axios"
import { UserOutlined } from "@ant-design/icons"
import { Avatar, Image } from "antd"

const EditProfile = (props) => {
  const [user, setUser] = useState({})
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    // Fetch the user data from the database
    axios
      .get(`http://localhost:5000/users/${props.id}`)
      .then((response) => {
        setUser(response.data)
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
            src="https://avatars.githubusercontent.com/u/99542868?v=4"
            style={{
              width: 32,
            }}
          />
        }
      />
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

export default EditProfile

/* import React, { useState, useEffect } from "react"
import axios from "axios"
import "./Profile.css"

function Profile() {
  const [user, setUser] = useState({})
  const [name, setName] = useState("")
  const [profilePicture, setProfilePicture] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/users", {
        params: {
          id: 1,
        },
      })
      setUser(response.data)
    }
    fetchData()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put("http://localhost:5000/users", {
        id: 1,
        name,
        profilePicture,
      })
      setUser({ ...user, name, profilePicture })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="profile">
      <h2>My Profile</h2>
      <img src={user.profilePicture} alt="Profile" />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Profile Picture:
          <input
            type="file"
            onChange={(e) => setProfilePicture(e.target.files[0])}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}

export default Profile */
