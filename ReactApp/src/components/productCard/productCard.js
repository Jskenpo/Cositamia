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
  const { descripcion } = props;

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

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
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.precio}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {values.map((v, idx) => (
            <Button style={{ backgroundColor: '#B2B6BD', borderColor: '#B2B6BD' }} key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
              Más detalles
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
          ))}
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <h1>{props.nombre}</h1>
            </Modal.Header>
            <Modal.Body>
              <div className='contenedor'>
                <div className={`imagen ${props.categoria === 'Accesorios' ? 'accesorio-img' : ''}`}>
                <img src={props.img} alt="Productos" />
              </div>
                <div className={`informacion ${props.categoria === 'Accesorios' ? 'accesorio-info' : ''}`}>
                  <div className='detalles'>
                    <h1>Detalles del artículo</h1>
                  </div>
                  <div className='precio'>
                    <h2>{props.precio}</h2>
                  </div>
                  <div className='descripcion'>
                    <h5>Descripción</h5>
                    <ul>
                      {descripcion.map((punto, index) => (
                        <li key={index} style={{ marginTop: '8px' }}>{punto}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Form.Select aria-label="Default select example" style={{width: '120px'}} value={selectedOption} onChange={handleSelectChange}>
                <option>Cantidad</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>

              <Button variant="primary" style={{ backgroundColor: '#B2B6BD', borderColor: '#B2B6BD' }} onClick={() => setShow(false)} disabled={selectedOption === 'Cantidad'}>
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
