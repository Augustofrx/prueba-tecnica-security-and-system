import styles from "./contactForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useFormik } from "formik";
import Image from "next/image";
import * as Yup from "yup";
import web from "../../../public/web.webp";
import github from "../../../public/github.webp";
import linkedin from "../../../public/linkedin.webp";

export default function ContactForm() {
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido."),
      email: Yup.string()
        .email("Correo electrónico no válido.")
        .required("El correo es requerido."),
      message: Yup.string().required("El mensaje es requerido."),
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success("Correo enviado exitosamente", toastOptions);
      resetForm();
    },
  });

  return (
    <section className={styles.formContainer}>
      <h2>Contactame</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.fieldContainer}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name ? (
            <span className={styles.error}>{formik.errors.name}</span>
          ) : null}
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor="email">Correo</label>
          <input type="email" id="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <span className={styles.error}>{formik.errors.email}</span>
          ) : null}
        </div>
        <div className={styles.fieldContainer}>
          <label htmlFor="message">Mensaje</label>
          <input
            type="text"
            id="message"
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message ? (
            <span className={styles.error}>{formik.errors.message}</span>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={
            !formik.isValid ||
            formik.isSubmitting ||
            formik.getFieldProps("name").value === ""
          }
        >
          Enviar
        </button>
        <ToastContainer />
      </form>
      <div className={styles.contactLinksContainer}>
        <a href="https://augusto-iphar-dev.vercel.app/" target="_blank">
          <Image src={web} alt="my-web" width={80} height={80} />
        </a>
        <a href="https://github.com/Augustofrx" target="_blank">
          <Image src={github} alt="my-web" width={75} height={70} />
        </a>
        <a href="https://www.linkedin.com/in/augustofrx/" target="_blank">
          <Image src={linkedin} alt="my-web" width={70} height={64} />
        </a>
      </div>
    </section>
  );
}
