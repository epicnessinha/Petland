import React from "react"

import { useNavigate } from "react-router-dom"

import "./PetList.css"

const List = (props) => {
  const navigate = useNavigate()
  const { url, name } = props.pet

  return (
    <>
      <img
        className="img"
        src={url}
        alt={name}
        onClick={() => navigate("/details")}
      />
      <div className="teste">
        <h2 className="name">{name}</h2>
      </div>
      <div className="damnit">
        <button className="buttonList" onClick={() => navigate("/adoptlogin")}>
          Adopt Me!
        </button>
      </div>
    </>
  )
}

export default List
