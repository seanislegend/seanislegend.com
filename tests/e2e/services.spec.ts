import {expect, test} from '@playwright/test';

test.describe('Services', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/services');
    });

    test('should load page successfully', async ({page}) => {
        await expect(page).toHaveTitle(/Services meta title example/);
    });

    test('should use meta content for SEO', async ({page}) => {
        await expect(page).toHaveTitle(/Services meta title example/);

        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute(
            'content',
            'Services meta description example.'
        );
    });

    test('should display title and description', async ({page}) => {
        await expect(page.getByText('Services page title example', {exact: true})).toBeVisible();
        await expect(page.getByText('Services content example.')).toBeVisible();
    });

    test('should display service offering title', async ({page}) => {
        await expect(
            page.getByText('Service offering 1 title example', {exact: true})
        ).toBeVisible();
    });

    test('should display service offering content', async ({page}) => {
        await expect(page.getByText('Service offering 1 description example.')).toBeVisible();
    });

    test('should display service offering enquiry link using service title', async ({page}) => {
        await expect(
            page.getByText('Enquire about service offering 1 title example')
        ).toBeVisible();
        await expect(
            page.getByText('Enquire about service offering 1 title example')
        ).toHaveAttribute('href', '/contact?service=Service offering 1 title example');
    });

    test('should use the content section ID to view more photos with the same tag', async ({
        page
    }) => {
        await expect(page.getByText('View more photos')).toBeVisible();
        await expect(page.getByText('View more photos')).toHaveAttribute(
            'href',
            '/tags/service-offering-1'
        );
    });

    test('should display a photo grid for each service offering', async ({page}) => {
        await expect(page.getByTestId('photo-grid')).toBeVisible();
        await expect(page.getByTestId('photo-grid').getByTestId('photo-link')).toHaveCount(4);
    });
});
