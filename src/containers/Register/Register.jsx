import React, { useState } from "react"
import { checkEmail } from "../../services/apiCalls"
import { registerUser } from "../../services/apiCalls"
import { useNavigate } from "react-router-dom"
import { validateForm } from "../../services/validate"
import { Form, Button, Alert } from "react-bootstrap"
import "./Register.css"
import styles from "./Register.css"

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
    try {
      if ((await checkEmail(user.email)) === false) {
        setError("This E-mail is already registered")
      } else {
        const validationError = validateForm(user)
        if (validationError === "no error") {
          await registerUser(user)
          navigate("/login")
        } else {
          setError(validationError)
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again later.")
    }
  }

  //alterar este design
  return (
    <div className={styles["register-container"]}>
      <Form>
        <h4 className="mb-3">Registration Form</h4>
        {error && (
          <Alert variant="danger" onClose={() => setError("")} dismissible>
            {error}
          </Alert>
        )}
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleData}
            value={user.name}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleData}
            value={user.email}
          />
        </Form.Group>
        <Form.Group controlId="formAddress">
          <Form.Label>Address:</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter your address"
            onChange={handleData}
            value={user.address}
          />
        </Form.Group>
        <Form.Group controlId="formContact">
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            type="phone"
            name="contact"
            placeholder="Enter your phone number"
            onChange={handleData}
            value={user.contact}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleData}
            value={user.password}
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Button
            className="buttonRegister"
            variant="info"
            onClick={() => register(user)}
          >
            Create Account
          </Button>
          <div className="text-muted mt-3">
            <Form.Text>
              Already have an account?{" "}
              <a href="" onClick={() => navigate("/login")}>
                Sign In
              </a>
            </Form.Text>
          </div>
        </Form.Group>
      </Form>
    </div>
  )
}

export default Register
