import React from "react";
import Link from "next/link";
import Image from "next/image";
import discord from "../../public/discord.png";
import styles from "../../styles/footer.module.scss";
import {websiteName} from "../variables";

const Footer = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.left}>
                    <Link href="https://discord.gg/7xVHHshgmp" passHref>
                        <a target="_blank" rel="noopener noreferrer nofollow">
                            <Image className={styles.discord} src={discord} quality={100}/>
                        </a>
                    </Link>

                    <p>Participe do nosso servidor</p>
                </div>
                <div className={styles.right}>
                    <p>
                        <span className={styles.highlight}>{websiteName}</span> -{" "}
                        {new Date().getFullYear()}
                    </p>
                    <p>
                        Designed and coded by
                        <Link href="http://tozeos.github.io" passHref>
                            <a
                                className={styles.highlight}
                                target="_blank"
                                rel="noopener noreferrer nofollow">
                                {" "}tozeos
                            </a>
                        </Link><br />
                        <span className={styles.version}>Version 1.0</span>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Footer;
