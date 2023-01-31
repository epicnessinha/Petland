import React, { useState, useEffect } from "react"
import "./Profile.css"
import { useLogin } from "../../providers/LoginContext"
import { getUsersProfile, updateUserProfile } from "../../services/apiCalls"

const Profile = (props) => {
  const [user, setUser] = useState([])
  const [editing, setEditing] = useState(false)

  const { userData } = useLogin()
  console.log("USER DATA", userData)

  const getUserInfo = async () => {
    let response = await getUsersProfile(userData.id)
    setUser(response.data)
  }

  const updateUserInfo = async () => {
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
    setEditing(false)
  }

  const handleCancel = () => {
    setEditing(false)
  }

  const handleSave = (event) => {
    event.preventDefault()
    setEditing(false)
    updateUserInfo()
  }

  return (
    <>
      <></>
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
/*  <Avatar
        src={
          <Image
            src={userData.photo}
            style={{
              width: 32,
            }}
          />
        }
      /> */
