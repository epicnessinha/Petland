import React, { useState, useEffect } from "react"
import "./Profile.css"
import { useLogin } from "../../providers/LoginContext"
import { getUsersProfile, updateUserProfile } from "../../services/apiCalls"

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "", profile_picture: "" })
  const [editing, setEditing] = useState(false)

  const { userData } = useLogin()

  const getUserInfo = async () => {
    let response = await getUsersProfile(userData.id)
    console.log("response data", response.data)
    setUser(response.data) //
  }

  const updateUserProfile = async () => {
    let response = await updateUserProfile(userData.id)
    setUser(response.data)
  }

  useEffect(() => {
    getUserInfo()
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
    updateUserProfile()
  }

  return (
    <>
      <></>
      <div>
        <h1>
          <p className="teste">Profile</p>
        </h1>
      </div>
      {!editing && (
        <div>
          <img className="profile" src={user.photo} alt="Profile picture" />
          <p></p>
          <h4 className="teste">{user.name}</h4>
          <h4 className="teste">Email: {user.email}</h4>
          <h4 className="teste">Address: {user.address}</h4>
          <h4 className="teste">Contact: {user.contact}</h4>
          <br />
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
            <input type="url" name="profile_picture" onChange={handleChange} />
          </label>
          <button onClick={handleSave}>Save Changes</button>
          <button onClick={handleCancel}>Cancel</button>
        </form>
      )}
    </>
  )
}

export default Profile
