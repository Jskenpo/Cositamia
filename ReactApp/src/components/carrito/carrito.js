import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import './carrito.css';

function Carrito({ cart, setCart }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRemoveProduct = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart); // Actualiza el estado del carrito
    };

    console.log("Productos en el carrito:", cart);
    const calculateCosts = () => {
        const subtotal = cart.reduce((total, item) => total + (parseFloat(item.precio) * item.cantidad), 0);
        const shipping = 100.00;
        const total = subtotal + shipping;

        return { subtotal, shipping, total };
    };
    const { subtotal, shipping, total } = calculateCosts();

    const handleClickCatalogo = () => {
        navigate('/catalogo');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo" style={{color: "#C23532"}}>Tu Carrito</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"> </th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Disponibilidad</th>
                                    <th scope="col" className="text-center">Cantidad</th>
                                    <th scope="col" className="text-right">Precio</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td><img src={item.img} alt={item.nombre} style={{ width: 'auto', height: '100px' }} /></td>
                                        <td>{item.nombre}</td>
                                        <td>In stock</td>
                                        <td><input className="form-control" type="text" value={item.cantidad} /></td>
                                        <td className="text-right">
                                            {isNaN(parseFloat(item.precio)) ? 'Precio no válido' : (parseFloat(item.precio) * item.cantidad).toFixed(2)} Q
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-sm btn-danger" onClick={() => handleRemoveProduct(index)}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Sub-Total</td>
                                    <td className="text-right">{subtotal.toFixed(2)} Q</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Envío</td>
                                    <td className="text-right">{shipping.toFixed(2)} Q</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>Total</strong></td>
                                    <td className="text-right"><strong>{total.toFixed(2)} Q</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <button className="btn btn-block btn-light" onClick={handleClickCatalogo} style={{backgroundColor: '#E5948F', borderColor: '#E5948F', color: "#ffffff"}}>Continuar Comprando</button>
                        </div>
                        <div className="col-sm-12 col-md-6 text-right">
                            <button className="btn btn-lg btn-block btn-success text-uppercase" onClick={handleShow} style={{ backgroundColor: '#C23532', borderColor: '#C23532' }}>Realizar pedido</button>

                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Orden de Pago</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridName">
                                                <Form.Label>Nombre</Form.Label>
                                                <Form.Control type="name" placeholder="Nombre" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridLastName">
                                                <Form.Label>Apellido</Form.Label>
                                                <Form.Control type="lastname" placeholder="Apellido" />
                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Correo</Form.Label>
                                                <Form.Control type="email" placeholder="Correo" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Contraseña</Form.Label>
                                                <Form.Control type="password" placeholder="Contraseña" />
                                            </Form.Group>
                                        </Row>

                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Dirección 1</Form.Label>
                                            <Form.Control placeholder="Calle, número de casa, zona" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            <Form.Label>Dirección 2</Form.Label>
                                            <Form.Control placeholder="Apartamento, colonia, casa" />
                                        </Form.Group>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridCity">
                                                <Form.Label>Ciudad</Form.Label>
                                                <Form.Control placeholder="Guatemala" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridState">
                                                <Form.Label>Departamento</Form.Label>
                                                <Form.Select defaultValue="Choose...">
                                                    <option>Escoger...</option>
                                                    <option>...</option>
                                                </Form.Select>
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridZip">
                                                <Form.Label>Código postal</Form.Label>
                                                <Form.Control />
                                            </Form.Group>
                                        </Row>

                                        <fieldset>
                                            <h6>Tipo de tarjeta</h6>
                                            <Form.Group as={Row} className="mb-3">
                                                <Col sm={10}>
                                                    <Form.Check
                                                        type="radio"
                                                        label="Tarjeta de crédito"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                        type="radio"
                                                        label="Tarjeta de débito"
                                                        name="formHorizontalRadios"
                                                        id="formHorizontalRadios2"
                                                    />
                                                </Col>
                                            </Form.Group>
                                        </fieldset>

                                        <Form.Group className="mb-3" controlId="formGridNameCard">
                                            <Form.Label>Nombre de la tarjeta</Form.Label>
                                            <Form.Control placeholder="Nombre" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGridCreditNumber">
                                            <Form.Label>Número de tarjeta</Form.Label>
                                            <Form.Control placeholder="" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGrid">
                                            <Form.Label>Fecha de vencimiento</Form.Label>
                                            <Form.Control placeholder="" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            <Form.Label>Código de seguridad (CVV)</Form.Label>
                                            <Form.Control placeholder="" />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: '#E5948F', borderColor: '#E5948F' }}>
                                        Cancelar
                                    </Button>
                                    <Button variant="primary" onClick={handleClose} style={{ backgroundColor: '#C23532', borderColor: '#C23532' }}>
                                        Realizar pago
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrito;
