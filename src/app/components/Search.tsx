import Image from "next/image";
import styles from "../page.module.css";

const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <input type="text" name="search" autoComplete="off" placeholder="Search, Explore, Drive, Enjoy" />
      <div className={styles.search__Icon}>
        <Image src="/icons/search.svg" alt="search" width={16} height={16} />
      </div>
    </div>
  );
};

export default Search;
