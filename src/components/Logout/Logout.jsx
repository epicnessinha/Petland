import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "react-bootstrap"

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <div>
      <Button variant="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  )
}

export default Logout
