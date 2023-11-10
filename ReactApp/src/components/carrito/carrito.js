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

    const calculateCosts = () => {
        const subtotal = cart.reduce((total, item) => total + (parseFloat(item.precio) * item.cantidad), 0);
        const shipping = 100.00;
        const total = subtotal + shipping;

        return { subtotal, shipping, total };
    };
    const { subtotal, shipping, total } = calculateCosts();


    const [show, setShow] = useState(false);

    const [formDataOrden, setFormDataOrden] = useState({
        fecha: new Date(),
        idCliente: 0,
        subTotal: 0,
        envio: 100,
        total: 0
    });

    const [formDataSetDetalle, setFormDataSetDetalle] = useState({
        id_orden: "",
        sku: "",
        cantidad: "",
        precio: ""
    });

    const [formDataCliente, setFormDataCliente] = useState({
        nombre: "",
        nit: "",
        direccion: "",
        telefono: "",
        correo: "",
        cod_postal: ""
    });


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormDataCliente({ ...formDataCliente, [name]: value });
    };

    function realizarSolicitud() {
        const nit = parseInt(formDataCliente["nit"]);

        fetch(`http://localhost:3161/cliente/${nit}`)
            .then(response => response.json())
            .then(data => {

                if (data.length > 0) {
                    // Mostrar la información del cliente en el resultadoDiv
                    const cliente = data[0];
                    const idCliente = cliente["id_cliente"];
                    console.log(idCliente + " funcion"); // Imprimir el ID del cliente
                    return idCliente;
                }
                return null;
            })
            .catch(error => {
                console.error('Error:', error);
            });
        
    }

    const handleSubmit = async () => {
        try {
            // Obtención de clientes
            let idCliente = -1;

            let idClt = realizarSolicitud();

            console.log(idClt+ "idClt");

            
            if (idClt == null) {

                //console.log(formDataCliente); // Imprimir el ID del cliente
                //console.log(JSON.stringify(formDataCliente)); // Imprimir el ID del cliente

                const json = JSON.stringify(formDataCliente);
                fetch('http://localhost:3161/cliente', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: json
                    })
                    .then(response => response.json())
                    .then(data => {
                        //console.log(data); // Aquí puedes manejar la respuesta del servidor
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            
                const nit = parseInt(formDataCliente["nit"]);
                var iDcliente = 0;
                fetch(`http://localhost:3161/cliente/${nit}`)
                    .then(response => response.json())
                    .then(data => {
                        //console.log(data);
        
                        if (data.length > 0) {
                        // Mostrar la información del cliente en el resultadoDiv
                        const cliente = data[0];
                        iDcliente = cliente["id_cliente"];
                        console.log(idCliente + " fuera de funcion"); // Imprimir el ID del cliente
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                

                setFormDataOrden({
                    fecha: new Date(),
                    idCliente: iDcliente,
                    subTotal: calculateCosts().subtotal,
                    envio: shipping,
                    total: calculateCosts().total
                });

                fetch('http://localhost:3161/orden', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataOrden)
                }).then(response => response.json())
                .catch(error => {
                    console.error('Error:', error);
                });
/*
                
                fetch('http://localhost:3161/LastOrder', {
                    method: 'GET'
                });
                const dataOrden = await getOrden.json();

                for(let i = 0; i < cart.length; i++) {
                    setFormDataSetDetalle({
                        id_orden: dataOrden['id_orden'],
                        sku: cart[i]['sku'],
                        cantidad: cart[i]['cantidad'],
                        precio: cart[i]['precio']
                    });

                    fetch('http://localhost:3161/ordenDetalle', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formDataSetDetalle)
                    });
                }*/
            } else {
                setFormDataOrden({
                    fecha: new Date(),
                    idCliente: idClt,
                    subTotal: calculateCosts().subtotal,
                    envio: shipping,
                    total: calculateCosts().total
                });
                
                //console.log(formDataOrden); // Imprimir el ID del cliente

                fetch('http://localhost:3161/orden', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formDataOrden)
                })
/*
                
                fetch('http://localhost:3161/LastOrder', {
                    method: 'GET'
                });
                const dataOrden = await getOrden.json();

                for(let i = 0; i < cart.length; i++) {
                    setFormDataSetDetalle({
                        id_orden: dataOrden['id_orden'],
                        sku: cart[i]['sku'],
                        cantidad: cart[i]['cantidad'],
                        precio: cart[i]['precio']
                    });

                    fetch('http://localhost:3161/ordenDetalle', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formDataSetDetalle)
                    });
                }*/
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleRemoveProduct = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart); // Actualiza el estado del carrito
    };

    
    
    const handleClickCatalogo = () => {
        navigate('/catalogo');
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo" style={{ color: "#C23532" }}>Tu Carrito</h1>
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
                            <button className="btn btn-block btn-light" onClick={handleClickCatalogo} style={{ backgroundColor: '#E5948F', borderColor: '#E5948F', color: "#ffffff" }}>Continuar Comprando</button>
                        </div>
                        <div className="col-sm-12 col-md-6 text-right">
                            <button className="btn btn-lg btn-block btn-success text-uppercase" onClick={handleShow} style={{ backgroundColor: '#C23532', borderColor: '#C23532' }}>Realizar pedido</button>

                            <Modal show={show} onHide={handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Realizar Pedido</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridName">
                                                <Form.Label>Nombre y apellido</Form.Label>
                                                <Form.Control type="name" name="nombre" placeholder="Nombre" onChange={handleInputChange} />
                                            </Form.Group>
                                        </Row>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Correo</Form.Label>
                                                <Form.Control type="email" name="correo" placeholder="Correo" onChange={handleInputChange} />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label>Teléfono</Form.Label>
                                                <Form.Control type="tel" name="telefono" placeholder="Teléfono" onChange={handleInputChange} />
                                            </Form.Group>
                                        </Row>

                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>NIT</Form.Label>
                                            <Form.Control type="text" name="nit" placeholder="NIT" onChange={handleInputChange} />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            <Form.Label>Dirección</Form.Label>
                                            <Form.Control type="text" name="direccion" placeholder="Calle, avenida, zona" onChange={handleInputChange} />
                                        </Form.Group>

                                        <Row className="mb-3">
                                            <Form.Group as={Col} controlId="formGridZip">
                                                <Form.Label>Código postal</Form.Label>
                                                <Form.Control type="text" name="cod_postal" onChange={handleInputChange} />
                                            </Form.Group>
                                        </Row>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: '#E5948F', borderColor: '#E5948F' }}>
                                        Cancelar
                                    </Button>
                                    <Button variant="primary" onClick={handleSubmit} style={{ backgroundColor: '#C23532', borderColor: '#C23532' }}>
                                        Realizar pedido
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
