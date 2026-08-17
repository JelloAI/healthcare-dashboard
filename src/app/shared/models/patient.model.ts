import type { Allergy } from './allergy.model';
import type { Appointment } from './appointment.model';
import type { ClinicalNote } from './clinical-note.model';
import type { LabResult } from './lab-result.model';
import type { Medication } from './medication.model';
import type { Vital } from './vital.model';

export type PatientGender =
  | 'Male'
  | 'Female'
  | 'Non-binary'
  | 'Prefer not to say';

export type PatientStatus =
  | 'Stable'
  | 'Needs Attention'
  | 'Critical';

export type BloodType =
  | 'A+'
  | 'A-'
  | 'B+'
  | 'B-'
  | 'AB+'
  | 'AB-'
  | 'O+'
  | 'O-';

export interface Patient {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly dateOfBirth: string;
  readonly gender: PatientGender;
  readonly status: PatientStatus;
  readonly bloodType: BloodType;
  readonly allergies: readonly Allergy[];
  readonly vitals: readonly Vital[];
  readonly medications: readonly Medication[];
  readonly labResults: readonly LabResult[];
  readonly appointments: readonly Appointment[];
  readonly notes: readonly ClinicalNote[];
}
