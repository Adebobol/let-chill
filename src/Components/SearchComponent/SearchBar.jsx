/* eslint-disable react/prop-types */
import styles from './SearchBar.module.css'
import {FaSearch} from "react-icons/fa";


export default function SearchIt({ setSearch, search }) {
  return (
    <div className={styles.search}>
      <FaSearch id="search-icons" />
      <input
        value={search}
        type="text"
        placeholder="Search LetChill"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
