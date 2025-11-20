import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const manejarSubmit = (e) => {
        e.preventDefault();
        login(email);
        navigate("/carrito");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto" }}>
            <h2>Iniciar sesión</h2>

            <form onSubmit={manejarSubmit}>
                <label>Correo electrónico:</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <Button type="submit" className="mt-3" variant="primary">
                    Ingresar
                </Button>
            </form>
        </div>
    );
};

export default Login;
