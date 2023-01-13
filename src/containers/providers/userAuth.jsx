import { createContext, useState } from "react"

export const LoginContext = createContext()

export function LoginProvider(props) {
  const [user, setUser] = useState(null)
  const [admin, setAdmin] = useState(null)

  const addUserToContext = (user) => {
    if (user !== null) {
      setUser(user)
    }
  }

  const removeUserFromContext = () => {
    setUser(null)
  }

  const addAdminToContext = (admin) => {
    if (admin !== null) {
      setAdmin(admin)
    }
  }

  const removeAdminFromContext = () => {
    setAdmin(null)
  }

  return (
    <LoginContext.Provider
      value={{
        user,
        addUserToContext,
        removeUserFromContext,
        admin,
        addAdminToContext,
        removeAdminFromContext,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  )
}
