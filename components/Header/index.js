import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/header.module.scss";
import lupuzLogo from "../../public/logo.png";

const Header = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <Link href="#sobre" passHref>
                            <a rel="noopener noreferrer nofollow">
                                Sobre
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#calendario" passHref>
                            <a rel="noopener noreferrer nofollow">
                                Calendário
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#time" passHref>
                            <a rel="noopener noreferrer nofollow">
                                Time
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <header className={styles.header}>
                <Image src={lupuzLogo} alt="Logo do estúdio"/>
            </header>
        </>
    );
};

export default Header;
