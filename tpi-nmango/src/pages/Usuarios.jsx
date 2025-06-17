import { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import axios from 'axios';
import CardUsuario from '../components/CardUsuario';
import Spinner from '../components/Spinner';
import ErrorAlert from '../components/ErrorAlert';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsuarios(res.data))
      .catch(() => setError('Error al cargar usuarios'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorAlert mensaje={error} />;

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {usuarios.map(user => (
          <Grid item key={user.id} xs={12} sm={6} md={4} display="flex">
            <CardUsuario usuario={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}