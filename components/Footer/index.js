import React from "react";
import Link from "next/link";
import Image from "next/image";
import lupuzLogo from "../../public/logo.png";
import discord from "../../public/discord.png";
import styles from "../../styles/footer.module.scss";

const Footer = () => {
	return (
		<>
			<section className={styles.container}>
				<div className={styles.left}>
					<Image className={styles.discord} src={discord} quality={100} />
					<p>Participe do nosso servidor</p>
				</div>
				<div className={styles.right}>
					<p>Lupuz Studio - 2021</p>
					<p>
						Designed and coded by <strong>tozeos</strong>
					</p>
				</div>
			</section>
		</>
	);
};

export default Footer;
