import react from "react";
import styles from "../../styles/calendarart.module.scss";
import { dates } from "../variables";

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
			</section>
		</>
	);
};

export default CalendarArt;
