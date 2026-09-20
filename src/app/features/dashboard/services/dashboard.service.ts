import {
  computed,
  inject,
  Injectable,
} from '@angular/core';

import type {
  Appointment,
  Patient,
} from '../../../shared/models';
import { PatientService } from '../../patients/patient-list/services/patient.service';

export interface DashboardAppointment {
  readonly appointment: Appointment;
  readonly patient: Patient;
}

export interface DashboardActivity {
  readonly patient: Patient;
  readonly noteId: string;
  readonly updatedAt: string;
  readonly author: string;
  readonly content: string;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly patientService = inject(PatientService);

  private readonly patients = this.patientService.allPatients;

  public readonly patientCount = computed(
    () => this.patients().length,
  );

  public readonly needsAttentionPatients = computed(
    () =>
      this.patients().filter(
        (patient) =>
          patient.status === 'Needs Attention' ||
          patient.status === 'Critical',
      ),
  );

  public readonly needsAttentionCount = computed(
    () => this.needsAttentionPatients().length,
  );

  public readonly upcomingAppointments = computed<
    readonly DashboardAppointment[]
  >(() => {
    const appointments: DashboardAppointment[] = [];

    for (const patient of this.patients()) {
      for (const appointment of patient.appointments) {
        if (appointment.status !== 'Scheduled') {
          continue;
        }

        appointments.push({
          appointment,
          patient,
        });
      }
    }

    return appointments.sort(
      (first, second) =>
        new Date(first.appointment.scheduledAt).getTime() -
        new Date(second.appointment.scheduledAt).getTime(),
    );
  });

  public readonly recentActivity = computed<
    readonly DashboardActivity[]
  >(() => {
    const activities: DashboardActivity[] = [];

    for (const patient of this.patients()) {
      for (const note of patient.notes) {
        activities.push({
          patient,
          noteId: note.id,
          updatedAt: note.updatedAt,
          author: note.author,
          content: note.content,
        });
      }
    }

    return activities
      .sort(
        (first, second) =>
          new Date(second.updatedAt).getTime() -
          new Date(first.updatedAt).getTime(),
      )
      .slice(0, 5);
  });
}
