import type { Patient } from '../models';

export const PATIENTS: readonly Patient[] = [
  {
    id: 'PT-1001',
    firstName: 'Meredith',
    lastName: 'Grey',
    dateOfBirth: '1982-06-10',
    gender: 'Female',
    status: 'Stable',
    bloodType: 'O+',
    allergies: [
      {
        id: 'ALG-1001',
        allergen: 'Penicillin',
        reaction: 'Rash',
        severity: 'Moderate',
      },
    ],
    vitals: [
      {
        recordedAt: '2026-08-20T09:15:00Z',
        bloodPressure: {
          systolic: 118,
          diastolic: 76,
        },
        heartRate: 72,
        respiratoryRate: 16,
        temperature: 98.4,
        oxygenSaturation: 99,
        weight: 142,
      },
    ],
    medications: [
      {
        id: 'MED-1001',
        name: 'Lisinopril',
        dosage: '10 mg',
        frequency: 'Once daily',
        route: 'Oral',
        startDate: '2025-11-12',
        status: 'Active',
      },
    ],
    labResults: [
      {
        id: 'LAB-1001',
        testName: 'Hemoglobin A1C',
        value: 5.4,
        unit: '%',
        referenceRange: '4.0–5.6%',
        status: 'Normal',
        collectedAt: '2026-08-20T08:30:00Z',
      },
    ],
    appointments: [
      {
        id: 'APT-1001',
        scheduledAt: '2026-11-27T10:00:00Z',
        type: 'Follow-up',
        status: 'Scheduled',
        reason: 'Routine blood pressure follow-up',
      },
    ],
    notes: [
      {
        id: 'NOTE-1001',
        createdAt: '2026-08-20T10:00:00Z',
        updatedAt: '2026-08-20T10:00:00Z',
        author: 'Dr. Cristina Yang',
        content:
          'Patient is stable. Blood pressure remains well controlled on current medication.',
      },
    ],
  },

  {
    id: 'PT-1002',
    firstName: 'Alex',
    lastName: 'Karev',
    dateOfBirth: '1975-03-22',
    gender: 'Male',
    status: 'Needs Attention',
    bloodType: 'A+',
    allergies: [],
    vitals: [
      {
        recordedAt: '2026-08-21T11:20:00Z',
        bloodPressure: {
          systolic: 146,
          diastolic: 92,
        },
        heartRate: 84,
        respiratoryRate: 18,
        temperature: 98.7,
        oxygenSaturation: 97,
        weight: 198,
      },
    ],
    medications: [
      {
        id: 'MED-1002',
        name: 'Atorvastatin',
        dosage: '20 mg',
        frequency: 'Once daily',
        route: 'Oral',
        startDate: '2025-08-15',
        status: 'Active',
      },
    ],
    labResults: [
      {
        id: 'LAB-1002',
        testName: 'LDL Cholesterol',
        value: 142,
        unit: 'mg/dL',
        referenceRange: '<100 mg/dL',
        status: 'High',
        collectedAt: '2026-08-21T09:00:00Z',
      },
    ],
    appointments: [
      {
        id: 'APT-1002',
        scheduledAt: '2026-11-25T14:30:00Z',
        type: 'Lab Review',
        status: 'Scheduled',
        reason: 'Review elevated cholesterol results',
      },
    ],
    notes: [
      {
        id: 'NOTE-1002',
        createdAt: '2026-08-21T12:00:00Z',
        updatedAt: '2026-08-21T12:15:00Z',
        author: 'Dr. Cristina Yang',
        content:
          'Elevated LDL noted. Discussed medication adherence and dietary modifications.',
      },
    ],
  },

  {
    id: 'PT-1003',
    firstName: 'Jordan',
    lastName: 'Lee',
    dateOfBirth: '1991-11-08',
    gender: 'Non-binary',
    status: 'Stable',
    bloodType: 'B-',
    allergies: [
      {
        id: 'ALG-1003',
        allergen: 'Latex',
        reaction: 'Contact dermatitis',
        severity: 'Mild',
      },
    ],
    vitals: [
      {
        recordedAt: '2026-08-22T08:45:00Z',
        bloodPressure: {
          systolic: 112,
          diastolic: 70,
        },
        heartRate: 68,
        respiratoryRate: 15,
        temperature: 98.1,
        oxygenSaturation: 98,
        weight: 165,
      },
    ],
    medications: [
      {
        id: 'MED-1003',
        name: 'Albuterol',
        dosage: '90 mcg',
        frequency: 'As needed',
        route: 'Inhaled',
        startDate: '2026-01-10',
        status: 'Active',
      },
    ],
    labResults: [
      {
        id: 'LAB-1003',
        testName: 'White Blood Cell Count',
        value: 6.8,
        unit: 'K/uL',
        referenceRange: '4.0–11.0 K/uL',
        status: 'Normal',
        collectedAt: '2026-08-22T08:00:00Z',
      },
    ],
    appointments: [
      {
        id: 'APT-1003',
        scheduledAt: '2026-11-03T09:30:00Z',
        type: 'Annual Physical',
        status: 'Scheduled',
        reason: 'Annual preventive examination',
      },
    ],
    notes: [
      {
        id: 'NOTE-1003',
        createdAt: '2026-08-22T09:30:00Z',
        updatedAt: '2026-08-22T09:30:00Z',
        author: 'Dr. Cristina Yang',
        content:
          'Routine examination. No acute concerns reported during visit.',
      },
    ],
  },

  {
    id: 'PT-1004',
    firstName: 'Taylor',
    lastName: 'Bennett',
    dateOfBirth: '1968-07-14',
    gender: 'Female',
    status: 'Critical',
    bloodType: 'AB+',
    allergies: [
      {
        id: 'ALG-1004',
        allergen: 'Sulfa drugs',
        reaction: 'Hives',
        severity: 'Severe',
      },
    ],
    vitals: [
      {
        recordedAt: '2026-08-23T07:50:00Z',
        bloodPressure: {
          systolic: 178,
          diastolic: 104,
        },
        heartRate: 108,
        respiratoryRate: 22,
        temperature: 99.1,
        oxygenSaturation: 94,
        weight: 176,
      },
    ],
    medications: [
      {
        id: 'MED-1004',
        name: 'Metoprolol',
        dosage: '50 mg',
        frequency: 'Twice daily',
        route: 'Oral',
        startDate: '2026-03-18',
        status: 'Active',
      },
    ],
    labResults: [
      {
        id: 'LAB-1004',
        testName: 'Troponin I',
        value: 0.42,
        unit: 'ng/mL',
        referenceRange: '<0.04 ng/mL',
        status: 'Critical',
        collectedAt: '2026-08-23T07:30:00Z',
      },
    ],
    appointments: [
      {
        id: 'APT-1004',
        scheduledAt: '2026-08-23T08:15:00Z',
        type: 'Consultation',
        status: 'Completed',
        reason: 'Urgent cardiovascular evaluation',
      },
    ],
    notes: [
      {
        id: 'NOTE-1004',
        createdAt: '2026-08-23T08:30:00Z',
        updatedAt: '2026-08-23T09:00:00Z',
        author: 'Dr. Cristina Yang',
        content:
          'Urgent evaluation initiated following abnormal cardiac biomarker result and elevated vital signs.',
      },
    ],
  },
];