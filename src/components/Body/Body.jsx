import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../../containers/Home/Home"
import Login from "../../containers/Login/Login"
import Register from "../../containers/Register/Register"
import Search from "../../containers/Search/Search"
import Profile from "../../containers/Profile/Profile"

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  )
}

export default Body
