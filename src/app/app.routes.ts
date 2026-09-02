import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'patients',
    pathMatch: 'full',
  },
  {
    path: 'patients',
    loadComponent: () =>
      import('./features/patients/patient-list/patient-list.component').then(
        (component) => component.PatientListComponent,
      ),
  },
  {
    path: 'patients/:patientId',
    loadComponent: () =>
      import(
        './features/patients/patient-details/patient-details.component'
      ).then((component) => component.PatientDetailsComponent),
  },
];