import styles from "./SearchComponent.module.css";

export default function Search() {
  return (
    <div className={styles.headerSearch}>
      <img src="/search.png" className={styles.searchImg} alt="search" />
      <input 
        type="text" 
        className={styles.searchInput} 
        placeholder="Введите название..." 
      />
    </div>
  );
}
