import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'


const Header = (props) => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='NavBar'>
                <Container>
                    <Link to="/" className='logo'>Admin Dashboard</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav >
                            <li className='rightLink'>
                                <Link to="Signup">SignUp</Link>
                            </li>
                            <li className='rightLink'>
                                <Link to="Signin">Signin</Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}
export default Header;

