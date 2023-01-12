import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavbarTest from "./components/Navbar/NavbarTest"

function App() {
  const title = "Petland"
  const intro = "Where our furry friends can find their forever home"
  return (
    <div className="App">
      <NavbarTest />
      <div className="content">
        <h1>{title}</h1>
        <p>{intro}</p>
        <a href="https://petify.io/profiles/view/ama">AMA Shelter</a>
        <p>
          <h3>Somente testes</h3>
        </p>
      </div>
    </div>
  )
}

export default App

/* <BrowserRouter>
        <Searchbox />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter> */
