export default function CardProducto({ producto }) {
  return (
    <div>
      <h3>{producto.title}</h3>
      <p>{producto.price} USD</p>
    </div>
  );
}