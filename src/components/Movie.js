import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

const imageURL = "https://image.tmdb.org/t/p/w300";

function Movie({ id, poster_path, title, rating, release_date, overview }) {
  return (
    <div className={styles.movie}>
      <img src={imageURL + poster_path} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link> ⭐{rating}
        </h2>
        <h3 className={styles.movie__release}>{release_date}</h3>
        <p>{overview.length > 235 ? `${overview.slice(0, 235)}...` : overview}</p>
      </div>
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
