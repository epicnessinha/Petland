import React, { useState } from "react"
import "./Register.css"
import { registerNewUser } from "../../services/apiCalls"
import { validateForm } from "../../services/validate"
import { checkEmail } from "../../services/apiCalls"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
    password: "",
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
      registerNewUser(user)
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
      <input
        className="myInput"
        type="phone"
        name="phone"
        id="phone"
        title="phone"
        placeholder="Contact:"
        autoComplete="off"
        onChange={(e) => {
          handleData(e)
        }}
      />
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
          Register
        </div>
      </div>
      <div>{error === "no error" ? null : error}</div>
    </div>
  )
}

export default Register

/*const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    isAdmin: "false",
  })

  const [userError, setUserError] = useState({
    const navigate = useNavigate()
    /*nameError: "",
    emailError: "",
    phoneError: "",
    passwordError: "",
    password2Error: "",
  

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      }
    })
  }

  const errorHandler = (event) => {
    const { name, value } = event.target
    let error = ""
    error = errorValidate(name, value)

    if (event.target.name === "password2") {
      if (user.password !== user.password2) {
        error = "Write the same password"
      }
    }

    setUserError((prevValue) => {
      return {
        ...prevValue,
        [name + "Error"]: error,
      }
    })
  }

  return (
    <div className="registerPage">
      <><h1>Register</h1><div className="logoRegister">
        { <img className ="logoDesign" src={} alt={} /> }
      </div><div className="registerInputs">
          <input
            className={userError.nameError === "" ? "inputNormal" : "inputNormal inputError"}
            placeholder="Full name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={errorHandler} />
          <div className="errorMessage"> {userError.nameError}</div>
          <input
            className={userError.emailError === "" ? "inputNormal" : "inputNormal inputError"}
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={errorHandler} />
          <div className="errorMessage"> {userError.emailError}</div>
          <input
            className={userError.phoneError === "" ? "inputNormal" : "inputNormal inputError"}
            placeholder="Phone number"
            type="text"
            name="phone"
            onChange={handleChange}
            onBlur={errorHandler} />
          <div className="errorMessage"> {userError.phoneError}</div>
          <input
            className={userError.passwordError === "" ? "inputNormal" : "inputNormal inputError"}
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={errorHandler} />
          <div className="errorMessage"> {userError.passwordError}</div>
          <input
            className={userError.password2Error === ""
              ? "inputNormal"
              : "inputNormal inputError"}
            placeholder="Repeat password"
            type="password"
            name="password2"
            onChange={handleChange}
            onBlur={errorHandler} />
          <div className="errorMessage"> {userError.password2Error}</div>

          <div className="registerButton">Register</div>
        </div></>
    </div>
  )
}

export default Register*/
