export type LabResultStatus =
  | 'Normal'
  | 'High'
  | 'Low'
  | 'Critical';

export interface LabResult {
  readonly id: string;
  readonly testName: string;
  readonly value: number;
  readonly unit: string;
  readonly referenceRange: string;
  readonly status: LabResultStatus;
  readonly collectedAt: string;
}