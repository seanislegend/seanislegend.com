import {expect, test} from '@playwright/test';

test.describe('Home', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test('should load page successfully', async ({page}) => {
        await expect(page).toHaveTitle(/Home meta title example/);
    });

    test('should display featured collections', async ({page}) => {
        await expect(page.getByTestId('collection-links-carousel')).toBeVisible();
    });

    // home page is just a special type of collection page, see collection.spec.ts for more tests
});
