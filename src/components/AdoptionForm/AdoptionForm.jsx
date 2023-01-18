import React, { useState } from "react"

function AdoptionForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  //inserir restantes campos e validações

  const validateEmail = (email) => {
    if (!email.includes("@")) {
      setEmailError("Invalid email address")
      return false
    }
    setEmailError("")
    return true
  }

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters")
      return false
    }
    setPasswordError("")
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validateEmail(email) && validatePassword(password)) {
      // submit the form
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            validateEmail(e.target.value)
          }}
        />
        {emailError && <span style={{ color: "red" }}>{emailError}</span>}
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            validatePassword(e.target.value)
          }}
        />
        {passwordError && <span style={{ color: "red" }}>{passwordError}</span>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AdoptionForm
