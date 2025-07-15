import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        screenshot: 'only-on-failure'
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']}
        }
        // {
        //     name: 'firefox',
        //     use: {...devices['Desktop Firefox']}
        // },
        // {
        //     name: 'webkit',
        //     use: {...devices['Desktop Safari']}
        // },
        // {
        //     name: 'Mobile Chrome',
        //     use: {...devices['Pixel 5']}
        // },
        // {
        //     name: 'Mobile Safari',
        //     use: {...devices['iPhone 12']}
        // }
    ],
    webServer: {
        command: process.env.SKIP_BUILD ? 'bun start' : 'bun run test:prepare',
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
        env: {
            NODE_ENV: 'test',
            NEXT_PUBLIC_URL: 'http://localhost:3000',
            CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID!,
            CONTENTFUL_ENVIRONMENT_ID: process.env.CONTENTFUL_ENVIRONMENT_ID!,
            CONTENTFUL_DELIVERY_API_KEY: process.env.CONTENTFUL_DELIVERY_API_KEY!,
            CONTENTFUL_PREVIEW_API_KEY: process.env.CONTENTFUL_PREVIEW_API_KEY!
        }
    }
});
