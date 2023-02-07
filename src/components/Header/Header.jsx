import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

const Header = () => {
  const renderButtons = () => {
    if (localStorage.token) {
      return (
        <>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </>
      )
    } else {
      return (
        <>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink data-testid="login-tab" className="nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/register">
            Register
          </NavLink>
          <NavLink className="nav-link" to="/adoptlogin">
            Adoption
          </NavLink>
        </>
      )
    }
  }
  return (
    <div className="App">
      <header className="header">
        <br></br>
        <div className="petland">
          <p>Petland</p>
        </div>
        <h4 data-testid="description" style={{ color: "white", fontWeight: "bold" }}>
          Where our furry friends can find their forever home
        </h4>
        <div className="clear"></div>
        <div className="nav-bar">{renderButtons()}</div>
      </header>
    </div>
  )
}

export default Header
