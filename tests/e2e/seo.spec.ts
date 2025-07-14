import {expect, test} from '@playwright/test';

test.describe('SEO', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test('should use json-ld for SEO on all pages', async ({page}) => {
        const jsonLd = page.locator('script[type="application/ld+json"]');
        await expect(jsonLd).toHaveCount(1);

        const content = await jsonLd.textContent();
        expect(content).toBeTruthy();
        expect(() => JSON.parse(content!)).not.toThrow();
    });
});
