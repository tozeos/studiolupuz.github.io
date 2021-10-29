import React from "react";
import Image from "next/image";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
    faDiscord,
    faInstagram,
    faPatreon,
    faPinterest,
    faTelegramPlane,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {websiteAbout, websiteName} from "../variables";
import styles from "../../styles/about.module.scss";
import lupo from "../../public/lupo.png";

const About = () => {
    return (
        <section className={styles.container}>
            <div id={"sobre"} className={styles.text}>
                <h1>Sobre o {websiteName}</h1>
                <p>
                    {websiteAbout}
                </p>

                <ul className={styles.social}>
                    <li>
                        <Link href="https://twitter.com/LupuzStudio" passHref>
                            <a target="_blank" rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faTwitter} fixedWidth/>
                            </a>
                        </Link>
                    </li>
{/*                    <li>
                        <Link href="/" passHref>
                            <a rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faInstagram} fixedWidth/>
                            </a>
                        </Link>
                    </li>*/}
                    <li>
                        <Link href="https://t.me/studiolupuz" passHref>
                            <a target="_blank" rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faTelegramPlane} fixedWidth/>
                            </a>
                        </Link>
                    </li>
{/*                    <li>
                        <Link href="/" passHref>
                            <a rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faYoutube} fixedWidth/>
                            </a>
                        </Link>
                    </li>*/}
{/*                    <li>
                        <Link href="/" passHref>
                            <a rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faPinterest} fixedWidth/>
                            </a>
                        </Link>
                    </li>*/}
                    <li>
                        <Link href="https://discord.gg/7xVHHshgmp" passHref>
                            <a target="_blank" rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faDiscord} fixedWidth/>
                            </a>
                        </Link>
                    </li>
{/*                    <li>
                        <Link href="/" passHref>
                            <a rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faPatreon} fixedWidth/>
                            </a>
                        </Link>
                    </li>*/}
                    <li>
                        <Link href="mailto:contato@studiolupuz.com.br" passHref>
                            <a rel="noopener noreferrer nofollow">
                                <FontAwesomeIcon icon={faEnvelope} fixedWidth/>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.lupoContainer}>
                <Image src={lupo} alt="Mascote Lupo"/>
            </div>
        </section>
    );
};

export default About;
