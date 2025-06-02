import { useState, useEffect } from 'react';
import axios from 'axios';
import CardUsuario from '../components/CardUsuario';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsuarios(res.data))
      .catch(err => setError('Error al cargar usuarios'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {usuarios.map(user => <CardUsuario key={user.id} usuario={user} />)}
    </div>
  );
}
