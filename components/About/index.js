import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/about.module.scss";
import lupo from "../../public/lupo.png";

const About = () => {
	return (
		<section className={styles.container}>
			<div className={styles.text}>
				<h1>About Studio Lupuz</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi
					maiores tenetur in velit minima rem ad deleniti nisi est totam ex
					ipsam praesentium corrupti quibusdam nesciunt, eius reiciendis
					cupiditate harum. Eveniet repellat, consequatur maiores perspiciatis
					aut earum eaque harum corporis libero itaque labore possimus
					blanditiis cumque deleniti id! Atque.
				</p>

				{/* <ul className={styles.social}>
					<li>
						<Link href="/" passHref>
							<a target="_blank" rel="noopener noreferrer nofollow">
								Twitter
							</a>
						</Link>
					</li>
					<li>
						<Link href="/" passHref>
							<a target="_blank" rel="noopener noreferrer nofollow">
								Discord
							</a>
						</Link>
					</li>
					<li>
						<Link href="/" passHref>
							<a target="_blank" rel="noopener noreferrer nofollow">
								Instagram
							</a>
						</Link>
					</li>
				</ul> */}
			</div>
			<div className={styles.lupoContainer}>
				<Image src={lupo} alt="Mascote Lupo" />
			</div>
		</section>
	);
};

export default About;
