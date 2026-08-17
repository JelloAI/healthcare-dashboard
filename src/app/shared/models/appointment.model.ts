export type AppointmentType =
  | 'Follow-up'
  | 'Annual Physical'
  | 'Consultation'
  | 'Lab Review';

export type AppointmentStatus =
  | 'Scheduled'
  | 'Completed'
  | 'Cancelled';

export interface Appointment {
  readonly id: string;
  readonly scheduledAt: string;
  readonly type: AppointmentType;
  readonly status: AppointmentStatus;
  readonly reason: string;
}
