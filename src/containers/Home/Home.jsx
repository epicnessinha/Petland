import Search from "../../components/Search/Search"
import PetDetails from "../PetDetails/PetDetails"
import "./Home.css"

const Home = () => {
  return (
    <>
      <Search />
      <h1 className="welcome-title">Petland</h1>
      <h4>Where our furry friends can find their forever home</h4>
      <PetDetails />
      <h3></h3>
    </>
  )
}

export default Home
