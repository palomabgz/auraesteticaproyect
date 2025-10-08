import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const FormularioServicio = () => {
    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="p-4 shadow-sm">
                        <Card.Body>
                            <h2 className="text-center mb-4">Reserva tu turno</h2>
                            <Form>
                                <Form.Group className="mb-3" controlId="nombre">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tu nombre" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="apellido">
                                    <Form.Label>Apellido</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tu apellido" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="fecha">
                                    <Form.Label>Fecha</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="hora">
                                    <Form.Label>Hora</Form.Label>
                                    <Form.Control type="time" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="servicio">
                                    <Form.Label>Servicio</Form.Label>
                                    <Form.Select>
                                        <option>Seleccione un servicio</option>
                                        <option>Corte de Cabello</option>
                                        <option>Color y Mechas</option>
                                        <option>Peinados</option>
                                        <option>Tratamientos Capilares</option>
                                        <option>Alisados</option>
                                        <option>Corte de barba</option>
                                    </Form.Select>
                                </Form.Group>

                                <div className="d-grid">
                                    <Button variant="primary" type="submit">
                                        Reservar Turno
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default FormularioServicio;
