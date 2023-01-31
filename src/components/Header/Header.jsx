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
          <button className="teste" onClick={() => navigate("/admin")}>
            teste
          </button>
          <NavLink className="nav-link" to="/login">
            Login/ Profile
          </NavLink>
          <NavLink className="nav-link" to="/admin">
            Admin
          </NavLink>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Register
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
