import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Sobre BCP</h4>
            <ul className={styles.list}>
              <li>
                <a href="#about">Acerca de nosotros</a>
              </li>
              <li>
                <a href="#careers">Trabaja con nosotros</a>
              </li>
              <li>
                <a href="#sustainability">Sostenibilidad</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Productos</h4>
            <ul className={styles.list}>
              <li>
                <a href="#credit-cards">Tarjetas de Crédito</a>
              </li>
              <li>
                <a href="#accounts">Cuentas</a>
              </li>
              <li>
                <a href="#loans">Préstamos</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Ayuda</h4>
            <ul className={styles.list}>
              <li>
                <a href="#faq">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#support">Contacto</a>
              </li>
              <li>
                <a href="#security">Seguridad</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Síguenos</h4>
            <div className={styles.social}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                𝕏
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                in
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.legal}>
            © {currentYear} Banco de Crédito del Perú. Todos los derechos
            reservados.
          </p>
          <div className={styles.links}>
            <a href="#privacy">Política de Privacidad</a>
            <span className={styles.separator}>•</span>
            <a href="#terms">Términos de Servicio</a>
            <span className={styles.separator}>•</span>
            <a href="#cookies">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
