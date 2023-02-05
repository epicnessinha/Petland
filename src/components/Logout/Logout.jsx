import React from "react"
import { useNavigate } from "react-router-dom"

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Clear the user data from local storage
    localStorage.removeItem("user")
    // Navigate back to the login page
    navigate("/login")
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
