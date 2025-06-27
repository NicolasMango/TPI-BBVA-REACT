import { Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CardProducto({ producto }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345, width: "100%", height: "100%" }}>
      <CardActionArea onClick={() => navigate(`/detalle/${producto.id}`)}>
        <CardMedia
          component="img"
          height="180"
          image={producto.image}
          alt={producto.title}
          sx={{ objectFit: 'contain', bgcolor: '#fafafa' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {producto.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }} noWrap>
            {producto.description}
          </Typography>
          <Typography variant="body1" color="primary">
            ${producto.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default CardProducto;