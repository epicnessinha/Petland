import React, { useState, useEffect } from "react"
import { useLogin } from "../../providers/LoginContext"
import { getUsersProfile, updateUserProfile } from "../../services/apiCalls"
import Logout from "../../components/Logout/Logout"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import Footer from "../../components/Footer/Footer"

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "" })
  const [editing, setEditing] = useState(false)

  const { userData } = useLogin()

  const getUserInfo = async () => {
    let response = await getUsersProfile(userData.id)
    setUser(response.data)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const handleEdit = () => {
    setEditing(true)
  }

  const handleCancel = () => {
    setEditing(false)
  }

  const handleSave = (event) => {
    event.preventDefault()
    setEditing(false)
    updateUserProfile(userData.id, user)
  }

  return (
    <>
      <>
        <>
          <Container className="d-flex justify-content-center align-items-center">
            <Card
              style={{
                width: "20rem",
              }}
            >
              <Card.Img variant="top" src={user.photo} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                  <ListGroup.Item>Address: {user.address}</ListGroup.Item>
                  <ListGroup.Item>Contact: {user.contact}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
              {!editing && (
                <>
                  <Card.Footer>
                    <Button variant="danger" onClick={handleEdit}>
                      Edit Profile
                    </Button>
                  </Card.Footer>
                  <Logout />
                </>
              )}
              {editing && (
                <Card.Body>
                  <form onSubmit={handleSave}>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                      />
                    </label>
                    <label>
                      Email:
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                      />
                    </label>
                    <Button
                      variant="danger"
                      style={{ marginRight: "10px" }}
                      onClick={handleSave}
                    >
                      Save Changes
                    </Button>
                    <Button variant="secondary" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </form>
                </Card.Body>
              )}
            </Card>
          </Container>
        </>
      </>
    </>
  )
}

export default Profile
