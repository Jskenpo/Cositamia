import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './productCard.css';

const ProductCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Cantidad');

  const handleShow = (breakpoint, product) => {
    console.log("Mostrando detalles de producto:", product);
    setFullscreen(breakpoint);
    setShow(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
        <Card.Img variant="top" src={props.img} alt="Productos" />
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <ListGroup.Item>{props.precio}</ListGroup.Item>
        </Card.Body>
        <Card.Body>
          {values.map((v, idx) => (
            <Button
              style={{ backgroundColor: '#C23532', borderColor: '#C23532' }}
              key={idx}
              className="me-2 mb-2"
              onClick={() => handleShow(v, props)} // Pasa el producto y las props
            >
              Más detalles
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
          ))}
          <Modal show={show} size="lg" onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <h1 style={{color: "#C23532"}}>Detalles del artículo</h1>
            </Modal.Header>
            <Modal.Body>
              <div className='contenedor'>
                <div className={`imagen ${props.categoria === 'Accesorios' ? 'accesorio-img' : ''}`}>
                  <img src={props.img} alt="Productos" />
                </div>
                <div className={`informacion ${props.categoria === 'Accesorios' ? 'accesorio-info' : ''}`}>
                  <div className='detalles'>
                    <h1 style={{color: "#C23532"}}>{props.nombre}</h1>
                  </div>
                  <div className='precio'>
                    <h2 style={{color: "#C23532"}}>{props.precio}</h2>
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
                    precio: parseFloat(props.precio.replace('Q', '').trim()), // Convierte la cadena en un número
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