import "./App.css"
import Body from "./containers/Body/Body"
import Header from "./components/Header/Header"
import { LoginProvider } from "./providers/LoginContext"
import React from "react"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <LoginProvider>
      <div className="App">
        <Header />
        <Body />
        <Footer
          footerCopy={"Adota-me Shelter"}
          footerlink={"https://www.adopta-me.org/index.php?&row=0"}
        />
      </div>
    </LoginProvider>
  )
}

export default App
