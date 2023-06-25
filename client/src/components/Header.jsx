import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link , NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink to="/" className="nav-link" style={{color:"#fff"}}>OYO</NavLink>
                <Nav className="ms-auto">
                    <NavLink to="/register" className="nav-link">Register</NavLink>
                    <NavLink to="/login" className="nav-link">Login</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}
