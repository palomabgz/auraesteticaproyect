import { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

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
        return <p>Cargando productos...</p>;
    }

    const productosVisibles = productos.slice(0, mostrar);

    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Productos</h2>
                <Row>
                {productosVisibles.map((producto) => (
                    <Col key={producto.id} md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={producto.image} alt={producto.title} style={{ height: '200px', width: '100%' }} />
                        <Card.Body>
                        <Card.Title style={{ height: '50px', overflow: 'hidden' }}>{producto.title}</Card.Title>
                        <Card.Text style={{ height: '100px', overflow: 'hidden' }}>{producto.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Precio: ${producto.price}</small>
                        </Card.Footer>
                        <button className="btn btn-primary" style={{ marginTop: '10px' }} onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                    </Card>
                    </Col>
                ))}
                </Row> 

                <div className="text-center mt-4">
                {mostrar < productos.length && (
                    <button
                    className="btn btn-primary"
                    onClick={() => setMostrar(prev => Math.min(prev + 3, productos.length))}>
                    Mostrar más
                    </button>
                )}
                {mostrar > 6 && (
                    <button
                    className="btn btn-secondary ms-2"
                    onClick={() => setMostrar(prev => Math.max(prev - 3, 6))}
                    >
                    Mostrar menos
                    </button>
                )}
                </div>
        </div>
    );
};

export default ListaProductos;