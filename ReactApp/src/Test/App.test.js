import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import App from '../components/App.js';
import '@testing-library/jest-dom';
import Catalogo from '../components/catalogo/catalogo.js';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../components/NavBar/NavBar.css', () => ({}));
jest.mock('../components/Login/Login.css', () => ({}));
jest.mock('../components/Catalogo/Catalogo.css', () => ({}));
jest.mock('../components/acerca/acerca.css', () => ({}));
jest.mock('../components/contacto/contacto.css', () => ({}));

test('Renderiza el título del catálogo correctamente', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const title = screen.getByText(/catalogo/i);
  expect(title).toBeInTheDocument();
});

test('Renderiza el título del Acerca correctamente', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const title = screen.getByText(/Acerca/i);
  expect(title).toBeInTheDocument();
});

test('Renderiza el título del Catalogo correctamente', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const title = screen.getByText(/Contactanos/i);
  expect(title).toBeInTheDocument();
});
test('Renderiza las imágenes de los productos correctamente', () => {
  render(
    <BrowserRouter>
      <Catalogo />
    </BrowserRouter>
  );

  // Encuentra todas las imágenes en base a su atributo alt
  const productImages = screen.getAllByRole('img', { name: /producto/i });

  // Verifica que todas las imágenes se hayan renderizado correctamente
  productImages.forEach((image) => {
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src'); // Verifica que tengan un atributo src
    expect(image).toHaveAttribute('alt'); // Verifica que tengan un atributo alt
  });
});
test('Renderiza la página de Contacto al hacer clic en el enlace "Contactanos"', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const contactanosLink = screen.getByText(/Contactanos/i);

  fireEvent.click(contactanosLink);

  const title = screen.getByText(/Contactos/i);
  expect(title).toBeInTheDocument();
});
test('Renderiza la página de Contacto al hacer clic en el enlace "Catalogo"', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const CatalogoLink = screen.getByText(/Catalogo/i);

  fireEvent.click(CatalogoLink);

  const title = screen.getByText(/Vestidos/i);
  expect(title).toBeInTheDocument();
});
test('Renderiza la página de Contacto al hacer clic en el enlace "Acerca de nosotros"', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const CatalogoLink = screen.getByText(/Acerca de Nosotros/i);

  fireEvent.click(CatalogoLink);

  const title = screen.getByText(/¿Quienes somos?/i);
  expect(title).toBeInTheDocument();
});
test('Filtra los productos correctamente al buscar vestidos en el catálogo', () => {
  render(
    <BrowserRouter>
      <Catalogo />
    </BrowserRouter>
  );

  // Encuentra el cuadro de búsqueda por su clase CSS
  const searchInput = screen.getByPlaceholderText('Buscar producto...');

  // Simula una búsqueda
  fireEvent.change(searchInput, { target: { value: 'Vestido' } });

  // Verifica que los productos relacionados con "Vestido" se muestren
  const vestidosProducts = screen.queryAllByText(/Vestido/i);

  // Verifica que la cantidad de productos coincida con la cantidad esperada
  expect(vestidosProducts.length).toBe(6); // Asegúrate de ajustar este valor según tus datos reales
});
test('Filtra los productos correctamente al buscar bolsos en el catálogo', () => {
  render(
    <BrowserRouter>
      <Catalogo />
    </BrowserRouter>
  );

  // Encuentra el cuadro de búsqueda por su clase CSS
  const searchInput = screen.getByPlaceholderText('Buscar producto...');

  // Simula una búsqueda
  fireEvent.change(searchInput, { target: { value: 'Bolso' } });

  // Verifica que los productos relacionados con "Vestido" se muestren
  const vestidosProducts = screen.queryAllByText(/Bolso/i);

  // Verifica que la cantidad de productos coincida con la cantidad esperada
  expect(vestidosProducts.length).toBe(4); // Asegúrate de ajustar este valor según tus datos reales
});
test('Filtra los productos correctamente al buscar collares en el catálogo', () => {
  render(
    <BrowserRouter>
      <Catalogo />
    </BrowserRouter>
  );

  // Encuentra el cuadro de búsqueda por su clase CSS
  const searchInput = screen.getByPlaceholderText('Buscar producto...');

  // Simula una búsqueda
  fireEvent.change(searchInput, { target: { value: 'Collar' } });

  // Verifica que los productos relacionados con "Vestido" se muestren
  const vestidosProducts = screen.queryAllByText(/Collar/i);

  // Verifica que la cantidad de productos coincida con la cantidad esperada
  expect(vestidosProducts.length).toBe(1); // Asegúrate de ajustar este valor según tus datos reales
});







