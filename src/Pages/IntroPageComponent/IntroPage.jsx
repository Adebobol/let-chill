/* eslint-disable react/prop-types */

import Logo from "../../Components/LogoComponent/Logo";
import PageNav from "../../Components/PageNavComponent/PageNav";
import SearchBar from "../../Components/SearchComponent/SearchBar";
import SearchResults from "../../Components/SearchResultsComponents/SearchResults";
// import Trending from "../../Components/TrendingComponent/Trending";
import styles from "./IntroPage.module.css";

export default function IntroPage({
  setSearch,
  search,
  searchResult,
  onSelectId,
}) {
  return (
    <div className={styles.intro}>
      <nav className={styles.introNav}>
        <Logo />
        <div className={styles.introMiddle}>
          <SearchBar search={search} setSearch={setSearch} />
          <SearchResults searchResult={searchResult} onSelectId={onSelectId} />
        </div>
        <PageNav />
      </nav>
      {/* <Trending /> */}
    </div>
  );
}
