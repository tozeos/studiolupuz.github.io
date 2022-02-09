import styles from "../../styles/calendarart.module.scss";
import React from "react";
import {dates, playlists} from "../variables";
import Link from 'next/link';

const CalendarAndWidgets = () => {
    return (
        <>
            <section id={"calendario"} className={styles.container}>
                <div className={styles.calendar}>
                    <h2 className={styles.subTitle}>Calendário</h2>
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
                        <iframe src="https://discord.com/widget?id=831177746053988362&theme=dark"
                                height="500" width="100%" allowtransparency="false" frameBorder="0"
                                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                        </iframe>
                    </div>
                </div>
                <div className={styles.widgets}>
                    <h2 className={styles.subTitle}>Spotify playlists</h2>
                    {playlists.map((playlist, i) => (
                        <Link key={i} href={playlist.link} passhref>
                            <a className={styles.playlist} target="_blank" rel="noopener noreferrer nofollow">
                                <h3>{playlist.name}</h3>
                                <h4>{playlist.desc}</h4>
                            </a>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CalendarAndWidgets;
