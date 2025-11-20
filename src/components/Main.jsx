import { Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// React Icons
import { FaCut, FaShoppingBag, FaCalendarCheck, FaInfoCircle } from "react-icons/fa";

// Toastify
import { toast } from "react-toastify";

const Main = () => {

    const image = [
        { id: 1, title: 'Corte de Cabello', description: 'Renueva tu estilo con nuestros cortes modernos y personalizados.', image: '//cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_1280.jpg' },
        { id: 2, title: 'Color y mechas', description: 'Dale vida a tu cabello con nuestros tratamientos de color profesional.', image: 'https://cdn.pixabay.com/photo/2019/03/15/13/46/hairstyle-4057094_1280.jpg' },
        { id: 3, title: 'Peinados', description: 'Nutre y repara tu cabello con productos de alta calidad.', image: 'https://cdn.pixabay.com/photo/2020/08/08/15/05/hair-5473204_1280.jpg' }
    ];

    const product = [
        { id: 1, title: 'Shampoo Neutro', description: '$13.000', image: 'https://cdn.batitienda.com/baticloud/images/product_picture_20d82577b3e24186b43ec70268caa8e8_638464951711481922_0_m.webp' },
        { id: 2, title: 'Serum Reparador', description: '$22.000', image: 'https://farmacityar.vtexassets.com/arquivos/ids/276680-1200-auto?v=638887875156700000&width=1200&height=auto&aspect=true' },
        { id: 3, title: 'Mascarilla de Palta', description: '$28.000', image: 'https://farmacityar.vtexassets.com/arquivos/ids/259463-1200-auto?v=638600329316600000&width=1200&height=auto&aspect=true' }
    ];

    // 🔔 Notificaciones
    const notificarReserva = (servicio) => {
        toast.success(`Reserva iniciada para: ${servicio}`);
    };

    const notificarProducto = (producto) => {
        toast.info(`Viendo detalles de: ${producto}`);
    };

    return (
        <main>
            <Helmet>
                <title>Peluquería Aura Estética</title>
                <meta 
                    name="description" 
                    content="Bienvenido a nuestra barbería. Descubre cortes, peinados, coloraciones y productos profesionales para el cuidado del cabello." 
                />
            </Helmet>

            {/* Bienvenida */}
            <section className="text-center my-5">
                <h1 className="display-4">¡Te damos la bienvenida!</h1>
                <p className="lead">
                    Descubre la mejor experiencia de cuidado personal y belleza.
                    <br />
                    Nuestros servicios incluyen cortes, peinados, tratamientos capilares y productos de primera calidad.
                </p>

                <Link to="/servicios">
                    <Button
                        variant="outline-primary"
                        size="lg"
                        className="m-2"
                        aria-label="Ver servicios disponibles"
                    >
                        <FaCut className="me-2" /> Ver Servicios
                    </Button>
                </Link>

                <Link to="/productos">
                    <Button
                        variant="outline-primary"
                        size="lg"
                        className="m-2"
                        aria-label="Ver productos recomendados"
                    >
                        <FaShoppingBag className="me-2" /> Nuestros Productos
                    </Button>
                </Link>
            </section>

            {/* Servicios */}
            <section className="my-5">
                <h2 className="text-center mb-4">Servicios Destacados</h2>
                <Row className="g-4">
                    {image.map(image => (
                        <Col key={image.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img 
                                    variant="top" 
                                    src={image.image} 
                                    alt={`Imagen del servicio: ${image.title}`} 
                                    style={{ height: '200px', objectFit: 'cover' }}
                                />

                                <Card.Body>
                                    <Card.Title style={{ height: '50px', overflow: 'hidden' }}>
                                        {image.title}
                                    </Card.Title>
                                    <Card.Text style={{ height: '50px', overflow: 'hidden' }}>
                                        {image.description}
                                    </Card.Text>
                                </Card.Body>

                                <Link to="/formulario">
                                    <Button 
                                        variant="primary"
                                        size="md"
                                        className="m-2"
                                        aria-label={`Reservar turno para ${image.title}`}
                                        onClick={() => notificarReserva(image.title)}
                                    >
                                        <FaCalendarCheck className="me-2" /> Reservá tu turno
                                    </Button>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            <hr />

            {/* Productos */}
            <section className="my-5">
                <h2 className="text-center mb-4">Nuestros productos recomendados</h2>
                <Row className="g-4">
                    {product.map(product => (
                        <Col key={product.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img 
                                    variant="top" 
                                    src={product.image} 
                                    alt={`Imagen del producto: ${product.title}`} 
                                    style={{ height: '100px', width: '100px', objectFit: 'cover', alignSelf: 'center' }} 
                                />

                                <Card.Body>
                                    <Card.Title style={{ height: '30px', overflow: 'hidden' }}>
                                        {product.title}
                                    </Card.Title>
                                    <Card.Text style={{ height: '30px', overflow: 'hidden' }}>
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>

                                <Link to="/productos">
                                    <Button 
                                        variant="primary"
                                        size="sm"
                                        aria-label={`Ver más sobre ${product.title}`}
                                        onClick={() => notificarProducto(product.title)}
                                    >
                                        <FaInfoCircle className="me-2" /> Ver más
                                    </Button>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </main>
    );
};

export default Main;

