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

//"LoginContext" is a global state that can be shared across multiple components in a React application.
//The data stored in the context is mutable,
//which means it can be updated at any time by the component that uses the context.
