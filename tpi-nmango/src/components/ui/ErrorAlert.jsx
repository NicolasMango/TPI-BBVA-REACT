export default function ErrorAlert({ mensaje }) {
  return (
    <div style={{ color: 'red', background: '#ffeeee', padding: '10px', margin: '10px 0' }}>
      ⚠️ {mensaje}
    </div>
  );
}