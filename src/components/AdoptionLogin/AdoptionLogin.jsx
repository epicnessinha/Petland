import React, { useState } from "react"
import { loginUser } from "../../services/apiCalls"
import { Navigate } from "react-router-dom"

//fazer componentes deste código se tiver tempo

const AdoptionLogin = () => {
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
      <div className="flex justify-center ">
        <p className="text-gray-500">Don't have an acount? </p>
        <a
          href=""
          className="text-sky-600 pl-2"
          onClick={() => <Navigate to="/register" />}
        >
          {" "}
          Register
        </a>
      </div>
    </>
  )
}

export default AdoptionLogin
