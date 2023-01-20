import CarouselDesign from "../../components/CarouselDesign/CarouselDesign"
import "./Home.css"

const Home = () => {
  return (
    <div className="welcomeDesign">
      <div className="background-image"></div>
      <div className="Text-Wrapper">
        <div className="left-text">
          <h1 className="welcome-title">Petland</h1>
          <h4>Where our furry friends can find their forever home</h4>
        </div>
        <div className="right-text">
          <h3></h3>
        </div>
      </div>
    </div>
  )
}

export default Home

/* const [pets, setPets] = useState([])

  useEffect(() => {
    async function fecthData() {
      let response = await getAllPets()
      console.log("responde", response)
      setPets(response.data)
    }
    fecthData()
  }, []) */
