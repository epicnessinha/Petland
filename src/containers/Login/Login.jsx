import React, { useState } from "react"
import { loginUser } from "../../services/apiCalls"
import { useNavigate, Navigate } from "react-router-dom"
import { useLogin } from "../../providers/LoginContext"
import "./Login.css"

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
        {isAuth ? (
          isAdmin ? (
            <Navigate to="/admin" />
          ) : (
            <Navigate to="/profile" />
          )
        ) : null}
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          {error && <p className="form-error">{error}</p>}
          <input
            type="submit"
            value="Login"
            onSubmit={handleSubmit}
            className="btn btn-primary"
          />
        </form>
        <div className="form-footer">
          <p>Don't have an account? </p>
        </div>
        <div>
          <a href="" onClick={() => navigate("/register")}>
            Register
          </a>
        </div>
      </>
    </>
  )
}

export default Login
