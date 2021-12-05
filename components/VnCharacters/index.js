import React from "react";
import styles from "../../styles/vncharacters.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";

const VnCharacters = () => {
    return (
        <>
            <section className={styles.container}>
                <h2 id={'time'} className={styles.subTitle}>Personagens</h2>
                <article className={styles.info}>
                    <div className={styles.character}>
                        <Image alt={"imagem aleatória"} src="/gallery/axel.webp" width={384} height={467} layout={"fixed"}/>
                    </div>
                    <div className={styles.bio}>
                        <h3 className={styles.name}>Nome do personagem</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit arcu vel
                            ante
                            pulvinar ullamcorper. Praesent ornare ex nunc, non pretium erat tempus vitae. Phasellus nec
                            enim
                            varius, posuere erat in, pellentesque ipsum. Nulla cursus tempor vestibulum. Sed lectus leo,
                            mattis eu quam euismod, semper semper sem. In hac habitasse platea dictumst. Vestibulum arcu
                            massa, suscipit in nunc nec, condimentum mollis metus. Donec rhoncus ultrices elit, sit amet
                            pretium nunc tristique ac. Duis sit amet justo sit amet eros feugiat commodo. Cras bibendum
                            lacinia ipsum sit amet congue.
                        </p>
                        <br/>

                        <h4>Características</h4>
                        <ul className={styles.caracteristicas}>
                            <li>Alegre</li>
                            <li>Extrovertido</li>
                            <li>Minucioso</li>
                            <li>Perfeccionista</li>
                        </ul>
                        <h4>Mais personagens</h4>
                        <ul className={styles.characterlist}>
                            <li>
                                <div className={styles.others}>
                                    <div className={styles.card}>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className={styles.others}>
                                    <div className={styles.card}>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className={styles.others}>
                                    <div className={styles.card}>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className={styles.others}>
                                    <div className={styles.card}>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </article>
            </section>
        </>
    )
}

export default VnCharacters;
