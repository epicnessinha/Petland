import React, { useState } from "react"
import axios from "axios"

const AdoptionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    petId: "",
    anotherPets: "",
    travelSituation: "",
    microchip: false,
    responsibilityDeclaration: false,
  })
  const [formError, setFormError] = useState({})

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === "checkbox" ? event.target.checked : event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormError({})

    // Validate form
    if (!formData.name) {
      setFormError((prevState) => ({ ...prevState, name: "Name is required" }))
    }
    if (!formData.email) {
      setFormError((prevState) => ({ ...prevState, email: "Email is required" }))
    }
    if (!formData.contact) {
      setFormError((prevState) => ({ ...prevState, contact: "Contact is required" }))
    }
    if (!formData.anotherPets) {
      setFormError((prevState) => ({
        ...prevState,
        anotherPets: "A valid responde is required",
      }))
    }
    if (!formData.travelSituation) {
      setFormError((prevState) => ({
        ...prevState,
        travelSituation: "A valid responde is required",
      }))
    }
    if (!formData.microchip) {
      setFormError((prevState) => ({
        ...prevState,
        microchip: "You need to sign the responsibility declaration",
      }))
    }
    if (!formData.responsibilityDeclaration) {
      setFormError((prevState) => ({
        ...prevState,
        responsibilityDeclaration: "You need to sign the responsibility declaration",
      }))
    }
    if (Object.keys(formError).length) {
      return
    }
    try {
      // Send form data to the server
      await axios.post("http://localhost:5000/forms", formData)
      alert("Form submitted successfully")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {formError.name && <span>{formError.name}</span>}
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {formError.email && <span>{formError.email}</span>}
      </label>
      <br />
      <label>
        Contact:
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
        {formError.contact && <span>{formError.contact}</span>}
      </label>
      <br />
      <label>
        ID of the Pet that you pretend to adopt
        <input
          type="number"
          name="responsibilityDeclaration"
          checked={formData.responsibilityDeclaration}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Do you have another Pets?
        <input
          type="text"
          name="responsibilityDeclaration"
          checked={formData.responsibilityDeclaration}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        What will you do if you have to travel or emigrate?
        <input
          type="text"
          name="responsibilityDeclaration"
          checked={formData.responsibilityDeclaration}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Do you compromise to implant a microchip in the animal, according to the law?
        <input
          type="checkbox"
          name="responsibilityDeclaration"
          checked={formData.responsibilityDeclaration}
          onChange={handleChange}
          required
        />
        {formError.responsibilityDeclaration && (
          <span>{formError.responsibilityDeclaration}</span>
        )}
      </label>
      <br />
      <label>
        Do you compromise in sign a responsibility declaration of the animal?
        <input
          type="checkbox"
          name="responsibilityDeclaration"
          checked={formData.responsibilityDeclaration}
          onChange={handleChange}
          required
        />
        {formError.responsibilityDeclaration && (
          <span>{formError.responsibilityDeclaration}</span>
        )}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AdoptionForm
