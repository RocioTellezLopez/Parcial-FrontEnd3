import '../Styles/Card.module.css'

const Card = ({name, seasons, episode}) => {
  return (
    <div className="card">
      <p>Nombre de la Serie: {name}</p>
      <p>Número de Temporadas: {seasons}</p>
      <p>Episodio Favorito: {episode}</p>
    </div>
  );
};

export default Card;
