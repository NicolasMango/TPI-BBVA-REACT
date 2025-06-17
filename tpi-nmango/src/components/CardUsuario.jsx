import { Card, CardContent, Typography } from '@mui/material';

function CardUsuario({ usuario }) {
  return (
    <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent>
        <Typography variant="h6">{usuario.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {usuario.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {usuario.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {usuario.address.street}, {usuario.address.city}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default CardUsuario;