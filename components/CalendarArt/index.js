import react from "react";
import styles from "../../styles/calendarart.module.scss";
import Image from "next/image";
import { dates, arts } from "../variables";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper/core";

import { lupopc } from "../../public/lupopng.png";

SwiperCore.use([Scrollbar]);

const CalendarArt = () => {
	return (
		<>
			<section className={styles.container}>
				<div className={styles.calendar}>
					<h2 className={styles.subTitle}>Calendário</h2>
					<div>
						{dates.map((date) => (
							<p className={styles.event} key={date.id}>
								<span>{date.date}</span>
								{date.description}
							</p>
						))}
					</div>
				</div>

				<div className={styles.swipercontainer}>
					<h2 className={styles.subTitle}>Galeria de Arte</h2>

					<Swiper
						scrollbar={{
							hide: true,
						}}
						className={styles.mySwiper}
					>
						{arts.map((art) => (
							<SwiperSlide className={styles.swiperslide} key={art.id}>
								<div
									className={styles.artBackground}
									style={{ backgroundImage: `url(${art.link})` }}
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
