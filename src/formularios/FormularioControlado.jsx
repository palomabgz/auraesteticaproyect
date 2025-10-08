import { useState } from "react";

export default function FormularioControlado() {
    const [nombre, setNombre] = useState("");
    const [provincia, setProvincia] = useState("");
    const [fecha, setFecha] = useState("");

    const manejarSubmit = (e) => {
        e.preventDefault();
        alert(`Datos enviados correctamente`);
        setNombre("");
        setProvincia("");
        setFecha("");
    };

    return (
        <div>
            <form onSubmit={manejarSubmit}>
                <h2>Formulario:</h2>
                <label>Nombre: </label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br />
                <label>Provincia: </label>
                <input type="text" value={provincia} onChange={(e) => setProvincia(e.target.value)} />
                <br />
                <label>Fecha: </label>
                <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}