import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import DetailGenre from "./DetailGenre";

const KEY = "89908202";
export default function Detail() {
  const [movie, setMovie] = useState({});
  let genreArray = movie.Genre?.split(",");
  const { detail } = useParams();

  useEffect(
    function () {
      async function fetchDetails() {
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&i=${detail}`
          );
          const data = await res.json();
          console.log(data);
          setMovie(data);
        } catch (err) {
          console.error(err.message);
        }
      }
      fetchDetails();
    },
    [detail]
  );

  return (
    <div className={styles.detail}>
      <div className={styles.detailPage}>
        <img src={movie.Poster} alt="" />

        <div className={styles.detailRight}>
          <h3>
            Director <p> {movie.Director} </p>
          </h3>
          <hr />
          <h3>
            Writers <p> {movie.Writer} </p>
          </h3>
          <hr />
          <h3>
            Stars <p> {movie.Actors} </p>
          </h3>
          <hr />
        </div>
      </div>
      <div className={styles.detailGenre}>
        {genreArray?.map((per) => (
          <DetailGenre per={per} key={movie.imdbID} />
        ))}
      </div>
      <div>{movie.Plot}</div>
    </div>
  );
}
