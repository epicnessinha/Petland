import logo from "./logo.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Body from "./components/Body"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PetCard from "./components/PetCard"
import Search from "./components/Search"
import { Pagination } from "react-bootstrap"
import { Carousel } from "react-bootstrap"

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
