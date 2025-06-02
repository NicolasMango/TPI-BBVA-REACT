import { useParams } from 'react-router-dom';

export default function Detalle() {
  const { id } = useParams();
  return <h2>Detalle del ítem con ID: {id}</h2>;
}
