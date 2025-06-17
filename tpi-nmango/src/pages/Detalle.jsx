import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Container , Box } from '@mui/material';
import axios from 'axios';

export default function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProducto(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Cargando...</div>;
  if (!producto) return <div>No encontrado</div>;

  return (

      <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Typography variant="h5">{producto.title}</Typography>
          <Typography variant="body1">{producto.description}</Typography>
          <Typography variant="subtitle1">Precio: ${producto.price}</Typography>
          <Typography variant="subtitle1">Categoría: {producto.category}</Typography>
        </CardContent>
      </Card>

  );
}