import coreWebVitals from 'eslint-config-next/core-web-vitals';
import reactHooks from 'eslint-plugin-react-hooks';
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
    },
    {
        plugins: {'react-hooks': reactHooks},
        rules: {
            // TODO: re-enable — pre-existing violations surfaced by next 16's react-hooks rules; clean up in a follow-up
            'react-hooks/refs': 'warn',
            'react-hooks/set-state-in-effect': 'warn'
        }
    }
]);
