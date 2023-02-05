import React, { useState } from "react"
import { newAdoptionForm } from "../../services/apiCalls"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    petId: "",
    anotherPets: "",
    travelSituation: "",
    microchip: "",
  })
  const [formError, setFormError] = useState({})

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    console.log(formData)
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
    if (Object.keys(formError).length) {
      return
    }
    try {
      newAdoptionForm(formData)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => {
            handleChange(e)
          }}
          required
        />
        {formError.name && <span className="form-error">{formError.name}</span>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            handleChange(e)
          }}
          required
        />
        {formError.email && <span className="form-error">{formError.email}</span>}
      </div>
      <div className="form-group">
        <label>Contact:</label>
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={(e) => {
            handleChange(e)
          }}
          required
        />
        {formError.contact && (
          <span className="form-error">{formError.contact}</span>
        )}
      </div>
      <div className="form-group">
        <label>ID of the Pet that you pretend to adopt:</label>
        <input
          type="text"
          name="petId"
          onChange={(e) => {
            handleChange(e)
          }}
          required
        />
      </div>
      <div className="form-group">
        <label>Do you have another Pets?:</label>
        <input
          type="text"
          name="anotherPets"
          value={formData.anotherPets}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>What will you do if you have to travel or emigrate?:</label>
        <input
          type="text"
          name="travelSituation"
          checked={formData.travelSituation}
          onChange={(e) => {
            handleChange(e)
          }}
          required
        />
      </div>
      <div className="form-group">
        <label>
          Do you compromise in sign a responsibility declaration of the animal?:
        </label>
        <input
          type="text"
          name="microchip"
          checked={formData.microchip}
          onChange={(e) => {
            handleChange(e)
          }}
          required
        />
        {formError.responsibilityDeclaration && (
          <span className="form-error">{formError.responsibilityDeclaration}</span>
        )}
      </div>
      <button type="submit" className="form-submit">
        Submit
      </button>
    </form>
  )
}

export default Form
