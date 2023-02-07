import React from "react"
import "./Body.css"
import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Register from "../Register/Register"
import Profile from "../Profile/Profile"
import Admin from "../Admin/Admin"
import Form from "../../components/Form/Form"
import AdoptionLogin from "../../components/AdoptionLogin/AdoptionLogin"
import PetCard from "../../components/PetCard/PetCard"
import PetList from "../../components/PetList/PetList"
import Login from "../Login/Login"
import Footer from "../../components/Footer/Footer"
import Details from "../Details/Details"
import List from "../../components/List/List"

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petlist" element={<PetList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adopt" element={<Form />} />
        <Route path="/adoptlogin" element={<AdoptionLogin />} />
        <Route path="/petcard" element={<PetCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="footer" element={<Footer />} />
        <Route path="details" element={<Details />} />
        <Route path="list" element={<List />} />
      </Routes>
    </>
  )
}

export default Body
