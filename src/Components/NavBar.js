import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import React from 'react';
import { useAuth } from './AuthContext';


function NavBar() {
    const { isAuthenticated, logout } = useAuth();
return (
    <Navbar  
    style={{
        backgroundColor:"lightblue",  
        fontFamily:"cursive"
    }} 
    >
        <Container className='d-flex justify-content-between'>
            <Navbar.Brand 
            style={{
                color:"black",
                fontSize:"40px",
                fontFamily:"cursive",
                fontWeight:"bolder"
            }}
            >
            <img
            src="https://cdn-icons-png.flaticon.com/128/7439/7439789.png"
            width="40"
            height="40"
            alt=""
            style={{ 
                marginBottom:"5px",
                cursor:"pointer"
            }}
            />
            </Navbar.Brand>
            <Nav className='ml-auto'>
                <Nav.Link style={{
                    color: "black",
                }} 
                href="/">Home</Nav.Link>
                {isAuthenticated && <Nav.Link href='contact'>Contact</Nav.Link>}
                {isAuthenticated && <Nav.Link href="/users">Users</Nav.Link>}
                {isAuthenticated && <Nav.Link onClick={logout}>Logout</Nav.Link>}
            </Nav>
        </Container>
    </Navbar>
);
}

export default NavBar;