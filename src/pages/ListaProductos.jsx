import { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

// React Icons
import { FaCartPlus, FaArrowDown, FaArrowUp, FaArrowLeft } from "react-icons/fa";

const ListaProductos = ({ agregarAlCarrito }) => {

    const [productos, setProductos] = useState([]);
    const [mostrar, setMostrar] = useState(6);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.log('Error cargando los productos', error));
    }, []);

    if (productos.length === 0) {
        return <p style={{ textAlign: "center", marginTop: "20px" }}>Cargando productos...</p>;
    }

    const productosVisibles = productos.slice(0, mostrar);

    // 🔔 Notificaciones
    const notificarCarrito = (nombre) => {
        toast.success(`Producto añadido: ${nombre}`);
    };

    const notificarMostrarMas = () => {
        toast.info("Mostrando más productos...");
    };

    const notificarMostrarMenos = () => {
        toast.info("Mostrando menos productos");
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Productos</h2>

            <Row>
                {productosVisibles.map((producto) => (
                    <Col key={producto.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src={producto.image} 
                                alt={`Imagen del producto: ${producto.title}`}
                                style={{ height: '200px', width: '100%', objectFit: 'contain' }} 
                            />

                            <Card.Body>
                                <Card.Title style={{ height: '50px', overflow: 'hidden' }}>
                                    {producto.title}
                                </Card.Title>
                                <Card.Text style={{ height: '100px', overflow: 'hidden' }}>
                                    {producto.description}
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer>
                                <small className="text-muted">Precio: ${producto.price}</small>
                            </Card.Footer>

                            <Button 
                                className="btn btn-primary m-2"
                                aria-label={`Agregar ${producto.title} al carrito`}
                                onClick={() => {
                                    agregarAlCarrito(producto);
                                    notificarCarrito(producto.title);
                                }}
                            >
                                <FaCartPlus className="me-2" /> Añadir al carrito
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row> 

            {/* Botones Mostrar más / menos */}
            <div className="text-center mt-4">
                {mostrar < productos.length && (
                    <Button
                        className="btn btn-primary me-2"
                        aria-label="Mostrar más productos"
                        onClick={() => {
                            setMostrar(prev => Math.min(prev + 3, productos.length));
                            notificarMostrarMas();
                        }}
                    >
                        <FaArrowDown className="me-2" /> Mostrar más
                    </Button>
                )}

                {mostrar > 6 && (
                    <Button
                        className="btn btn-secondary"
                        aria-label="Mostrar menos productos"
                        onClick={() => {
                            setMostrar(prev => Math.max(prev - 3, 6));
                            notificarMostrarMenos();
                        }}
                    >
                        <FaArrowUp className="me-2" /> Mostrar menos
                    </Button>
                )}
            </div>

            {/* Botón regresar */}
            <div className="text-center mt-4">
                <Link to="/">
                    <Button variant="primary">
                        <FaArrowLeft className="me-2" /> Regresar
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ListaProductos;
