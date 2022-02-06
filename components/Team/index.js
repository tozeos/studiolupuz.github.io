import React from "react";
import styles from "../../styles/team.module.scss";
import Link from "next/link";
import Image from "next/image";
import {team, defaultpfp} from "../variables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

const Team = () => {
    team.sort((a, b) => {
        let fn = a.name.toLowerCase(),
            sn = b.name.toLowerCase();
        if (fn < sn) {
            return -1;
        }
        if (fn > sn) {
            return 1;
        }
        return 0;
    })

    return (
        <>
            <section className={styles.container}>
                <h2 id={'time'} className={styles.subTitle}>Nossa equipe</h2>
                <div className={styles.teamContainer}>
                    {React.Children.toArray(team.map((member) => (
                        <section>
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
                                    {React.Children.toArray(member.occupations.map((occupation) => (
                                        <span className={styles.occupation}>{occupation}</span>
                                    )))}
                                    <br/>
                                    <Link href={member.link} passHref>
                                        <a target="_blank" rel="noopener noreferrer nofollow">
                                            <FontAwesomeIcon className={styles.socialIcon} icon={faTwitter}/>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </section>
                    )))}
                </div>
            </section>
        </>
    );
};

export default Team;