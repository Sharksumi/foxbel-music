import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSearch } from "../../util/getInfo";
import styles from "../../styles/Tracks.module.css";

export default function Tracks() {
  const [searchResult, setSearchResult] = useState([]);
  const router = useRouter();
  const { search } = router.query;

  useEffect(() => {
    getSearch(search).then((response) => setSearchResult(response.data));
  });
  return (
    <>
    <div className={styles.wrapper}>
      <h2 className={styles.h2}> Resultados </h2>
      <div className={styles.results} id="resultsWrapper">
        {searchResult.map((el) => {
          return (
            <div key={el.id} className={styles.resultCard}>
              <div className={styles.playicon}>
              <img src={el.album.cover} />
              </div>
              <p className={styles.title} > {el.title}</p>
              <p className={styles.artist}> {el.artist.name}</p>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}
