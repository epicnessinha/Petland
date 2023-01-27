import React, { useState } from "react"
import "./Register.css"
import { checkEmail } from "../../services/apiCalls"
import { registerUser } from "../../services/apiCalls"
import { useNavigate } from "react-router-dom"
import { validateForm } from "../../services/validate"

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    contact: "",
    isAdmin: "false",
  })
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleData = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const register = async (user) => {
    let validationError
    if ((await checkEmail(user.email)) === false) {
      validationError = "This E-mail is already registered"
    } else {
      validationError = validateForm(user)
    }
    setError(validationError)
    if (error === "no error") {
      registerUser(user)
      navigate("/login")
    }
  }

  //alterar este design
  return (
    <div className="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center">
      <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
        <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
          Registration Form
        </div>
        <div className="">
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500"
              placeholder="Name"
              name="name"
              onChange={handleData}
              value={user.name}
            />
          </div>
          <div>
            <input
              type="email"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8"
              placeholder="Email"
              name="email"
              onChange={handleData}
              value={user.email}
            />
          </div>
          <div>
            <input
              type="text"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Address"
              name="address"
              onChange={handleData}
              value={user.address}
            />
          </div>
          <div>
            <input
              type="phone"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Phone"
              name="contact"
              onChange={handleData}
              value={user.contact}
            />
          </div>
          <div className="">
            <input
              type="password"
              className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8"
              placeholder="Password"
              name="password"
              onChange={handleData}
              value={user.password}
            />
          </div>
          <div className="flex">
            <input type="checkbox" className="border-sky-400 " value="" />
            <div className="px-3 text-gray-500">I accept terms & conditions</div>
          </div>
          <div className="flex justify-center my-6">
            <button
              className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold "
              onClick={() => register(user)}
            >
              Create Account
            </button>
          </div>
          <div className="flex justify-center ">
            <p className="text-gray-500">Already have an acount? </p>
            <a
              href=""
              className="text-sky-600 pl-2"
              onClick={() => navigate("/login")}
            >
              {" "}
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
