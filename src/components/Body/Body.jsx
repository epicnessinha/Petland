import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../../containers/Home/Home"
import Register from "../../containers/Register/Register"
import Profile from "../../containers/Profile/Profile"
import PetDetails from "../PetList/PetList"
import Admin from "../../containers/Admin/Admin"
import "./Body.css"
import AdoptionForm from "../AdoptionForm/AdoptionForm"
import AdoptionLogin from "../AdoptionLogin/AdoptionLogin"
import PetCard from "../PetCard/PetCard"

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petdetails" element={<PetDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adopt" element={<AdoptionForm />} />
        <Route path="/adoptlogin" element={<AdoptionLogin />} />
        <Route path="/petcard" element={<PetCard />} />
      </Routes>
    </>
  )
}

export default Body
