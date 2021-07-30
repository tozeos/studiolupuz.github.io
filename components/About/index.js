import React from "react";
import Image from "next/image";
import styles from "../../styles/about.module.scss";
import lupo from "../../public/lupo.png";

const About = () => {
	return (
		<section className={styles.container}>
			<div className={styles.text}>
				<h1>About Lupuz</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi
					maiores tenetur in velit minima rem ad deleniti nisi est totam ex
					ipsam praesentium corrupti quibusdam nesciunt, eius reiciendis
					cupiditate harum. Eveniet repellat, consequatur maiores perspiciatis
					aut earum eaque harum corporis libero itaque labore possimus
					blanditiis cumque deleniti id! Atque.
				</p>

				<ul className={styles.social}>
					<li>
						<a href="/">Twitter</a>
					</li>
					<li>
						<a href="/">Discord</a>
					</li>
					<li>
						<a href="/">Instagram</a>
					</li>
				</ul>
			</div>
			<div className={styles.lupoContainer}>
				<Image src={lupo} alt="Mascote Lupo" />
			</div>
		</section>
	);
};

export default About;
