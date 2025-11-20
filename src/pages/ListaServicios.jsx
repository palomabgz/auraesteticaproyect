import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// React Icons
import { FaCalendarCheck, FaArrowLeft } from "react-icons/fa";

const ListaServicios = () => {

    const images = [
        {
            id: 1,
            title: 'Color y Mechas',
            description: 'Dale vida a tu cabello con tonos vibrantes y reflejos naturales que resaltan tu belleza.',
            image: 'https://cdn.pixabay.com/photo/2019/03/15/13/46/hairstyle-4057094_1280.jpg'
        },
        {
            id: 2,
            title: 'Corte de cabello',
            description: 'Renueva tu estilo con cortes modernos y personalizados que se adaptan a tu personalidad.',
            image: 'https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_1280.jpg'
        },
        {
            id: 3,
            title: 'Peinados',
            description: 'Peinados elegantes o casuales para cualquier ocasión, desde eventos hasta el día a día.',
            image: 'https://cdn.pixabay.com/photo/2020/08/08/15/05/hair-5473204_1280.jpg'
        },
        {
            id: 4,
            title: 'Tratamientos capilares',
            description: 'Nutre, repara y fortalece tu cabello con productos profesionales de alta calidad.',
            image: 'https://cdn.pixabay.com/photo/2017/08/29/12/21/hairdresser-2693098_1280.jpg'
        },
        {
            id: 5,
            title: 'Alisados',
            description: 'Consigue un cabello liso, suave y manejable con técnicas seguras y duraderas.',
            image: 'https://cdn.pixabay.com/photo/2021/12/19/18/45/combing-6881725_1280.jpg'
        },
        {
            id: 6,
            title: 'Corte de barba',
            description: 'Define y estiliza tu barba con precisión para un look limpio y moderno.',
            image: 'https://cdn.pixabay.com/photo/2018/02/22/17/08/barber-3173419_1280.jpg'
        }
    ];

    if (images.length === 0) {
        return <p style={{ textAlign: "center", marginTop: "20px" }}>Cargando servicios...</p>;
    }

    // 🔔 Notificación
    const notificarReserva = (servicio) => {
        toast.success(`Abriendo formulario para: ${servicio}`);
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Servicios</h2>
            <p style={{ textAlign: 'center' }}>
                ¡Elige el servicio que mejor se adapte a tus necesidades!
            </p>

            <Row>
                {images.map(image => (
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

            <div className="text-center">
                <Link to="/">
                    <Button 
                        variant="primary" 
                        size="md" 
                        className="m-2"
                        aria-label="Volver al inicio"
                    >
                        <FaArrowLeft className="me-2" /> Regresar
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ListaServicios;
