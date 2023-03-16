import React from "react"

const AdoptionFormList = ({ forms, handleFormDelete }) => {
  return (
    <div>
      <h4 className="forms-header">List of Adoption Forms</h4>
      {forms.map((form) => (
        <div key={form.id}>
          <div>Pet Id: {form.petId}</div>
          <div>Adopter's Name: {form.name}</div>
          <div>Email: {form.email}</div>
          <div>Contact: {form.contact}</div>
          <div>The Adopter have another pets?: {form.anotherPets}</div>
          <div>
            Adopter's plan in case he/she needs to travel: {form.travelSituation}
          </div>
          <div>Commits to put a microchip: {form.microchip}</div>
          <button onClick={() => handleFormDelete(form.id)}>
            Adoption Approved
          </button>
        </div>
      ))}
    </div>
  )
}

export default AdoptionFormList
