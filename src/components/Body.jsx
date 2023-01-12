import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../containers/Home"
import Login from "../containers/Login"
import Profile from "../containers/Profile"
import Register from "../containers/Register"
import Search from "../components/Search"

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/details" element={<Details />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  )
}

export default Body
