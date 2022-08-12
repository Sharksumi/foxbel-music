import styles from "./Search.module.css";
import { useState } from "react"
import { useRouter } from "next/router"

export default function SearchBar() {
  const [search, setSearch ] = useState("");

  const router = useRouter()

  const clickSearch = () => {
    router.push(`/tracks?search=${search}`)

  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.general}>
        <div>
          <form key="form" onSubmit={clickSearch}>
          <input
          className={styles.inputSearch}
          name="search"
          value={search}
          type="text"
          placeholder="Buscar"
          onChange={(e) => setSearch(e.target.value)}
          />
          </form>
        </div>
        <button
        onClick={clickSearch}
        className={styles.button}>
          <i className="material-icons">search</i>
        </button>
      </div>
    </div>
  );
}
