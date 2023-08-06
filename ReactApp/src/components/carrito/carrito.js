import React from "react";
import './carrito.css';

function Carrito() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo">Carrito de Compras</h1>
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
                                <tr>
                                    <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                    <td>Product Name Dada</td>
                                    <td>In stock</td>
                                    <td><input className="form-control" type="text" value="1" /></td>
                                    <td className="text-right">124,90 €</td>
                                    <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                                </tr>
                                <tr>
                                    <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                    <td>Product Name Toto</td>
                                    <td>In stock</td>
                                    <td><input className="form-control" type="text" value="1" /></td>
                                    <td className="text-right">33,90 €</td>
                                    <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                                </tr>
                                <tr>
                                    <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                                    <td>Product Name Titi</td>
                                    <td>In stock</td>
                                    <td><input className="form-control" type="text" value="1" /></td>
                                    <td className="text-right">70,00 €</td>
                                    <td className="text-right"><button className="btn btn-sm btn-danger"><i className="fa fa-trash"></i> </button> </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Sub-Total</td>
                                    <td className="text-right">255,90 €</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Shipping</td>
                                    <td className="text-right">6,90 €</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>Total</strong></td>
                                    <td className="text-right"><strong>346,90 €</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col mb-2">
                    <div className="row">
                        <div className="col-sm-12  col-md-6">
                            <button className="btn btn-block btn-light">Continuar Comprando</button>
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