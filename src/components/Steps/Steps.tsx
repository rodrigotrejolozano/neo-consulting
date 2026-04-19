import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Steps.module.css";
import { ArrowRigthIcon } from "../Icons/ArrowRigthIcon";

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Validaremos tu identidad",
    description: "Por tu seguridad.",
  },
  {
    number: 2,
    title: "Elige una Tarjeta de Crédito BCP",
    description: "Perfecta para ti.",
  },
  {
    number: 3,
    title: "Elige como obtenerla",
    description: "Recogerla o recibirla GRATIS en casa.",
  },
];

export const Steps: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handlePrev = () => {
    emblaApi?.scrollPrev();
  };

  const handleNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className={styles.steps} id="steps">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Proceso Simple y Rápido</h2>
          <p className={styles.subtitle}>Obtén tu tarjeta en solo 3 pasos</p>
        </div>

        <div className={styles.desktopWrapper}>
          {steps.map((step) => (
            <div key={step.number} className={styles.stepItem}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.mobileWrapper}>
          <div className={styles.carouselContainer}>
            <div className={styles.emblaViewport} ref={emblaRef}>
              <div className={styles.emblaContainer}>
                {steps.map((step) => (
                  <div key={step.number} className={styles.emblaSlide}>
                    <div className={styles.slideContent}>
                      <div className={styles.stepNumber}>{step.number}</div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDescription}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.carouselControls}>
              <button
                className={styles.prevButton}
                onClick={handlePrev}
                aria-label="Anterior"
              >
                <ArrowRigthIcon width={40} height={40} />
              </button>

              <div className={styles.dotsContainer}>
                {steps.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${
                      index === selectedIndex ? styles.activeDot : ""
                    }`}
                    onClick={() => emblaApi?.scrollTo(index)}
                    aria-label={`Paso ${index + 1}`}
                    aria-current={index === selectedIndex}
                  />
                ))}
              </div>

              <button
                className={styles.nextButton}
                onClick={handleNext}
                aria-label="Siguiente"
              >
                <ArrowRigthIcon
                  width={40}
                  height={40}
                  transform="rotate(180)"
                />
              </button>
            </div>

            <div className={styles.counterText}>
              Paso {selectedIndex + 1} de {steps.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
