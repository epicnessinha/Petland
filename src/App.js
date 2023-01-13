import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import NavbarHeader from "./components/Navbar/NavbarHeader"
//fazer alterações no content, separar tudo e colocar no css?, somente testes.
function App() {
  const title = "Petland"
  const intro = "Where our furry friends can find their forever home"
  return (
    <div className="App">
      <NavbarHeader />
      <div className="content">
        <h1>{title}</h1>
        <p>
          <h4>{intro}</h4>
        </p>
        <a href="https://petify.io/profiles/view/ama">
          <h5>AMA Shelter</h5>
        </a>
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
