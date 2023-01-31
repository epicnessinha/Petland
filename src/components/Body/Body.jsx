import React from "react"
import "./Body.css"
import { Route, Routes } from "react-router-dom"
import Home from "../../containers/Home/Home"
import Register from "../../containers/Register/Register"
import Profile from "../../containers/Profile/Profile"
import Admin from "../../containers/Admin/Admin"
import Form from "../Form/Form"
import AdoptionLogin from "../AdoptionLogin/AdoptionLogin"
import PetCard from "../PetCard/PetCard"
import PetList from "../PetList/PetList"
import Search from "../Search/Search"

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
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default Body
