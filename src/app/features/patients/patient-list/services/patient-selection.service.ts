import { computed, inject, Injectable, signal } from '@angular/core';

import type { Patient } from '../../../../shared/models';
import { PatientService } from './patient.service';

@Injectable({
  providedIn: 'root',
})
export class PatientSelectionService {
  private readonly patientService = inject(PatientService);
  private readonly selectedPatientId = signal<string | null>(null);

  public readonly selectedPatient = computed<Patient | undefined>(() => {
    const patientId = this.selectedPatientId();

    if (patientId === null) {
      return undefined;
    }

    return this.patientService.getPatientById(patientId);
  });

  public selectPatient(patientId: string): void {
    this.selectedPatientId.set(patientId);
  }

  public clearSelection(): void {
    this.selectedPatientId.set(null);
  }
}