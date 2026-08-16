import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { VitalReading, Patient } from '../models';
import { MOCK_PATIENTS, generateMockVitals, generateSingleVital } from './mock-vitals';

@Injectable({ providedIn: 'root' })
export class VitalsService {
  /**
   * Get all patients
   */
  getPatients(): Observable<Patient[]> {
    // TODO: Replace with HTTP call when API is ready
    // return this.http.get<Patient[]>('/api/patients');
    return of(MOCK_PATIENTS);
  }

  /**
   * Get patient by ID
   */
  getPatient(patientId: string): Observable<Patient | undefined> {
    return of(MOCK_PATIENTS.find(p => p.id === patientId));
  }

  /**
   * Get vitals for a specific patient
   */
  getPatientVitals(patientId: string): Observable<VitalReading[]> {
    // TODO: Replace with HTTP call when API is ready
    // return this.http.get<VitalReading[]>(`/api/patients/${patientId}/vitals`);
    return of(generateMockVitals(patientId));
  }

  /**
   * Simulate real-time vitals updates
   */
  getPatientVitalsRealTime(patientId: string): Observable<VitalReading> {
    return interval(5000).pipe(
      map(() => generateSingleVital(patientId))
    );
  }
}