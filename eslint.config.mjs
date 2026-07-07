import coreWebVitals from 'eslint-config-next/core-web-vitals';
import {defineConfig} from 'eslint/config';

export default defineConfig([
    ...coreWebVitals,
    {
        ignores: [
            '.next/**',
            'node_modules/**',
            'playwright-report/**',
            'test-results/**',
            'spikes/**',
            'plans/**'
        ]
    }
]);
