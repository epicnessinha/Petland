import React, { useState } from "react"
import { loginUser } from "../../services/apiCalls"
import { useNavigate, Navigate } from "react-router-dom"
import { useLogin } from "../../providers/LoginContext"
import { Button } from "react-bootstrap"
import { Form } from "react-bootstrap"

const Login = () => {
  // state for email and password
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isAuth, setIsAuth] = useState(false)
  const { setUserData } = useLogin()
  const [isAdmin, setIsAdmin] = useState(false)
  const navigate = useNavigate()

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = { email, password }
      const response = await loginUser(user)
      if (response) {
        setIsAuth(true)
        setUserData(response[0])
        // Check the role of the user
        if (response[0].isAdmin === "true") {
          setIsAdmin(true)
        }
        // if successful, save the token to localStorage
        localStorage.setItem("user", JSON.stringify(response))
      } else {
        setError("Invalid email or password.")
      }
    } catch (err) {
      console.error(err)
      setError("An error occurred. Please try again later.")
    }
  }
  return (
    <>
      <>
        <>
          {isAuth ? (
            isAdmin ? (
              <Navigate to="/admin" />
            ) : (
              <Navigate to="/profile" />
            )
          ) : null}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Form
              className="form"
              onSubmit={handleSubmit}
              style={{ width: "25%", padding: "10px" }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  className="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  data-testid="email-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  data-testid="password-input"
                />
              </Form.Group>
              {error && <p className="text-danger">{error}</p>}
              <div className="d-flex justify-content-center">
                <Button
                  data-testid="login-submit-btn"
                  variant="info"
                  style={{ width: "85px" }}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </Form>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>Don't have an account? </p>
            <a href="" onClick={() => navigate("/register")}>
              Register
            </a>
          </div>
        </>
      </>
    </>
  )
}

export default Login
