import React from "react";
import { useNavigate } from 'react-router-dom';
import './carrito.css';

function Carrito({ cart, setCart }) {
    const navigate = useNavigate();

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
                    <h1 className="titulo">Tu Carrito</h1>
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
                            <button className="btn btn-block btn-light" onClick={handleClickCatalogo}>Continuar Comprando</button>
                        </div>
                        <div className="col-sm-12 col-md-6 text-right">
                            <button className="btn btn-lg btn-block btn-success text-uppercase">Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carrito;
