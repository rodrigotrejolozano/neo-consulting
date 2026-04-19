export type ExperimentVariant = "A" | "B";

export interface ExperimentConfig {
  id: string;
  name: string;
  variants: ExperimentVariant[];
  splitPercentage: number;
}

export interface ExperimentState {
  experimentId: string;
  variant: ExperimentVariant;
  assignedAt: string;
}

export interface GTMEvent {
  event: string;
  experimentId: string;
  action: string;
  variant: ExperimentVariant;
  label: string;
  [key: string]: unknown;
}
