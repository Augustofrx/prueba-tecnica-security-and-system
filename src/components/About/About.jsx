import styles from "./About.module.css";
import Image from "next/image";
import meDrinkingMate from "../../../public/me-drinking-mate.webp";
import meInMountains from "../../../public/me-in-mountains.webp";

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      <h2>Sobre mí</h2>
      <div className={styles.grid}>
        <div className={styles.firstItem}>
          <p>
            ¡Hola! Soy Augusto, un Argentino de 24 años, actualmente, Dev.
            FullStack.
          </p>
          <p>
            Me considero una persona en constante aprendizaje, curioso por las
            nuevas tecnologías y siempre dispuesto a investigar cuando surge
            algo nuevo.
          </p>
          <p>
            Desde muy joven me ha gustado aprender sobre distintas herramientas
            para lograr mis objetivos. Así, terminé aprendiendo sobre diseño,
            edición de video, producción musical, animación y, finalmente,
            programación, que es lo que realmente me apasiona.
          </p>
          <Image
            src={meDrinkingMate}
            alt="me-drinking-mate"
            width="400"
            height="430"
          />
        </div>
        <div className={styles.secondItem}>
          <Image
            src={meInMountains}
            alt="me-in-mountains"
            width="400"
            height="450"
          />
          <p>
            Me considero aventurero. Me gusta mucho viajar, explorar otros
            lugares, otras culturas y estar en contacto con la naturaleza.
          </p>
          <p>
            Disfruto de compartir tiempo con otras personas, trabajar en equipo
            y poder ayudar siempre que es posible.
          </p>
          <p>
            Considero que tengo facilidad para comunicar y expresarme, como
            tambien para aprender cosas nuevas.
          </p>
          <p>
            Me gusta poder enseñar lo que se y siempre impulsar a los demas a
            que logren sus objetivos.
          </p>
        </div>
      </div>
    </section>
  );
}
