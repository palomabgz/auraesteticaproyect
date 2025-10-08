const Carrito = ({ comprar, eliminarDelCarrito }) => {
    
    return (
        <div>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Tus productos:</h2>
            {comprar.length === 0 ? (
                <p>No hay productos en tu carrito...</p>
            ) : (
                <ul>
                {comprar.map((producto, index) => (
                    <li key={index}>
                    {producto.title} - ${producto.price}
                    <button className="btn btn-danger" onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
                    </li>
                ))}
                </ul>
            )}
            <h5>Total: ${comprar.reduce((total, producto) => total + producto.price, 0).toFixed(2)}</h5>
        </div>
    );
};

export default Carrito;