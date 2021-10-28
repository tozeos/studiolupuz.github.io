import React from "react";
import Image from "next/image";
import styles from "../../styles/about.module.scss";
import lupo from "../../public/lupo.png";
import {websiteAbout, websiteName} from "../variables";

const About = () => {
    return (
        <section className={styles.container}>
            <div id={'sobre'} className={styles.text}>
                <h1>Sobre o {websiteName}</h1>
                <p>
                    {websiteAbout}
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
                <Image src={lupo} alt="Mascote Lupo"/>
            </div>
        </section>
    );
};

export default About;
