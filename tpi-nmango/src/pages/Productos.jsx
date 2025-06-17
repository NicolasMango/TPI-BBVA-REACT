import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import CardProducto from '../components/CardProducto';
import Spinner from '../components/Spinner';
import ErrorAlert from '../components/ErrorAlert';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProductos(res.data))
      .catch(() => setError('Error al cargar productos'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert mensaje={error} />;

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {productos.map(producto => (
          <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3} display="flex">
            <CardProducto producto={producto} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}