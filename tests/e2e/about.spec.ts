import {expect, test} from '@playwright/test';

test.describe('About', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/about');
    });

    test('should load page successfully', async ({page}) => {
        await expect(page).toHaveTitle(/About meta title example/);
    });

    test('should use meta content for SEO', async ({page}) => {
        await expect(page).toHaveTitle(/About meta title example/);

        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'About meta description example.');
    });

    test('should display title and description', async ({page}) => {
        await expect(page.getByText('Page title example', {exact: true})).toBeVisible();
        await expect(page.getByText('Page content example.')).toBeVisible();
    });

    test('should display a portrait photo', async ({page}) => {
        await expect(page.getByTestId('portrait-photo')).toBeVisible();
        await expect(page.getByTestId('portrait-photo')).toHaveAttribute(
            'alt',
            'Portrait photo of Sean McEmerson'
        );
    });

    test('should display published work logos', async ({page}) => {
        await expect(page.getByTestId('published-work-logos')).toBeVisible();
    });
});
