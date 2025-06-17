import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CardProducto({ producto }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}
      onClick={() => navigate(`/detalle/${producto.id}`)}
    >
      <CardContent>
        <Typography variant="h6">{producto.title}</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {producto.description}
        </Typography>
        <Typography variant="body1" color="primary">
          ${producto.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CardProducto;