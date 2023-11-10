import React, { useEffect, useState } from 'react';
import ProductCard from '../productCard/productCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './catalogo.css';

function Catalogo({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showCategories, setShowCategories] = useState({ ArreglosF: true, Globos: true, CanastaRegalos: true, CanastaF: true, Regalos: true });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const categoriesResponse = await fetch('http://localhost:3161/categorias');
      const categories = await categoriesResponse.json();
      const allProducts = {};
  
      for (const category of categories) {
        const productsResponse = await fetch(`http://localhost:3161/arreglos/${category.id_categoria}`);
        const products = await productsResponse.json();
  
        // Fetch images from FileServer_Flores
        const imagesResponse = await fetch(`http://localhost:3070/arreglos/${category.id_categoria}`);
        const images = await imagesResponse.json();
  
        // Combine products and images
        const productsWithImages = products.map((product, index) => ({
          ...product,
          imagen: images[index]?.imagen ? `data:image/jpeg;base64,${images[index].imagen}` : null,
        }));
  
        allProducts[category.id_categoria] = productsWithImages;
      }
  
      setProducts(allProducts);
      console.log('Products:', allProducts);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleShow = (breakpoint, product) => {
    addToCart(product);
    setFullscreen(breakpoint);
    setShow(true);
    setSelectedProduct(product);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleCategory = (category) => {
    setShowCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  const filterProducts = (categoryId) => {
    const categoryProducts = products[categoryId];
    if (categoryProducts) {
      // Itera sobre las claves del objeto y accede a los productos
      return Object.keys(categoryProducts).map((key) => categoryProducts[key]);
    }
    return [];
  };

  return (
    <div className="container">
      <div className='Busqueda'>
        <div className="icono">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="rectangle">
          <input
            type="text"
            className="textbox"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Buscar producto..."
          />
        </div>
        <div className="filtros">
          <button onClick={toggleFilters}><FontAwesomeIcon icon={faFilter} />Filtros</button>
        </div>
      </div>

      {showFilters && (
        <div className="filters-container">
          <h2 style={{ marginTop: '1rem' }}>Categorías</h2>
          <label>
            <input
              type="checkbox"
              checked={showCategories.ArreglosF}
              onChange={() => toggleCategory('ArreglosF')}
            />
            Arreglos Florales
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={showCategories.Globos}
              onChange={() => toggleCategory('Globos')}
            />
            Globos
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={showCategories.CanastaRegalos}
              onChange={() => toggleCategory('CanastaRegalos')}
            />
            Canastas de Regalos
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={showCategories.CanastaF}
              onChange={() => toggleCategory('CanastaF')}
            />
            Canastas de Flores
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={showCategories.Regalos}
              onChange={() => toggleCategory('Regalos')}
            />
            Regalos
          </label>
        </div>
      )}

      <div className="ArreglosF">
        {showCategories.ArreglosF && (
          <h1>Arreglos de Flores</h1>
        )}
        {showCategories.ArreglosF && (
          console.log(products[1]),
          <div className="product-container">
            {filterProducts(1).map((product, index) => (
              <div className={`product${index + 1}`} key={index}>
                <ProductCard
                  nombre={product["Nombre del Arreglo"]}
                  precio={'Q'+product.Precio+'.00'}
                  img={product.imagen}
                  sku={product.SKU}
                  addToCart={addToCart}
                  handleShow={handleShow}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="Globos">
        {showCategories.Globos && (
          <h1>Globos</h1>
        )}
        {showCategories.Globos && (
          console.log(products[2]),
          <div className="product-container">
            {filterProducts(2).map((product, index) => (
              <div className={`product${index + 1}`} key={index}>
                <ProductCard
                  nombre={product["Nombre del Arreglo"]}
                  precio={'Q'+product.Precio+'.00'}
                  img={product.imagen}
                  sku={product.SKU}
                  addToCart={addToCart}
                  handleShow={handleShow}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="CanastaRegalos">
        {showCategories.CanastaRegalos && (
          <h1>Canastas de Regalos</h1>
        )}
        {showCategories.CanastaRegalos && (
          console.log(products[3]),
          <div className="product-container">
            {filterProducts(3).map((product, index) => (
              <div className={`product${index + 1}`} key={index}>
                <ProductCard
                  nombre={product["Nombre del Arreglo"]}
                  precio={'Q'+product.Precio+'.00'}
                  img={product.imagen}
                  sku={product.SKU}
                  addToCart={addToCart}
                  handleShow={handleShow}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="CanastaF">
        {showCategories.CanastaF && (
          <h1>Canastas de Flores</h1>
        )}
        {showCategories.CanastaF && (
          console.log(products[4]),
          <div className="product-container">
            {filterProducts(4).map((product, index) => (
              <div className={`product${index + 1}`} key={index}>
                <ProductCard
                  nombre={product["Nombre del Arreglo"]}
                  precio={'Q'+product.Precio+'.00'}
                  img={product.imagen}
                  sku={product.SKU}
                  addToCart={addToCart}
                  handleShow={handleShow}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="Regalos">
        {showCategories.Regalos && (
          <h1>Regalos</h1>
        )}
        {showCategories.Regalos && (
          console.log(products[5]),
          <div className="product-container">
            {filterProducts(5).map((product, index) => (
              <div className={`product${index + 1}`} key={index}>
                <ProductCard
                  nombre={product["Nombre del Arreglo"]}
                  precio={'Q'+product.Precio+'.00'}
                  img={product.imagen}
                  sku={product.SKU}
                  addToCart={addToCart}
                  handleShow={handleShow}
                />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default Catalogo;
