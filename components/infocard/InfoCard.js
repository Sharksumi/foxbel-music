import styles from "./InfoCard.module.css";
import { getInfoArtist, getInfoAlbum } from "../../util/getInfo";
import { useEffect, useState } from "react";

export default function InfoCard() {
  const [artist, setArtist] = useState();
  const [album, setAlbum] = useState();

  useEffect(() => {
    const album = getInfoAlbum().then((response) => setAlbum(response));
  }, []);
  if (!album) {
    return null;
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img src={album.cover} className={styles.cover} />
          <div className={styles.info}>
            <div className={styles.text}>
              <div className={styles.albumTitle}>
                <p>{album.title}</p>
              </div>
              <div className={styles.description}>
                <p>
                  Discovery es el segundo álbum de estudio del dúo francés de
                  música house Daft Punk, lanzado en marzo de 2001.
                </p>
              </div>
              <div className={styles.infoCardBtns}>
              <button className={styles.playButton}> Reproducir </button>
              <button className={styles.followButton}> Seguir </button>
              <button className={styles.elipsisButton}> ... </button>
            </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
