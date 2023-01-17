import axios from "axios"

const API_BASE_URL = "http://localhost:5000/"

//PETS

export const getAllPets = async () => {
  return await axios.get(`${API_BASE_URL}pets`)
}

export const registerNewPet = async (pet) => {
  return await axios.post(`${API_BASE_URL}pets`, pet)
}

export const deletePet = async (pet) => {
  console.log("Adopted!", pet)
  return await axios.delete(`${API_BASE_URL}pets/${pet.id}`)
}

//USERS

export const getAllUsers = async () => {
  return await axios.get(`${API_BASE_URL}users`)
}
export const registerUser = async (user) => {
  return await axios.post(`${API_BASE_URL}users`, user)
}
export const checkEmail = async (email) => {
  let response = await axios.get(`${API_BASE_URL}users?email_like=${email}`)
  if (response.data.length === 0) return true
  else return false
}
export const loginUser = async (user) => {
  let response = await axios.get(`${API_BASE_URL}users?email_like=${user.email}`)
  if (response.data.length === 0) return false
  else if (user.password === response.data[0].password) return response.data
  else return false
}

//ADOPTION FORMS

export const newAdoptionForm = async (form) => {
  return await axios.post(`${API_BASE_URL}forms`, form)
}

export const getAllForms = async () => {
  return await axios.get(`${API_BASE_URL}forms`)
}

export const deleteAdoptionForm = async (form) => {
  return await axios.delete(`${API_BASE_URL}forms/${form.id}`)
}

/* var root = "http://localhost:5000/" 

export const bringPets = async () => {  
  let config = {
    method: "get",
    url: `${root}/`,
  }

  return await axios(config)
}

export const pushPets = async (pet) => {
    title: pet.title,
    description: pet.description,
    categoryId: pet.categoryId,
    images: pet.images,

  let config = {
    method: "post",
    url: `${root}`,
    body: JSON.stringify(jsonData),
  }

  return await axios(config)
}

export const getDetails = async (id) => {
  return await axios.get(`link${id}`)
}

export const getImages = async ([images]) => {
  return await axios.get(`link${images}`) 
}*/
