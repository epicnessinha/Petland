import "./App.css"
import Body from "./components/Body/Body"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  )
}

export default App

/*function App() {
  const title = "Petland"
  const intro = "Where our furry friends can find their forever home"
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>
          <h4>{intro}</h4>
        </p>
        <a href="https://petify.io/profiles/view/ama">
          <h5>AMA Shelter</h5>
        </a>
        <p>
          <h3>Still a Draft</h3>
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
