import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.navigation}>
      <main>
        <div>
          <nav className={styles.navGeneral}>
            <a href="/">
              <img className={styles.logo} src="/assets/foxbel-music.png" />
            </a>
            <div className={styles.library}>
              <h3> Mi librería </h3>
              <a className={styles.fromLeft} href="#" > Recientes </a>
              <a className={styles.fromLeft} href="#"> Artistas </a>
              <a href="#"> Álbums </a>
              <a href="#"> Canciones</a>
              <a href="#"> Estaciones </a>
            </div>
            <div className={styles.playlist}>
              <h3> Playlist </h3>
              <a href="#"> Metal </a>
              <a href="#"> Para bailar </a>
              <a href="#"> Rock 90's </a>
              <a href="#"> Baladas </a>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
