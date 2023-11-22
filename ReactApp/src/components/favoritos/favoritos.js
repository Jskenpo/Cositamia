import React from 'react';
import Button from 'react-bootstrap/Button';
import './favoritos.css';

function Favoritos({ favorite, setFavorite, addToCart }) {

    const handleRemoveProduct = (index) => {
        const updateFavorite = [...favorite];
        updateFavorite.splice(index, 1);
        setFavorite(updateFavorite);
    };

    const handleAddToCart = (product, index) => {
        console.log('Precio del producto:', product.precio);
        const precioNumerico = +product.precio;
        console.log('Precio convertido:', precioNumerico);
    
        if (!isNaN(precioNumerico)) {
            addToCart({
                ...product,
                precio: precioNumerico,
            });
            handleRemoveProduct(index);
        } else {
            console.error('Error al convertir el precio a un número válido');
        }
    };    

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo" style={{ color: "#C23532" }}>Productos Favoritos</h1>
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
                                    <th scope="col">Precio</th>
                                    <th scope="col" className="text-center">Descripción</th>
                                    <th scope="col" className="text-right">Agregar producto</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {favorite.map((item, index) => (
                                    <tr key={index}>
                                        <td><img src={item.img} alt={item.nombre} style={{ width: 'auto', height: '100px' }} /></td>
                                        <td>{item.nombre}</td>
                                        <td>{item.precio}</td>
                                        <td>
                                            {item.descripcion}
                                        </td>
                                        <td className="text-right">
                                            <Button
                                                variant="primary"
                                                style={{ backgroundColor: '#C23532', borderColor: '#C23532' }}
                                                onClick={() => handleAddToCart(item)}
                                            >
                                                Agregar al carrito
                                            </Button>
                                        </td>
                                        <td className="text-right">
                                            <button className="btn btn-sm btn-danger" onClick={() => handleRemoveProduct(index)}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favoritos;
