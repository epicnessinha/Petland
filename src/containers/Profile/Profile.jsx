import "./Profile.css"
import React from "react"

const Profile = (props) => {
  return (
    <div className="profile">
      <img src={props.avatarUrl} alt="User avatar" />
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  )
}

export default Profile
