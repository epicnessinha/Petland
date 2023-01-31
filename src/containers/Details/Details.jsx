import React from "react"
import "./Details.css"
import { useNavigate } from "react-router"

const Details = () => {
  let navigate = useNavigate()
  return (
    <div className="headerPage">
      <div
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("/")
          }, 250)
        }
      >
        Home
      </div>
      <div
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("/login")
          }, 250)
        }
      >
        Login
      </div>
      <div
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("/admin")
          }, 250)
        }
      >
        Admin
      </div>

      <div
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("./register")
          }, 250)
        }
      >
        Register
      </div>
      <div
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("./adoptlogin")
          }, 250)
        }
      >
        Adoption
      </div>
    </div>
  )
}

export default Details
