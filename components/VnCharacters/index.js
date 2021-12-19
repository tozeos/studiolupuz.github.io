import React, {useState} from "react";
import styles from "../../styles/vncharacters.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";

const VnCharacters = () => {
    const [character, setCharacter] = useState(characterDetails[0])

    function changeCharacter(id) {
        setCharacter(characterDetails[id])
    }

    return (
        <>
            <section id={"personagens"} className={styles.container}>
                <h2 className={styles.subTitle}>Personagens</h2>
                <article className={styles.info}>
                    <div className={styles.character}>
                        <Image alt={"imagem aleatória"} src="/gallery/axel.webp" width={384} height={467}
                               layout={"fixed"}/>
                    </div>
                    <div className={styles.bio}>
                        <h3 className={styles.name}>{character.name}</h3>
                        <p className={styles.biotext}>{character.biography}</p>
                        <br/>
                        <h4>Características</h4>
                        <ul className={styles.caracteristicas}>
                            {character.traits.map((trait, i) => (
                                <li key={i}>{trait}</li>
                            ))}
                        </ul>
                        <div className={styles.characterwrapper}>
                            <h4>Mais personagens</h4>
                            <ul className={styles.characterlist}>
                                <li>
                                    <div className={styles.others}>
                                        <div className={styles.card} onClick={(event => changeCharacter(0))}>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className={styles.others}>
                                        <div className={styles.card} onClick={(event => changeCharacter(1))}>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className={styles.others}>
                                        <div className={styles.card} onClick={(event => changeCharacter(2))}>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className={styles.others}>
                                        <div className={styles.card} onClick={(event => changeCharacter(3))}>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default VnCharacters;
<<<<<<< HEAD

const characterDetails = [
    {
        id: 0,
        profilePic: "Axel",
        name: "Axel",
        biography: "Nulla sapien erat, sollicitudin blandit orci eu, varius sodales lectus. Sed bibendum, magna et faucibus porta, leo tortor posuere velit, varius feugiat ipsum lacus id nulla. Donec et lacinia nisi, in ultricies neque. Praesent libero ante, finibus vitae fringilla id, tincidunt sed risus. Sed ac posuere leo.",
        traits: ["Lazy", "Humorous", "Bright"],
    },
    {
        id: 1,
        profilePic: "Rose",
        name: "Rose",
        biography: "Nulla imperdiet id dolor volutpat congue. Morbi dapibus diam in velit aliquam hendrerit. Praesent tristique pulvinar iaculis. Aenean commodo porttitor felis, in laoreet felis venenatis elementum. Nunc nec quam vitae nibh faucibus lobortis ut in tortor. Cras maximus lorem a porttitor tempus.",
        traits: ["Thoughtful", "Studious", "Impulsive"],
    },
    {
        id: 2,
        profilePic: "Duncan",
        name: "Duncan",
        biography: "Vestibulum tincidunt, risus id dignissim eleifend, nunc ex volutpat purus, congue ultricies enim tortor eget ante. Vestibulum auctor magna vel dui euismod, a tempor quam rutrum. Sed sed velit est. Sed eu turpis vel neque porta elementum ullamcorper vitae metus.",
        traits: ["Humble", "Considerate", "Selfish"],
    },
    {
        id: 3,
        profilePic: "Milo",
        name: "Milo",
        biography: "Sed purus urna, fermentum a enim vel, ultricies sagittis lectus. Nulla enim mauris, dignissim sed blandit ut, scelerisque mollis ipsum. Phasellus ac massa at mauris vehicula vulputate. In eget lacus quis purus pharetra faucibus. Proin scelerisque lacus ut tortor tincidunt, sed ullamcorper nisl varius.",
        traits: ["Cringe", "Helper", "Selfish"],
    },
]
=======
>>>>>>> e8c140b86bba5bcaa0c4d72b63ce20173a5dcb69
