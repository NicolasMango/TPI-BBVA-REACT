export default function CardUsuario({ usuario }) {
  return (
    <div>
      <h3>{usuario.name}</h3>
      <p>{usuario.email}</p>
    </div>
  );
}