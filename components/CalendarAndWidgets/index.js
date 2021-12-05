import styles from "../../styles/calendarart.module.scss";
import {dates} from "../variables";
import SwiperCore, {Scrollbar} from "swiper/core";


SwiperCore.use([Scrollbar]);

const CalendarAndWidgets = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.calendar}>
                    <h2 id={"calendario"} className={styles.subTitle}>Calendário</h2>
                    {dates.map((date) => (
                        <div className={styles.event} key={date.id}>
                            <div className={styles.date}>{date.date}</div>
                            <div className={styles.dateInfo}>
                                <span className={styles.dateTitle}>{date.dateTitle}</span> <br/>
                                {date.description}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.widgets}>
                    <div>
                        <h2 className={styles.subTitle}>Discord</h2>
                        <iframe src="https://discord.com/widget?id=831177746053988362&theme=dark" width="350"
                                height="500" allowtransparency="true" frameBorder="0"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                        </iframe>
                    </div>
                    <div>
                        <h2 className={styles.subTitle}>Spotify playlists</h2>
                        <div className={styles.playlist}>
                            <h3>Playlist name</h3>
                            <h4>Playlist description</h4>
                        </div>
                        <div className={styles.playlist}>
                            <h3>Playlist name</h3>
                            <h4>Playlist description</h4>
                        </div>
                        <div className={styles.playlist}>
                            <h3>Playlist name</h3>
                            <h4>Playlist description</h4>
                        </div>
                        <div className={styles.playlist}>
                            <h3>Playlist name</h3>
                            <h4>Playlist description</h4>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default CalendarAndWidgets;
