import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navigation = ({ comprar }) => {

    const { usuario, logout } = useContext(AuthContext);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>

                {usuario ? (
                    <>
                        <span className="text-white me-2">Hola, {usuario.email}</span>
                        <Button onClick={logout} variant="danger">Salir</Button>
                    </>
                ) : (
                    <Button 
                        as={Link}    
                        to="/login"  
                        variant="outline-primary" 
                        className="ms-2"
                    >
                        Ingresar
                    </Button>
                )}

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/servicios">Servicios</Nav.Link>
                        <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/carrito">
                            Carrito
                            {comprar.length > 0 && <span className="badge bg-danger ms-1">{comprar.length}</span>}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
