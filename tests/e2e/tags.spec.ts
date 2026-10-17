import {expect, test} from '@playwright/test';

test.describe('Tags', () => {
    test.describe('List page', () => {
        test.beforeEach(async ({page}) => {
            await page.goto('/categories');
        });

        test('should load page successfully', async ({page}) => {
            await expect(page).toHaveTitle(/Photography categories/);
        });

        test('should display all links', async ({page}) => {
            await expect(page.locator('a.link-item')).toHaveCount(4);
        });

        test('should link to detail pages', async ({page}) => {
            await page.locator('a.link-item', {hasText: 'Example tag 1'}).click();
            await expect(page).toHaveURL('/example-tag-1-photography');
        });
    });

    test.describe('Detail page', () => {
        test.beforeEach(async ({page}) => {
            await page.goto('/example-tag-1-photography');
        });

        test('should load page successfully', async ({page}) => {
            await expect(page).toHaveTitle(/Example tag 1 photos/);
        });

        test('should display title and description', async ({page}) => {
            await expect(
                page.getByRole('heading', {name: 'Example tag 1 photos', exact: true})
            ).toBeVisible();
            await expect(page.getByText('Example tag 1 description.')).toBeVisible();
        });

        test('should show featured collections with same tag', async ({page}) => {
            await expect(page.getByText('Featured')).toBeVisible();
            await expect(page.getByText('Example collection 1 page title')).toBeVisible();
        });

        test('should link to featured collections', async ({page}) => {
            await page.getByText('Example collection 1 page title').click();
            await expect(page).toHaveURL('/example-collection-1');
        });

        test('should display photos', async ({page}) => {
            await expect(page.getByTestId('masonry')).toBeVisible();
            await expect(page.getByTestId('photo-link')).toHaveCount(1);
        });

        test('should link to photos', async ({page}) => {
            await page.getByTestId('photo-link').first().click();
            // teaser thumbs will link to the photo in the collection page, using the anchor
            // to scroll to the photo
            await expect(page).toHaveURL('/example-collection-1#example-photo-1-slug');
        });

        test('should display all tags', async ({page}) => {
            await expect(page.getByTestId('tags-list')).toBeVisible();
            await expect(page.getByTestId('tags-list').getByRole('listitem')).toHaveCount(4);
        });

        test('should link to all tags', async ({page}) => {
            await page
                .getByTestId('tags-list')
                .getByRole('link', {name: /Example tag 1/})
                .click();
            await expect(page).toHaveURL('/example-tag-1-photography');
        });
    });
});
