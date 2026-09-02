import { Routes } from '@angular/router';

import { AppShellComponent } from './core/layout/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'patients',
        pathMatch: 'full',
      },
      {
        path: 'patients',
        loadComponent: () =>
          import(
            './features/patients/patient-list/patient-list.component'
          ).then(
            (component) => component.PatientListComponent,
          ),
      },
      {
        path: 'patients/:patientId',
        loadComponent: () =>
          import(
            './features/patients/patient-details/patient-details.component'
          ).then(
            (component) => component.PatientDetailsComponent,
          ),
      },
    ],
  },
];