import { Patient, VitalReading } from '../models';

export const MOCK_PATIENTS: Patient[] = [
  { id: '1', name: 'John Smith', mrn: 'MRN-001', age: 65, room: '101' },
  { id: '2', name: 'Jane Doe', mrn: 'MRN-002', age: 45, room: '102' },
  { id: '3', name: 'Bob Johnson', mrn: 'MRN-003', age: 72, room: '103' },
];

export function generateMockVitals(patientId: string): VitalReading[] {
  const readings: VitalReading[] = [];
  const now = Date.now();

  for (let i = 23; i >= 0; i--) {
    readings.push({
      id: `${patientId}-${i}`,
      patientId,
      timestamp: now - i * 3600000,
      heartRate: 60 + Math.random() * 40,
      systolic: 110 + Math.random() * 30,
      diastolic: 70 + Math.random() * 20,
      oxygenSaturation: 95 + Math.random() * 5,
      temperature: 36.8 + Math.random() * 1,
    });
  }

  return readings;
}

export function generateSingleVital(patientId: string): VitalReading {
  return {
    id: `${patientId}-${Date.now()}`,
    patientId,
    timestamp: Date.now(),
    heartRate: 60 + Math.random() * 40,
    systolic: 110 + Math.random() * 30,
    diastolic: 70 + Math.random() * 20,
    oxygenSaturation: 95 + Math.random() * 5,
    temperature: 36.8 + Math.random() * 1,
  };
}