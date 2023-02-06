import React, { useState } from "react"
import "./Register.css"
import { checkEmail } from "../../services/apiCalls"
import { registerUser } from "../../services/apiCalls"
import { useNavigate } from "react-router-dom"
import { validateForm } from "../../services/validate"

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

  //alterar este design
  return (
    <form>
      <h4>Registration Form</h4>
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          onChange={handleData}
          value={user.name}
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleData}
          value={user.email}
        />
      </div>
      <div>
        <label for="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Enter your address"
          onChange={handleData}
          value={user.address}
        />
      </div>
      <div>
        <label for="contact">Phone:</label>
        <input
          type="phone"
          id="contact"
          name="contact"
          placeholder="Enter your phone number"
          onChange={handleData}
          value={user.contact}
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleData}
          value={user.password}
        />
      </div>
      <button
        className="buttonRegister"
        type="button"
        onClick={() => register(user)}
      >
        Create Account
      </button>
      <p>
        Already have an account?{" "}
        <a href="" onClick={() => navigate("/login")}>
          Sign In
        </a>
      </p>
    </form>
  )
}
export default Register
