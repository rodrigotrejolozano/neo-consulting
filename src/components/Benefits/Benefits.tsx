import React from "react";
import styles from "./Benefits.module.css";
import { FastSecureIcon } from "../Icons/FastSecureIcon";
import { CustomDeliveryIcon } from "../Icons/CustomDeliveryIcon";
import { InstantUseIcon } from "../Icons/InstantUseIcon";

interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: <FastSecureIcon className={styles.icon} />,
    title: "Rápido y seguro",
    description:
      "Obtén tu tarjeta de crédito por la web sin colas ni papeleos.",
  },
  {
    id: 2,
    icon: <CustomDeliveryIcon className={styles.icon} />,
    title: "Personaliza la entrega",
    description: "¿En agencia, en tu casa o en tu oficina? ¡Tú escoges!",
  },
  {
    id: 3,
    icon: <InstantUseIcon className={styles.icon} />,
    title: "Úsala de inmediato",
    description: "Activa tu tarjeta desde el App Banca Móvil BCP.",
  },
];

export const Benefits: React.FC = () => {
  return (
    <section className={styles.benefits} id="benefits">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>¿Qué beneficios te ofrece?</h2>
        </div>

        <div className={styles.grid}>
          {benefits.map((benefit) => (
            <div key={benefit.id} className={styles.card}>
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <div className={styles.content}>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
