import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

// React Icons
import { FaTrash, FaArrowLeft, FaShoppingCart } from "react-icons/fa";

const Carrito = ({ comprar, eliminarDelCarrito }) => {

    // Notificación al eliminar
    const notificarEliminado = (producto) => {
        toast.error(`Eliminado del carrito: ${producto}`);
    };

    return (
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px" }}>
            
            <h2 style={{ textAlign: "center", marginTop: "20px" }}>
                <FaShoppingCart className="me-2" />
                Tus productos:
            </h2>

            {comprar.length === 0 ? (
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    No hay productos en tu carrito...
                </p>
            ) : (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {comprar.map((producto, index) => (
                        <li 
                            key={index}
                            style={{ 
                                display: "flex", 
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "10px",
                                borderBottom: "1px solid #ddd"
                            }}
                        >
                            <span>
                                {producto.title} - ${producto.price}
                            </span>

                            <Button
                                variant="danger"
                                aria-label={`Eliminar ${producto.title} del carrito`}
                                onClick={() => {
                                    eliminarDelCarrito(index);
                                    notificarEliminado(producto.title);
                                }}
                            >
                                <FaTrash />
                            </Button>
                        </li>
                    ))}
                </ul>
            )}

            <h5 style={{ marginTop: "20px" }}>
                Total: $
                {comprar
                    .reduce((total, producto) => total + producto.price, 0)
                    .toFixed(2)}
            </h5>

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
    );
};

export default Carrito;
