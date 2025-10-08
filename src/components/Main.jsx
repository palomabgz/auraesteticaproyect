import { Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <section className="text-center my-5">
                <h1 className="display-4">¡Te damos la bienvenida!</h1>
                <p className="lead">
                Descubre la mejor experiencia de cuidado personal y belleza.
                <br />
                Nuestros servicios incluyen cortes, peinados, tratamientos capilares y productos de primera calidad.
                </p>
                <Link to="/servicios">
                <Button variant="outline-primary" size="lg" className="m-2">Ver Servicios</Button>
                </Link>
                <Link to="/productos">
                <Button variant="outline-primary" size="lg" className="m-2">Nuestros Productos</Button>
                </Link>
            </section>

            <section className="my-5">
                <h2 className="text-center mb-4">Servicios Destacados</h2>
                <Row className="g-4">
                <Col md={4}>
                    <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Corte de Cabello</Card.Title>
                        <Card.Text>
                        Renueva tu estilo con nuestros cortes modernos y personalizados.
                        </Card.Text>
                    </Card.Body>
                    <Link to="/formulario">
                        <Button variant="btn btn-primary" size="md" className="m-2">Reservá tu turno</Button>
                    </Link>
                    
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Color y Mechas</Card.Title>
                        <Card.Text>
                        Dale vida a tu cabello con nuestros tratamientos de color profesional.
                        </Card.Text>
                    </Card.Body>
                    <Link to="/formulario">
                        <Button variant="btn btn-primary" size="md" className="m-2">Reservá tu turno</Button>
                    </Link>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Peinados</Card.Title>
                        <Card.Text>
                        Nutre y repara tu cabello con productos de alta calidad.
                        </Card.Text>
                    </Card.Body>
                    <Link to="/formulario">
                        <Button variant="btn btn-primary" size="md" className="m-2">Reservá tu turno</Button>
                    </Link>                    
                    </Card>
                </Col>
                </Row>
            </section>

            <section className="my-5">
                <h2 className="text-center mb-4">Productos Recomendados</h2>
                <Row className="g-4">
                <Col md={3}>
                    <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Shampoo Nutritivo</Card.Title>
                        <Card.Text>$1500</Card.Text>
                        <Link to="/productos">
                        <Button variant="primary" size="sm">Ver más</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Acondicionador Hidratante</Card.Title>
                        <Card.Text>$1400</Card.Text>
                        <Link to="/productos">
                        <Button variant="primary" size="sm">Ver más</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Mascarilla Reparadora</Card.Title>
                        <Card.Text>$2000</Card.Text>
                        <Link to="/productos">
                        <Button variant="primary" size="sm">Ver más</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Serum Capilar</Card.Title>
                        <Card.Text>$1200</Card.Text>
                        <Link to="/productos">
                        <Button variant="primary" size="sm">Ver más</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </section>
        </main>
    )
    }

export default Main;
