import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardProducto from './CardProducto';

const productoMock = {
  id: 1,
  title: 'Producto de prueba',
  description: 'Descripción de prueba',
  price: 99.99,
  image: 'https://via.placeholder.com/150',
};

test('muestra los datos del producto', () => {
  render(
    <MemoryRouter>
      <CardProducto producto={productoMock} />
    </MemoryRouter>
  );

  expect(screen.getByText('Producto de prueba')).toBeInTheDocument();
  expect(screen.getByText('Descripción de prueba')).toBeInTheDocument();
  expect(screen.getByText('$99.99')).toBeInTheDocument();
  expect(screen.getByAltText('Producto de prueba')).toBeInTheDocument();
});