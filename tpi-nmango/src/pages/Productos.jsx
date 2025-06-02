import { useState, useEffect } from 'react';
import axios from 'axios';
import CardProducto from '../components/CardProducto';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProductos(res.data))
      .catch(err => setError('Error al cargar productos'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {productos.map(producto => <CardProducto key={producto.id} producto={producto} />)}
    </div>
  );
}
