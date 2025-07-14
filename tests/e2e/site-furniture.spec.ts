import {expect, test} from '@playwright/test';

test.describe('Site furniture', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
    });

    test('should display a header', async ({page}) => {
        await expect(page.getByTestId('site-header')).toBeVisible();
    });

    test('should display a footer', async ({page}) => {
        await expect(page.getByTestId('site-footer')).toBeVisible();
    });

    test('should display a social links menu', async ({page}) => {
        const socialLinks = page.getByTestId('social-links');
        await expect(socialLinks).toBeVisible();
        await expect(socialLinks.getByLabel('Instagram')).toBeVisible();
        await expect(socialLinks.getByLabel('Threads')).toBeVisible();
        await expect(socialLinks.getByLabel('X')).toBeVisible();
        await expect(socialLinks.getByLabel('Bluesky')).toBeVisible();
    });

    test.describe('Desktop', () => {
        test.use({viewport: {width: 1200, height: 500}});

        test('should display a main navigation', async ({page}) => {
            await expect(page.getByTestId('main-navigation-static')).toBeVisible();
            await expect(page.getByTestId('main-navigation')).toBeVisible();
        });

        test('should have a home link', async ({page}) => {
            await page.goto('/about');
            await page.getByTestId('site-header-logo').click();
            await expect(page).toHaveURL('/');
        });

        test('should have functioning links', async ({page}) => {
            const mainNavigation = page.getByTestId('main-navigation');
            await mainNavigation.getByText('About').click();
            await expect(page).toHaveURL('/about');
            await mainNavigation.getByText('Contact').click();
            await expect(page).toHaveURL('/contact');
            await mainNavigation.getByText('Services').click();
            await expect(page).toHaveURL('/services');
        });

        test('should display a dynamic collections menu', async ({page}) => {
            // hover over the collections trigger to open the menu
            await page.getByRole('button', {name: /collections/i}).hover();
            const mainNavigation = page.getByTestId('main-navigation');
            await expect(mainNavigation).toContainText('Collections');
            const collectionsGrid = mainNavigation.getByTestId('collections-grid');
            await expect(collectionsGrid).toBeVisible();
            // links to all collections
            await expect(mainNavigation.getByText('View all collections')).toBeVisible();
            // links to all tags
            await expect(mainNavigation.getByTestId('tags-list')).toBeVisible();
        });

        test('should link to collections in the dynamic menu', async ({page}) => {
            // hover over the collections trigger to open the menu
            await page.getByRole('button', {name: /collections/i}).hover();
            const mainNavigation = page.getByTestId('main-navigation');
            const collectionsGrid = mainNavigation.getByTestId('collections-grid');
            await collectionsGrid.getByText('Example collection 1', {exact: true}).click();
            await expect(page).toHaveURL('/example-collection-1');
        });

        test('should handle keyboard navigation', async ({page}) => {
            const mainNavigation = page.getByTestId('main-navigation');
            const collectionsGrid = mainNavigation.getByTestId('collections-grid');
            // test keyboard navigation - press escape to close menu
            await page.keyboard.press('Escape');
            await expect(collectionsGrid).not.toBeVisible();
            // test opening menu with keyboard
            await page.getByRole('button', {name: /collections/i}).focus();
            await page.keyboard.press('Enter');
            await expect(collectionsGrid).toBeVisible();
        });

        test('should show the page title in the header as user scrolls', async ({page}) => {
            const titlePreview = page.getByTestId('page-header-title-preview');
            await expect(titlePreview).toBeAttached();
            // we can't use 'toBeHidden' because it's just invisible because of opacity, this
            // is required for the animation we use
            await expect(titlePreview).toHaveCSS('opacity', '0');
            await page.evaluate(() => {
                window.scrollTo(0, 1000);
            });
            await expect(titlePreview).toBeVisible();
            await expect(titlePreview.getByText('Home page title example')).toBeVisible();
        });
    });

    test.describe('Mobile', () => {
        test.use({viewport: {width: 640, height: 1024}});

        test.beforeEach(async ({page}) => {
            await page.getByTestId('mobile-menu-toggle').click();
        });

        test('should display a mobile menu', async ({page}) => {
            await expect(page.getByTestId('mobile-menu')).toBeVisible();
            await page.getByTestId('mobile-menu-toggle').click();
            await expect(page.getByTestId('mobile-menu')).not.toBeVisible();
        });

        test('should show main menu', async ({page}) => {
            await expect(page.getByTestId('mobile-menu-main-navigation')).toBeVisible();
        });

        test('should show collections menu', async ({page}) => {
            await expect(page.getByTestId('mobile-menu-collections-navigation')).toBeVisible();
            await expect(
                page
                    .getByTestId('mobile-menu-collections-navigation')
                    .getByText('Example collection 1', {exact: true})
            ).toBeVisible();
            await expect(
                page
                    .getByTestId('mobile-menu-collections-navigation')
                    .getByText('Example collection 2', {exact: true})
            ).toBeVisible();
        });

        test('should link to collections in the mobile menu', async ({page}) => {
            await page.getByText('View all collections').click();
            await expect(page).toHaveURL('/collections');
        });
    });
});
