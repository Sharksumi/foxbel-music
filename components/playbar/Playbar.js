import styles from "./Playbar.module.css";

export default function Playbar() {
  // const playMusic = () => {
  //   {/* <i class="fa-solid fa-pause"></i> */}
  // }

  return (
    <div className={styles.wrapper}>
      <div className={styles.playbar}>
        <div className={styles.selectedSong}>
          <img className={styles.img} src="https://picsum.photos/200" />
          <div className={styles.songTextContainer}>
            <p className={styles.song}> Canción </p>
            <p className={styles.artist}> Artista - Álbum</p>
          </div>
        </div>
        <div className={styles.playButtons}>
          <button className="playerbutton playerbutton--back">
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button className="playerbutton playerbutton--play"
          // onClick={playMusic}
          >
            <i className="fa-solid fa-play"></i>
            
          </button>
          <button className="playerbutton playerbutton--next">
            <i className="fa-solid fa-forward-step"></i>
          </button>
        </div>

        <div className={styles.volume}>
          <button>
            <i className="playersound-on fa-solid fa-volume-xmark"></i>
          </button>
          <input className="playerrange" type="range" min="0" max="100" step="1" />
          <button className="playerbutton playermuted">
            <i className="player__sound-off fa-solid fa-volume-off"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
