import React, { useContext, useState } from "react"

export const LoginContext = React.createContext({})

export const useLogin = () => {
  return useContext(LoginContext)
}

export const LoginProvider = ({ children }) => {
  const [userData, setUserData] = useState({})
  console.log("USERDATA_FROM_API", userData)

  return (
    <LoginContext.Provider value={{ setUserData, userData }}>
      {children}
    </LoginContext.Provider>
  )
}
