import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
} from "../../utils/validation";
import {
  trackSubmitForm,
  trackFormError,
  trackFormFocus,
} from "../../utils/gtm";
import type { ExperimentVariant } from "../../types/experiment";
import styles from "./Form.module.css";
import useMediaQuery from "../../hooks/useMediaQuery";

interface FormProps {
  experimentId: string;
  variant: ExperimentVariant;
}

export const Form: React.FC<FormProps> = ({ experimentId, variant }) => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      trackSubmitForm(experimentId, variant, data);
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldFocus = (fieldName: keyof ContactFormData) => {
    trackFormFocus(experimentId, variant, fieldName);
  };

  const handleFieldError = (fieldName: keyof ContactFormData) => {
    const error = errors[fieldName];
    if (error?.message) {
      trackFormError(experimentId, variant, fieldName, error.message);
    }
  };

  return (
    <section className={styles.form} id="form">
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.formWrapper}>
            <div className={styles.infoColumn}>
              <div className={styles.infoContainer}>
                <h2 className={styles.title}>
                  Solicita tu Tarjeta de Crédito BCP
                </h2>
                <p className={styles.infoCardDescription}>
                  Completa el formulario con tus datos y accede a promociones
                  exclusivas, descuentos y beneficios diseñados para ti. El
                  proceso es rápido, seguro y solo necesitas registrarte una
                  vez.
                </p>

                {!isMobile && (
                  <div className={styles.imageContainer}>
                    <img
                      src={`${import.meta.env.BASE_URL}assets/formulario.png`}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.formColumn}>
              <div className={styles.formContent}>
                {submitSuccess ? (
                  <div className={styles.successMessage}>
                    <span className={styles.successIcon}>✓</span>
                    <div className={styles.successContent}>
                      <h3 className={styles.successTitle}>
                        ¡Solicitud enviada con éxito!
                      </h3>
                      <p className={styles.successText}>
                        Hemos recibido tus datos correctamente. Un asesor se
                        pondrá en contacto contigo dentro de las próximas 24
                        horas.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.formContainer}
                  >
                    <div className={styles.formGroup}>
                      <div className={styles.inputWrapper}>
                        <input
                          id="nombre"
                          type="text"
                          placeholder=" "
                          className={`${styles.input} ${errors.nombre ? styles.inputError : ""}`}
                          {...register("nombre")}
                          onFocus={() => handleFieldFocus("nombre")}
                          onBlur={() => handleFieldError("nombre")}
                          disabled={isSubmitting}
                        />
                        <span
                          className={`${styles.floatingLabel} ${errors.nombre ? styles.floatingLabelError : ""}`}
                        >
                          Nombres
                        </span>
                      </div>

                      <div className={styles.errorContainer}>
                        {errors.nombre && (
                          <span className={styles.error}>
                            {errors.nombre.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <div className={styles.inputWrapper}>
                        <input
                          id="email"
                          type="email"
                          placeholder=" "
                          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                          {...register("email")}
                          onFocus={() => handleFieldFocus("email")}
                          onBlur={() => handleFieldError("email")}
                          disabled={isSubmitting}
                        />
                        <span
                          className={`${styles.floatingLabel} ${errors.email ? styles.floatingLabelError : ""}`}
                        >
                          Correo
                        </span>
                      </div>

                      <div className={styles.errorContainer}>
                        {errors.email && (
                          <span className={styles.error}>
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className={styles.disclaimer}>
                      Declaro conocer que esta información será utilizada
                      únicamente para los fines de este proceso, y será tratada
                      según lo indicado en la{" "}
                      <span className={styles.terms}>
                        Política de Privacidad (Protección de Datos Personales)
                      </span>
                    </p>
                    <button
                      type="submit"
                      className={styles.submitButton}
                      disabled={isSubmitting || submitSuccess}
                    >
                      {isSubmitting ? (
                        <>
                          <span className={styles.spinner}></span>
                          Procesando...
                        </>
                      ) : submitSuccess ? (
                        <>Enviado correctamente</>
                      ) : (
                        <>Enviar</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
