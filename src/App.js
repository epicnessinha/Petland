import logo from "./logo.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Footer from "./components/Footer/Footer"
import Home from "./containers/Home/Home"
import Search from "./containers/Search/Search"
import Searchbox from "./components/Searchbox/Searchbox"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Searchbox />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
