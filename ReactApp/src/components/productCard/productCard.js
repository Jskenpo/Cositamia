import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Icon from '@mdi/react';
import { mdiHeart } from '@mdi/js';
import './productCard.css';

const ProductCard = (props) => {
  // Estado para controlar si el mouse está sobre la tarjeta
  const [isHovered, setIsHovered] = useState(false);

  // Valores para controlar la presentación de la modal
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  // Opción seleccionada en el formulario
  const [selectedOption, setSelectedOption] = useState('Cantidad');

  // Función para mostrar la modal
  const handleShow = (breakpoint, product) => {
    console.log("Mostrando detalles de producto:", product);
    setFullscreen(breakpoint);
    setShow(true);
  };

  // Función para manejar el evento "mouseEnter" (cuando el mouse entra en la tarjeta)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Función para manejar el evento "mouseLeave" (cuando el mouse sale de la tarjeta)
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Función para manejar el cambio en el formulario de selección
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="product-card">
      <Card
        style={{
          width: '18rem',
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Card.Img variant="top" src={props.img} alt="Productos" style={{ height: "300px" }} />
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <ListGroup.Item>{props.precio}</ListGroup.Item>
        </Card.Body>
        <Card.Body>
          {values.map((v, idx) => (
            <div key={idx} className="d-flex justify-content-between align-items-center">
              <Button
                style={{ backgroundColor: '#C23532', borderColor: '#C23532' }}
                className="me-2 mb-2"
                onClick={() => handleShow(v, props)} // Abre la modal y pasa los detalles del producto
              >
                Más detalles
                {typeof v === 'string' && `below ${v.split('-')[0]}`}
              </Button>
              <Button 
                style={{ backgroundColor: "#fff", borderColor: "#C23532" }}
                className="me-2 mb-2"
                onClick={() => {
                  props.addToFavorite({
                    img: props.img,
                    nombre: props.nombre,
                    precio: parseFloat(props.precio.replace('Q', '').trim()),
                    sku: props.sku,
                    descripcion: props.descripcion,
                    categoria: props.categoria
                  });
                }}
              >
                <Icon path={mdiHeart} size={1} color="red" />
              </Button>
            </div>
          ))}
          <Modal show={show} size="lg" onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <h1 style={{ color: "#C23532" }}>Detalles del artículo</h1>
            </Modal.Header>
            <Modal.Body>
              <div className='contenedor'>
                <div className="imagen">
                  <img src={props.img} alt="Productos" />
                </div>
                <div className="informacion">
                  <div className='detalles'>
                    <h1 style={{ color: "#C23532" }}>{props.nombre}</h1>
                  </div>
                  <div className='precio'>
                    <h2 style={{ color: "#C23532" }}>{props.precio}</h2>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Form.Select aria-label="Default select example" style={{ width: '120px' }} value={selectedOption} onChange={handleSelectChange}>
                <option>Cantidad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>

              <Button
                variant="primary"
                style={{ backgroundColor: '#C23532', borderColor: '#C23532' }}
                onClick={() => {
                  props.addToCart({
                    img: props.img,
                    nombre: props.nombre,
                    precio: parseFloat(props.precio.replace('Q', '').trim()),
                    sku: props.sku,
                    categoria: props.categoria,
                    cantidad: selectedOption
                  });
                  setShow(false);
                }}
                disabled={selectedOption === 'Cantidad'}
              >
                Agregar al carrito
              </Button>
            </Modal.Footer>
          </Modal>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
