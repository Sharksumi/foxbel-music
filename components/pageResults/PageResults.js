import styles from "./PageResults.module.css";
import { useState, useEffect } from "react";
import { getInfoAlbum } from "../../util/getInfo";

export default function PageResults () {

  const [album, setAlbum] = useState();

  useEffect(() => {
    const album = getInfoAlbum().then((response) => setAlbum(response));
  }, []);
  if (!album) {
    return null;
  }else{

  return(
    <div className={styles.wrapper}>
     <h2> Resultados </h2>
     <div className={styles.results}>
        {album.tracks.data.map((el) => {
          return (
            <div key= {el.id} className={styles.resultCard}>
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
  )
}
}