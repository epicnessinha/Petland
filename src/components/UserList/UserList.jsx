import React from "react"
import { Card, Button } from "react-bootstrap"

const UserList = ({ users, handleUserDelete }) => {
  return (
    <div>
      <h4 className="users-header">List of Users</h4>
      <div className="user-list">
        {users.map((user) => (
          <Card key={user.id} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={user.photo} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.email}</Card.Text>
              <Button onClick={() => handleUserDelete(user.id)} variant="info">
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default UserList
