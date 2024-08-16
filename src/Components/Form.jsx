import { useState } from "react";
import Card from "./Card";
import Error from "./Error";
import '../Styles/From.module.css'

const Form = () => {
  const [movie, setMovie] = useState({
    name: "",
    seasons: "",
    episode: "",
  });
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setMovie({ ...movie, name: e.target.value });
  };

  const handleSeasons = (e) => {
    setMovie({ ...movie, seasons: e.target.value });
  };

  const handleEpisode = (e) => {
    setMovie({ ...movie, episode: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      movie.name.trim().length >= 3 &&
      !movie.name.startsWith(" ") &&
      movie.episode.trim().length >= 6
    ) {
      setFlag(true);
      setError(false);
      console.log(movie);
    } else {
      setFlag(false);
      setError(true);
      console.log(movie);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Nombre de la serie: </label>
        <input type="text" value={movie.name} onChange={handleName} />
        <label>Número de temporadas: </label>
        <input type="number" value={movie.seasons} onChange={handleSeasons} />
        <label>Episodio favorito: </label>
        <input type="text" value={movie.episode} onChange={handleEpisode} />
        <button type="submit">Enviar</button>
      </form>
      {flag ? (
        <Card
          name={movie.name}
          seasons={movie.seasons}
          episode={movie.episode}
        />
      ) : null}
      {error ? <Error /> : null}
    </div>
  );
};

export default Form;
