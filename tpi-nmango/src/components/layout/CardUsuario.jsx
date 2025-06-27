import { Card, CardContent, Typography, CardActionArea } from '@mui/material';

function CardUsuario({ usuario, onClick, selected }) {
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardActionArea
        onClick={onClick}
        data-active={selected ? '' : undefined}
        sx={{
          height: '100%',
          '&[data-active]': {
            bgcolor: 'action.selected',
            '&:hover': {
              bgcolor: 'action.selectedHover',
            },
          },
        }}
      >
        <CardContent sx={{ height: '100%' }}>
          <Typography variant="h6" component="div">
            {usuario.name}
          </Typography>
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
      </CardActionArea>
    </Card>
  );
}

export default CardUsuario;