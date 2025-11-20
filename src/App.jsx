import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Carrito from './pages/Carrito'
import ListaServicios from './pages/ListaServicios'
import ListaProductos from './pages/ListaProductos'
import FormularioServicio from './pages/FormularioServicio'

function App() {

  const [comprar, setComprar] = useState([]);
  const agregarAlCarrito = (producto) => {
    setComprar([...comprar, producto]);
  }

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = comprar.filter((_, i) => i !== index);
    setComprar(nuevoCarrito);
  }

  return (
    <Container fluid>
      <Header/>
      <Router>
        <Navigation comprar={comprar}/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/servicios" element={<ListaServicios />} />
            <Route path="/productos" element={<ListaProductos agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/carrito" element={<Carrito comprar={comprar} eliminarDelCarrito={eliminarDelCarrito}/>}/>
            <Route path="/formulario" element={<FormularioServicio />} />
          </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={2000} />
      <Footer/>
    </Container>
  )
}

export default App
