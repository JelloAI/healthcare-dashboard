import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PatientService } from '../patient-list/services/patient.service';

@Component({
  selector: 'app-patient-details',
  imports: [RouterLink],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly patientService = inject(PatientService);

  private readonly patientId = computed(
    () => this.route.snapshot.paramMap.get('patientId') ?? '',
  );

  public readonly patient = computed(() =>
    this.patientService.getPatientById(this.patientId()),
  );
}