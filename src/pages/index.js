import React, { useRef } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Interests from "../components/Interests/Interests";
import ContactForm from "../components/ContactForm/contacForm";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  const aboutRef = useRef(null);
  const interestsRef = useRef(null);
  const contactFormRef = useRef(null);

  // const scrollToSection = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  return (
    <>
      <Head>
        <title>Prueba Técnica Security and Systems</title>
        <meta name="description" content="Desarrollado por Augusto Iphar ❤️" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <Header refs={{ aboutRef, interestsRef, contactFormRef }} />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={interestsRef}>
          <Interests />
        </div>
        <div ref={contactFormRef}>
          <ContactForm />
        </div>
        <Footer />
      </main>
    </>
  );
}
