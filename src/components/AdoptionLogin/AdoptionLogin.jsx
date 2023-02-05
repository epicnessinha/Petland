import React, { useState } from "react"
import { loginUser } from "../../services/apiCalls"
import { useNavigate } from "react-router-dom"
import "./AdoptionLogin.css"

const AdoptionLogin = () => {
  // state for email and password
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = { email, password }
      const response = await loginUser(user)
      if (response) {
        setIsAuth(true)
        localStorage.setItem("user", JSON.stringify(response))
        window.location.href = "/adopt"
        setIsAuth(true)
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
      {isAuth ? <Navigate to="/adopt" /> : null}
      <div
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <form
          className="form"
          onSubmit={handleSubmit}
          style={{ width: "25%", padding: "10px", border: "1px solid gray" }}
        >
          <label style={{ display: "block" }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", marginTop: "10px", padding: "5px" }}
            />
          </label>
          <br />
          <label style={{ display: "block" }}>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", marginTop: "10px", padding: "5px" }}
            />
          </label>
          <br />
          {error && <p>{error}</p>}
          <input
            type="submit"
            value="Login"
            style={{ width: "90px", marginTop: "10px", padding: "5px" }}
          />
        </form>
      </div>
      <div style={{ marginTop: "20px" }}>
        <p>Don't have an account? </p>
        <a href="" onClick={() => navigate("/register")}>
          Register
        </a>
      </div>
    </>
  )
}

export default AdoptionLogin
