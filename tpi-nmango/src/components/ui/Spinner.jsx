import { Box, CircularProgress, Typography } from '@mui/material';

export default function Spinner({ message = "Cargando...", size = 40, color = "primary" }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(255,255,255,0.7)', // fondo semitransparente opcional
        zIndex: 1300, // por encima de todo
      }}
    >
      <CircularProgress size={size} color={color} />
      {message && (
        <Typography variant="body2" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
}