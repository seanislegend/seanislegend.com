import {expect, test} from '@playwright/test';

test.describe('SEO', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test('should use json-ld for SEO on all pages', async ({page}) => {
        // site-wide schema lives in the head; pages can add their own (e.g. ImageGallery) in main
        await expect(page.locator('head script[type="application/ld+json"]')).toHaveCount(1);

        for (const content of await page
            .locator('script[type="application/ld+json"]')
            .allTextContents()) {
            expect(content).toBeTruthy();
            expect(() => JSON.parse(content)).not.toThrow();
        }
    });
});
