import React from "react";
import type { ExperimentVariant } from "../../types/experiment";
import { trackClickCTA } from "../../utils/gtm";
import styles from "./Banner.module.css";

interface BannerProps {
  variant: ExperimentVariant;
  experimentId: string;
  onCTAClick: () => void;
  isLoading: boolean;
}

export const Banner: React.FC<BannerProps> = ({
  variant,
  experimentId,
  onCTAClick,
  isLoading,
}) => {
  const handleCTAClick = () => {
    const ctaText = variant === "A" ? "Solicita ahora" : "Aplica ya";
    trackClickCTA(experimentId, variant, ctaText);
    onCTAClick();
  };

  const isVariantA = variant === "A";
  const bannerClass = isVariantA ? styles.bannerA : styles.bannerB;

  if (isLoading) {
    return (
      <section className={styles.banner}>
        <div className={styles.loader}></div>
      </section>
    );
  }

  return (
    <section className={`${styles.banner} ${bannerClass}`} id="banner">
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {isVariantA
              ? "Obtén beneficios con tu Tarjeta de Crédito"
              : "Abre tu Tarjeta de Crédito y Crece"}
          </h1>

          <p className={styles.subtitle}>
            {isVariantA
              ? "Acumula puntos, acceso a beneficios exclusivos y descuentos especiales en tus compras."
              : "Con millas, descuentos y servicios premium diseñados para ti. ¡Comienza hoy!"}
          </p>

          <button
            className={styles.cta}
            onClick={handleCTAClick}
            aria-label={
              isVariantA ? "Solicita ahora tu tarjeta" : "Aplica ya tu tarjeta"
            }
          >
            {isVariantA ? "Solicita ahora" : "Aplica ya"}
          </button>
        </div>

        <div className={styles.illustration}>
          <div className={styles.card}>
            <img
              src="/assets/banner.png"
              alt="Banner"
              className={styles.bannerImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
