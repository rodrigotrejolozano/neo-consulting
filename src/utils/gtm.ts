import type { GTMEvent, ExperimentVariant } from "../types/experiment";

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
