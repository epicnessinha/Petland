import axios from "axios"

const PET_API = "http://localhost:5000/"

const headers = {
  "Content-Type": "text/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
}

//PETS

export const getAllPets = async () => {
  return await axios.get(`${PET_API}pets`, { headers: { headers } })
}

export const getPetById = async (pet) => {
  return await axios.get(`${PET_API}pets/${pet.id}`)
}

export const registerNewPet = async (pet) => {
  return await axios.post(`${PET_API}pets`, pet)
}

export const deletePet = async (pet) => {
  console.log("Adopted!", pet)
  return await axios.delete(`${PET_API}pets/${pet.id}`)
}

//USERS

export const getAllUsers = async () => {
  return await axios.get(`${PET_API}users`)
}
export const getUsersProfile = async (userId) => {
  return await axios.get(`${PET_API}users/${userId}`)
}
export const updateUserProfile = async (userId) => {
  return await axios.patch(`${PET_API}users/${userId}`)
}
export const registerUser = async (user) => {
  return await axios.post(`${PET_API}users`, user)
}
export const checkEmail = async (email) => {
  let response = await axios.get(`${PET_API}users?email_like=${email}`)
  if (response.data.length === 0) return true
  else return false
}
export const loginUser = async (user) => {
  let response = await axios.get(`${PET_API}users?email_like=${user.email}`)
  if (response.data.length === 0) return false
  else if (user.password === response.data[0].password) return response.data
  else return false
}

//ADOPTION FORMS

export const newAdoptionForm = async (form) => {
  return await axios.post(`${PET_API}forms`, form)
}

export const getAllForms = async () => {
  return await axios.get(`${PET_API}forms`)
}

export const getFormById = async (form) => {
  return await axios.get(`${PET_API}forms/${form.id}`)
}

export const deleteAdoptionForm = async (form) => {
  return await axios.delete(`${PET_API}forms/${form.id}`)
}
