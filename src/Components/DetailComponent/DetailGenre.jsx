/* eslint-disable react/prop-types */
import styles from "./Detail.module.css";
export default function DetailGenre({ per }) {
  return (
    <div>
      <div className={styles.detailEach}>{per}</div>
    </div>
  );
}
