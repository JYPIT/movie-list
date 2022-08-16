import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const imageURL = "https://image.tmdb.org/t/p/w300";

function Movie({ id, poster_path, title, rating, release_date, overview }) {
  return (
    <div>
      <img src={imageURL + poster_path} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link> ⭐{rating}
      </h2>
      <h3>{release_date}</h3>
      <p>{overview}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};
export default Movie;
