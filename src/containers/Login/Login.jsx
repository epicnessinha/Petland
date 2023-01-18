import React, { useState } from "react"
import axios from "axios"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: {
          email,
          password,
        },
      })
      const user = response.data.users.find(
        (user) => user.email === email && user.password === password
      )
      if (user) {
        // set user as logged in and redirect to profile
        console.log("user logged in")
      } else {
        setError("Invalid email or password")
      }
    } catch (err) {
      setError("An error occurred")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="current-email"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  )
}

export default Login
