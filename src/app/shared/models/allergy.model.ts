export type AllergySeverity =
  | 'Mild'
  | 'Moderate'
  | 'Severe';

export interface Allergy {
  readonly id: string;
  readonly allergen: string;
  readonly reaction: string;
  readonly severity: AllergySeverity;
}
