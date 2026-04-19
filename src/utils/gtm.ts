import type { GTMEvent, ExperimentVariant } from "../types/experiment";
import type { ContactFormData } from "./validation";

declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}

export const pushEvent = (eventData: GTMEvent): void => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);
  console.log("[GTM Event]", eventData);
};

export const trackViewBanner = (
  experimentId: string,
  variant: ExperimentVariant,
): void => {
  pushEvent({
    event: "experiment_event",
    experimentId,
    action: "view_banner",
    variant,
    label: `Banner viewed - Variant ${variant}`,
  });
};

export const trackClickCTA = (
  experimentId: string,
  variant: ExperimentVariant,
  ctaText: string,
): void => {
  pushEvent({
    event: "experiment_event",
    experimentId,
    action: "click_cta",
    variant,
    label: `CTA clicked - ${ctaText}`,
  });
};

export const trackFormFocus = (
  experimentId: string,
  variant: ExperimentVariant,
  fieldName: string,
): void => {
  pushEvent({
    event: "experiment_event",
    experimentId,
    action: "form_focus",
    variant,
    label: `Form field focused - ${fieldName}`,
  });
};

export const trackFormError = (
  experimentId: string,
  variant: ExperimentVariant,
  fieldName: string,
  error: string,
): void => {
  pushEvent({
    event: "experiment_event",
    experimentId,
    action: "form_error",
    variant,
    label: `Form validation error - ${fieldName}: ${error}`,
  });
};

export const trackSubmitForm = (
  experimentId: string,
  variant: ExperimentVariant,
  data: ContactFormData | Record<string, string | undefined>,
): void => {
  pushEvent({
    event: "experiment_event",
    experimentId,
    action: "submit_form",
    variant,
    label: "Form submitted successfully",
    formData: {
      nombre: data.nombre ? data.nombre.substring(0, 5) + "***" : undefined,
      email: data.email ? data.email.substring(0, 5) + "***" : undefined,
    },
  });
};
