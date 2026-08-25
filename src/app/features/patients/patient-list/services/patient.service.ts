import { Injectable, signal } from '@angular/core';

import type { Patient } from '../../../../shared/models';
import { PATIENTS } from '../../../../shared/test-data/patients.data';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  public readonly patients = signal<readonly Patient[]>(PATIENTS);

  public readonly allPatients = this.patients.asReadonly();

  public getPatientById(id: string): Patient | undefined {
    return this.patients().find((patient) => patient.id === id);
  }
}
