import Search from "../Details/Details"
import "./Home.css"
import PetList from "../../components/PetList/PetList"
import { Pagination } from "antd"
import PaginationDesign from "../../components/Pagination/PaginationDesign"

const Home = () => {
  return (
    <>
      <Search />
      <PetList />
      <Pagination>
        <PaginationDesign />
      </Pagination>
    </>
  )
}

export default Home
