import React from "react"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const navigate = useNavigate()

  const renderButtons = () => {
    if (localStorage.token) {
      return (
        <>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          {/* <NavLink className="nav-link" to="/Profile">Profile</NavLink>    */}
        </>
      )
    } else {
      return (
        //alterar para butons com handle?
        //fazer os redirects
        <>
          <NavLink className="nav-link" to="/">
            Profile
          </NavLink>
          <button className="teste" onClick={() => navigate("/register")}>
            TESTE
          </button>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Sign Up
          </NavLink>
          <NavLink className="nav-link" to="/adoptlogin">
            Adopt Me!
          </NavLink>
        </>
      )
    }
  }
  return (
    <div className="App">
      <header className="header">
        <br></br>
        <h1>Petland</h1>
        <h4 style={{ color: "white", fontWeight: "bold" }}>
          Where our furry friends can find their forever home
        </h4>
        <div className="clear"></div>
        <div className="nav-bar">{renderButtons()}</div>
      </header>
    </div>
  )
}

export default Header

/*import React, { useContext } from "react"
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
        Sign In / Register
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

export default Header*/
