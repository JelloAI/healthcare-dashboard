export interface BloodPressure {
  readonly systolic: number;
  readonly diastolic: number;
}

export interface Vital {
  readonly recordedAt: string;
  readonly bloodPressure: BloodPressure;
  readonly heartRate: number;
  readonly respiratoryRate: number;
  readonly temperature: number;
  readonly oxygenSaturation: number;
  readonly weight: number;
}