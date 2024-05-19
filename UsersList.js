import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function UsersList() {
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
}, []);

return (
    <Container>
        <Row>
            {users.map(user => (
            <Col key={user.id} sm={12} md={6} lg={4} className="mb-4">
                <Card className="card-hover" style={{ 
                    width: "18rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                    margin: "10px",
                    gap: "10px",
                    alignItems: "center",
                    borderRadius: "50px",
                    cursor: "pointer",
                    backgroundColor: "lightblue",
                    fontFamily: "cursive",
                    color: "black",
                }}>
                <Card.Img style={{
                    borderRadius: "50px",
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                    objectFit: "cover",

                }}
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpot7Kcj69hYEDhZaAjyJQwnTjiBZvSxRjZOBBvdwyPMF0UbJ"
                />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
                    <Card.Text>
                        <strong>Username:</strong> {user.username}<br />
                        <strong>Phone:</strong> {user.phone}<br />
                        <strong>Website:</strong> <a href={`http://${user.website}`}>{user.website}</a>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        ))}
        </Row>
    </Container>
);
}

export default UsersList;
