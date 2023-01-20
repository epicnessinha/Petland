import React, { useState } from "react"
import { loginUser } from "../../services/apiCalls"
//para redireccionar para o profile
import { Navigate } from "react-router-dom"

//fazer componentes deste código se tiver tempo

const Login = () => {
  // state for email and password
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isAuth, setIsAuth] = useState(false)

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const user = { email, password }
      const response = await loginUser(user)
      if (response) {
        setIsAuth(true)
        // if successful, save the token to localStorage and redirect to the protected page
        localStorage.setItem("user", JSON.stringify(response))
        window.location.href = "/profile"
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
      {isAuth ? <Navigate to="/profile" /> : null}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <p>{error}</p>}
        <input type="submit" value="Login" />
      </form>
    </>
  )
}

export default Login
