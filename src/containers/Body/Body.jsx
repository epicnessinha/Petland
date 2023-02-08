import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Register from "../Register/Register"
import Profile from "../Profile/Profile"
import Admin from "../Admin/Admin"
import Form from "../../components/Form/Form"
import AdoptionLogin from "../../components/AdoptionLogin/AdoptionLogin"
import PetList from "../../components/PetList/PetList"
import Login from "../Login/Login"
import Footer from "../../components/Footer/Footer"
import List from "../../components/List/List"
import "./Body.css"

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
        <Route path="/login" element={<Login />} />
        <Route path="footer" element={<Footer />} />
        <Route path="list" element={<List />} />
      </Routes>
    </>
  )
}

export default Body
