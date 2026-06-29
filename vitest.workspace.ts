import { defineWorkspace } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

export default defineWorkspace([
  {
    name: 'healthcare-dashboard',
    extends: 'vite.config.ts',
  },
]);