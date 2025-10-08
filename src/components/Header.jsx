import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
    return (
        <header className="bg-primary text-white py-4 shadow-sm">
            <Container>
                <h1 className='mb-1'>Aura Estética</h1>
                <p className='lead'>Servicios de belleza capilar en la comodidad del hogar</p>
            </Container>
        </header>
    );
};

export default Header;