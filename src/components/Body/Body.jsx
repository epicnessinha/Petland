import React, { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../containers/Home/Home"
import Login from "../containers/Login/Login"
import Register from "../containers/Register/Register"
import Search from "../containers/Search/Search"
import Carousel from "../Carousel/Carousel"

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Carousel" element={<Carousel />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  )
}

export default Body
