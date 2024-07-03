import styles from "./Interest.module.css";
import Image from "next/image";
import growthMindset from "../../../public/growth-mindset.webp";
import continuosLearning from "../../../public/continuos-learning.webp";
import colaborativeTeam from "../../../public/colaborative-team.webp";
import goodEnvironment from "../../../public/good-environment.webp";

export default function Interests() {
  return (
    <section className={styles.interestsContainer}>
      <h2>Intereses</h2>
      <section className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <Image
              className={styles.icon}
              src={growthMindset}
              width={100}
              height={100}
              alt="growth"
            />
          </div>
          <span className={styles.cardTitle}>Crecimiento personal </span>
          <p>
            Busco pertenecer a un equipo que me aporte valor donde pueda seguir
            creciendo tanto como profesional pero tambien como persona.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <Image
              className={styles.icon}
              src={continuosLearning}
              width={100}
              height={100}
              alt="learning"
            />
          </div>
          <span className={styles.cardTitle}>Aprendizaje continuo </span>
          <p>
            Me gusta estar siempre en aprendizaje continuo, por lo que me gusta
            participar de proyectos dinamicos ya que me adapto facilmente.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <Image
              className={styles.icon}
              src={colaborativeTeam}
              width={100}
              height={100}
              alt="colaborative"
            />
          </div>
          <span className={styles.cardTitle}>Equipo colaborativo</span>
          <p>
            Disfruto mucho de participar de equipos donde este presente la buena
            predisposición tanto sea para ayudar como para seguir aprendiendo.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <Image
              className={styles.icon}
              src={goodEnvironment}
              width={100}
              height={100}
              alt="colaborative"
            />
          </div>
          <span className={styles.cardTitle}>Buen ambiente laboral </span>
          <p>
            Soy una persona que valora mucho los principios, como el respeto, la
            honestidad y la buena predisposición, por lo que busco formar parte
            de un equipo donde los valores esten muy presentes.
          </p>
        </div>
      </section>
    </section>
  );
}
