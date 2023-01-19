import React, { useContext } from "react"
import "./Header.css"
import { useNavigate } from "react-router"

const Header = () => {
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
            navigate("/PetDetails")
          }, 250)
        }
      >
        Pets for Adoption
      </div>
      <div
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("/Login")
          }, 250)
        }
      >
        Login
      </div>
      <div
        className="linkDesign"
        onClick={() =>
          setTimeout(() => {
            navigate("/profile")
          }, 250)
        }
      >
        Profile
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
    </div>
  )
}

export default Header
