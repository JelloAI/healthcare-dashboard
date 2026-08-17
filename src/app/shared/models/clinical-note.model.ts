export interface ClinicalNote {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly author: string;
  readonly content: string;
}