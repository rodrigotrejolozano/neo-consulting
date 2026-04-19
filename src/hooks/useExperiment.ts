import { useState } from "react";
import type {
  ExperimentVariant,
  ExperimentConfig,
  ExperimentState,
} from "../types/experiment";
import { trackViewBanner } from "../utils/gtm";

const STORAGE_KEY = "bcp_experiment_state";
const EXPERIMENT_ID = "bcp_banner_test_v1";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useExperiment = (_config?: ExperimentConfig) => {
  const [state] = useState(() => {
    if (typeof window === "undefined") {
      return {
        variant: "A" as ExperimentVariant,
        isLoading: true,
      };
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        const parsed: ExperimentState = JSON.parse(stored);

        if (parsed.experimentId === EXPERIMENT_ID) {
          trackViewBanner(EXPERIMENT_ID, parsed.variant);

          return {
            variant: parsed.variant,
            isLoading: false,
          };
        }
      }
    } catch (error) {
      console.error("[useExperiment] Error parsing:", error);
    }

    const newVariant: ExperimentVariant = Math.random() < 0.5 ? "A" : "B";

    const newState: ExperimentState = {
      experimentId: EXPERIMENT_ID,
      variant: newVariant,
      assignedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    trackViewBanner(EXPERIMENT_ID, newVariant);

    return {
      variant: newVariant,
      isLoading: false,
    };
  });

  return {
    variant: state.variant,
    isLoading: state.isLoading,
    experimentId: EXPERIMENT_ID,
  };
};
