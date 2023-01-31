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

//criar semelhante para os PETS, sempre que carrego a aplicação, faço uma chamada e comunico com este contexto
//e digo que estes são todos os animais e envio para aqui e dps spr que preciso deles venho aqui buscar ao context (posso usar um hook tb para  vir buscar os animais que preciso, ou a lista de animais)
/* return (
  <LoginContext.Provider value={{ allPets, setAllPets }}>
  {children}
</LoginContext.Provider>
)
} */
