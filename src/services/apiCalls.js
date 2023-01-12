import axios from "axios"
import { json } from "react-router-dom"

var root = "http://localhost:3000/" //colocar link da API

export const bringPets = async () => {
  //terei de usar esta constante em outro lado, nome poderá ser alterado
  let config = {
    method: "get",
    url: `${root}/`,
  }

  return await axios(config)
}

export const pushPets = async (pet) => {
  //terei de usar esta constante em outro lado, nome poderá ser alterado
  const jsonData = {
    title: pet.title,
    description: pet.description,
    categoryId: pet.categoryId,
    images: pet.images, //tenho de escolher que tópicos quero mostrar sobre os pets, pode depender da API
  }

  let config = {
    method: "post",
    url: `${root}`,
    body: JSON.stringify(jsonData),
  }

  return await axios(config)
}

export const getDetails = async (id) => {
  return await axios.get(`link${id}`) //link da API relacionado
}

export const getImages = async ([images]) => {
  return await axios.get(`link${images}`) //link da API relacionado
}

//Outra forma de fazer a chamada a API, verificar se é melhor esta ou a anterior.

const API_BASE_URL = "http://localhost:3000/"

export const getPets = async () => {
  return await axios.get(`${API_BASE_URL}pets`)
}

export const registerNewUser = async (user) => {
  return await axios.post(`${API_BASE_URL}users`, user)
}

export const checkEmail = async (email) => {
  let response = await axios.get(`${API_BASE_URL}users?email_like=${email}`)
  if (response.data.length === 0) return true
  else return false
}
