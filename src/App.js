import "./App.css"
import Body from "./components/Body/Body"
import Header from "./components/Header/Header"
import { LoginProvider } from "./providers/LoginContext"
import React from "react"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <LoginProvider />
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
      <LoginProvider />
    </>
  )
}

export default App
