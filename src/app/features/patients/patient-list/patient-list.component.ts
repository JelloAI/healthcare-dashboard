import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';

import { PatientSelectionService } from './services/patient-selection.service';
import { PatientService } from './services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientListComponent {
  private readonly patientService = inject(PatientService);
  private readonly patientSelectionService = inject(
    PatientSelectionService,
  );

  public readonly patients = this.patientService.allPatients;
  public readonly selectedPatient =
    this.patientSelectionService.selectedPatient;

  public selectPatient(patientId: string): void {
    this.patientSelectionService.selectPatient(patientId);
  }
}