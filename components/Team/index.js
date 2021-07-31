import React from "react";
import Image from "next/image";
import styles from "../../styles/team.module.scss";
import { team } from "../variables";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

const Team = () => {
	return (
		<>
			<section className={styles.container}>
				<h2 className={styles.subTitle}>Nosso time</h2>
				<div className={styles.swipercontainer}>
					<Swiper
						slidesPerView={3}
						spaceBetween={0}
						navigation={true}
						grabCursor={true}
						breakpoints={{
							"@0.00": {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							"@0.75": {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							"@1.00": {
								slidesPerView: 3,
								spaceBetween: 40,
							},
							"@1.50": {
								slidesPerView: 4,
								spaceBetween: 0,
							},
						}}
						className={styles.mySwiper}
					>
						{team.map((member) => (
							<SwiperSlide key={member.id}>
								<div className={styles.member}>
									<div
										className={styles.profile}
										style={{ backgroundImage: `url(${member.picture})` }}
									/>
									<p className={styles.text}>{member.name}</p>
									<p className={styles.occupation}>{member.occupation}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default Team;
