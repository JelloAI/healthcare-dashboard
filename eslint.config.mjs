import js from '@eslint/js';
import ts from 'typescript-eslint';
import angular from 'angular-eslint';
import nxPlugin from '@nx/eslint-plugin';

export default [
  {
    ignores: ['node_modules', 'dist', '.angular', 'coverage', 'tmp'],
  },
  // Base JavaScript rules
  {
    files: ['**/*.ts'],
    extends: [js.configs.recommended],
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always'],
    },
  },
  // TypeScript configuration
  {
    files: ['**/*.ts'],
    extends: [
      ...ts.configs.recommendedTypeChecked,
      ...ts.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.base.json',
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-types': [
        'warn',
        {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'max-params': ['error', 8],
      'complexity': ['error', 11],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      'import/prefer-default-export': 'off',
    },
  },
  // Angular-specific rules
  {
    files: ['**/*.ts'],
    extends: [...angular.configs.tsRecommended],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  // HTML linting
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    rules: {
      '@angular-eslint/template/no-negated-async': 'error',
    },
  },
  // Nx module boundaries
  {
    files: ['**/*.ts'],
    extends: [...nxPlugin.configs['flat/angular']],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforcedBoundaries: [
            {
              sourceTag: 'type:app',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:utility',
                'type:data-access',
              ],
            },
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:utility',
                'type:data-access',
              ],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: ['type:ui', 'type:utility'],
            },
            {
              sourceTag: 'type:data-access',
              onlyDependOnLibsWithTags: ['type:data-access', 'type:utility'],
            },
            {
              sourceTag: 'type:utility',
              onlyDependOnLibsWithTags: ['type:utility'],
            },
          ],
        },
      ],
    },
  },
  // Test files (relaxed rules)
  {
    files: ['**/*.spec.ts', '**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
      },
    },
  },
];