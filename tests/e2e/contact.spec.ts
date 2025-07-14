import {expect, test} from '@playwright/test';

test.describe('Contact', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/contact');
    });

    test('should load page successfully', async ({page}) => {
        await expect(page).toHaveTitle(/Contact meta title example/);
    });

    test('should use meta content for SEO', async ({page}) => {
        await expect(page).toHaveTitle(/Contact meta title example/);

        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute(
            'content',
            'Contact meta description example.'
        );
    });

    test('should display title and description', async ({page}) => {
        await expect(page.getByText('Page title example', {exact: true})).toBeVisible();
        await expect(page.getByText('Page content example.')).toBeVisible();
    });
});
