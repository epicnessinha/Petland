import React, { useState, useEffect } from "react"
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

export default Profile
