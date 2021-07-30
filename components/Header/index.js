import React from "react";
import Image from "next/image";
import styles from "../../styles/header.module.scss";
import lupuzLogo from "../../public/logo.png";

const Header = () => {
	return (
		<>
			<nav className={styles.navbar}>
				<ul>
					<li>
						<a href="/">Link 1</a>
					</li>
					<li>
						<a href="/">Link 2</a>
					</li>
					<li>
						<a href="/">Link 3</a>
					</li>
				</ul>
			</nav>

			<header className={styles.header}>
				<Image src={lupuzLogo} alt="Logo do estúdio" />
			</header>
		</>
	);
};

export default Header;
