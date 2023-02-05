import "./Home.css"
import PetList from "../../components/PetList/PetList"
import { getAllPets } from "../../services/apiCalls"
import { Footer } from "antd/es/layout/layout"

const Home = () => {
  return (
    <>
      <PetList />
    </>
  )
}

export default Home
