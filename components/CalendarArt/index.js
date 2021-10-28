import styles from "../../styles/calendarart.module.scss";
import {dates, arts} from "../variables";

import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Scrollbar} from "swiper/core";

SwiperCore.use([Scrollbar]);

const CalendarArt = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.calendar}>
                    <h2 id={'calendario'} className={styles.subTitle}>Calendário</h2>
                        {dates.map((date) => (
                            <div className={styles.event} key={date.id}>
                                <div className={styles.date}>{date.date}</div>
                                <div className={styles.dateInfo}>
                                    <span className={styles.dateTitle}>{date.dateTitle}</span> <br />
                                    {date.description}
                                </div>
                            </div>
                        ))}
                </div>

                <div className={styles.swipercontainer}>
                    <h2 className={styles.subTitle}>Galeria de Arte</h2>

                    <Swiper
                        scrollbar={{
                            hide: true,
                        }}
                        className={styles.mySwiper}>
                        {arts.map((art) => (
                            <SwiperSlide className={styles.swiperslide} key={art.id}>
                                <div
                                    className={styles.artBackground}
                                    style={{backgroundImage: `url(${art.link})`}}
                                    alt={art.alt}
                                />
                                <p className={styles.credit}>
                                    By <strong>{art.credit}</strong> on {art.origin} - {art.alt}
                                </p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default CalendarArt;
