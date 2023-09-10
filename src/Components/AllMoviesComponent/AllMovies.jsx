/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./AllMovies.module.css";

export default function AllMovies({ result }) {
  const { imdbID, Title, Type } = result;
  return (
    <Link to={`${imdbID}?tit=${Title}&typ=${Type}`} className={styles.all}>
      <img src={result.Poster} alt={result.Title} />
      <div className={styles.middle}>
        <h3>{result.Title}</h3>
        <p>{result.Year}</p>
        <p>{result.Actors}</p>
      </div>
    </Link>
  );
}
