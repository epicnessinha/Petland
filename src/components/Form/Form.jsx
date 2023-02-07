import React, { useState } from "react"
import { newAdoptionForm } from "../../services/apiCalls"
import "./Form.css"

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    petId: "",
    anotherPets: "",
    microchip: "",
  })
  const [formError, setFormError] = useState({})
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

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
      setShowSuccessMessage(true)
      setTimeout(() => {
        window.location.href = "/"
      }, 2000)
    } catch (error) {
      console.error(error)
    }
  }
  //alterar para form do react-bootstrap
  return (
    <>
      <h4>Adoption Form</h4>
      {showSuccessMessage && (
        <div className="form-success">Submitted with success</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formError.name && <span className="form-error">{formError.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {formError.email && <span className="form-error">{formError.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="Enter your contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          {formError.contact && (
            <span className="form-error">{formError.contact}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="petId">ID of the Pet you want to adopt:</label>
          <input
            type="text"
            id="petId"
            name="petId"
            placeholder="Enter the ID of the pet"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="anotherPets">Do you have any other pets?</label>
          <input
            type="text"
            id="anotherPets"
            name="anotherPets"
            value={formData.anotherPets}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="microchip">
            Do you agree to sign a responsibility declaration for the animal?
          </label>
          <input
            style={{
              width: "25px",
              height: "25px",
              margin: "0 auto",
              display: "block",
            }}
            type="checkbox"
            id="microchip"
            name="microchip"
            onChange={handleChange}
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
    </>
  )
}

export default Form
