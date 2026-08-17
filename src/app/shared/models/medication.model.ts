export type MedicationRoute =
  | 'Oral'
  | 'Topical'
  | 'Injection'
  | 'Inhaled';

export type MedicationStatus =
  | 'Active'
  | 'Discontinued';

export interface Medication {
  readonly id: string;
  readonly name: string;
  readonly dosage: string;
  readonly frequency: string;
  readonly route: MedicationRoute;
  readonly startDate: string;
  readonly endDate?: string;
  readonly status: MedicationStatus;
}