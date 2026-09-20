import {
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { PatientSelectionService } from './services/patient-selection.service';
import { PatientService } from './services/patient.service';
import { BreadcrumbsComponent } from '../../../shared/components/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
  BreadcrumbsComponent],
})
export class PatientListComponent {
  private readonly patientService = inject(PatientService);
  private readonly patientSelectionService = inject(
    PatientSelectionService,
  );
  private readonly router = inject(Router);

  public readonly patients = this.patientService.allPatients;
  public readonly selectedPatient =
    this.patientSelectionService.selectedPatient;

  public selectPatient(patientId: string): void {
    this.patientSelectionService.selectPatient(patientId);
    void this.router.navigate(['/patients', patientId]);
  }
}