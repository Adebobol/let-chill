/* eslint-disable react/prop-types */
import Logo from "../Components/LogoComponent/Logo";
import PageNav from "../Components/PageNavComponent/PageNav";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Logo />
      <PageNav />
    </div>
  );
}
