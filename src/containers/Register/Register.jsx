import React, { useState } from "react"
import "./Register.css"
import { checkEmail } from "../../services/apiCalls"
import { registerUser } from "../../services/apiCalls"
import { useNavigate } from "react-router-dom"
import { validateForm } from "../../services/validate"

//fazer componentes deste código se tiver tempo

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    contact: "",
    isAdmin: "false",
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleData = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const register = async (user) => {
    let validationError
    if ((await checkEmail(user.email)) === false) {
      validationError = "This E-mail is already registered"
    } else {
      validationError = validateForm(user)
    }
    setError(validationError)
    if (error === "no error") {
      registerUser(user)
      navigate("/login")
    }
  }

  return (
    <div className="registerDesign">
      <input
        className="myInput"
        type="text"
        name="name"
        id="name"
        title="name"
        placeholder="Name:"
        autoComplete="off"
        onChange={(e) => {
          handleData(e)
        }}
      />
      <br></br>
      <input
        className="myInput"
        type="email"
        name="email"
        id="email"
        title="email"
        placeholder="E-mail:"
        autoComplete="off"
        onChange={(e) => {
          handleData(e)
        }}
      />
      <br></br>
      <input
        className="myInput"
        type="contact"
        name="contact"
        id="contac"
        title="contact"
        placeholder="Contact:"
        autoComplete="off"
        onChange={(e) => {
          handleData(e)
        }}
      />
      <br></br>
      <input
        className="myInput"
        type="address"
        name="address"
        id="address"
        title="address"
        placeholder="Address:"
        autoComplete="off"
        onChange={(e) => {
          handleData(e)
        }}
      />
      <br></br>
      <input
        className="myInput"
        type="password"
        name="password"
        id="password"
        title="password"
        placeholder="Password:"
        autoComplete="off"
        onChange={(e) => {
          handleData(e)
        }}
      />
      <div className="bottomSection">
        <div
          className="designRegisterButton"
          onClick={() => {
            register(user)
          }}
        >
          <button type="register">Register</button>
        </div>
      </div>
      <div>{error === "no error" ? null : error}</div>
    </div>
  )
}

export default Register
