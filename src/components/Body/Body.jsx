import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../../containers/Home/Home"
import Login from "../../containers/Login/Login"
import Register from "../../containers/Register/Register"
import Profile from "../../containers/Profile/Profile"
import PetDetails from "../../containers/PetDetails/PetDetails"
import Admin from "../../containers/Admin/Admin"
import "./Body.css"

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petdetails" element={<PetDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default Body
