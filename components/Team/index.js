import React from "react";
import styles from "../../styles/team.module.scss";
import Link from "next/link";
import Image from "next/image";
import {team, defaultpfp} from "../variables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTwitter} from "@fortawesome/free-brands-svg-icons";

const Team = () => {
    return (
        <>
            <section className={styles.container}>
                <h2 id={'time'} className={styles.subTitle}>Nosso time</h2>
                <div className={styles.teamContainer}>
                        {team.map((member) => (
                            <section key={member.id}>
                                <div className={styles.member}>
                                    <div
                                        className={styles.profile}
                                        style={{
                                            backgroundImage: `url(${
                                                member.picture === "" ? defaultpfp : member.picture
                                            })`,
                                        }}
                                    />
                                    <div className={styles.memberInfo}>
                                        <p className={styles.text}>{member.name}</p>
                                        <p className={styles.occupation}>{member.occupation}</p>
                                        <Link href={member.link} passHref>
                                        <a target="_blank" rel="noopener noreferrer nofollow">
                                            <FontAwesomeIcon className={styles.socialIcon} icon={faTwitter}/>
                                        </a>
                                    </Link>
                                    </div>
                                </div>
                            </section>
                        ))}
                </div>
            </section>
        </>
    );
};

export default Team;
