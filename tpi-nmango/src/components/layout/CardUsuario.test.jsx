import { test, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardUsuario from './CardUsuario';

const usuarioMock = {
  name: 'Juan Pérez',
  username: 'juanp',
  email: 'juan@example.com',
  address: {
    street: 'Calle Falsa 123',
    city: 'Springfield',
  },
};

test('muestra los datos del usuario', () => {
  render(<CardUsuario usuario={usuarioMock} />);
  expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
  expect(screen.getByText('juanp')).toBeInTheDocument();
  expect(screen.getByText('juan@example.com')).toBeInTheDocument();
  expect(screen.getByText('Calle Falsa 123, Springfield')).toBeInTheDocument();
});

test('llama a onClick cuando se hace click', () => {
  const handleClick = vi.fn();
  render(<CardUsuario usuario={usuarioMock} onClick={handleClick} />);
  screen.getByRole('button').click();
  expect(handleClick).toHaveBeenCalled();
});