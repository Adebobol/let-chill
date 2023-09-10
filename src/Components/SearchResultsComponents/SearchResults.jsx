/* eslint-disable react/prop-types */

import AllMovies from "../../Components/AllMoviesComponent/AllMovies";
import styles from "./SearchResults.module.css";

export default function SearchResults({searchResult, onSelectId}) {
  return (
    <div className={styles.result}>
      {searchResult?.map((result) => (
        <AllMovies result={result} key={result.imdbID} onSelectId={onSelectId} />
      ))}
    </div>
  );
}
