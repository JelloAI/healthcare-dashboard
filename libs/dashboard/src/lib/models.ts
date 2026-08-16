/**
 * Represents a single vital reading from a patient monitor
 */
export interface VitalReading {
  id: string;
  patientId: string;
  timestamp: number;
  heartRate: number;
  systolic: number;
  diastolic: number;
  oxygenSaturation: number;
  temperature: number;
}

/**
 * Represents a patient in the hospital
 */
export interface Patient {
  id: string;
  name: string;
  mrn: string; // Medical Record Number
  age: number;
  room: string;
}

/**
 * Blood pressure reading (systolic/diastolic)
 */
export interface BloodPressure {
  systolic: number;
  diastolic: number;
}

/**
 * Alert when vital is out of normal range
 */
export interface VitalAlert {
  id: string;
  patientId: string;
  vitalType: 'heartRate' | 'bloodPressure' | 'oxygenSaturation' | 'temperature';
  value: number;
  normalRange: { min: number; max: number };
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: number;
  acknowledged: boolean;
}